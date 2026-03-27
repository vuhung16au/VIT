import { spawn } from 'node:child_process';
import { access, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { pathToFileURL } from 'node:url';

const DEFAULT_VIEWPORT = { width: 1440, height: 1024 };
const DEFAULT_WAIT_MS = 1400;
const DEFAULT_TIMEOUT_MS = 60000;

function withHomebrewPath(env) {
  const nextPath = ['/opt/homebrew/bin', env.PATH].filter(Boolean).join(':');
  return { ...env, PATH: nextPath };
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function loadPlaywright(projectDir, repoRoot) {
  const candidates = [
    path.join(projectDir, 'node_modules', 'playwright', 'index.mjs'),
    path.join(repoRoot, 'Week05', 'feedback-forge', 'node_modules', 'playwright', 'index.mjs'),
  ];

  for (const candidate of candidates) {
    if (await fileExists(candidate)) {
      return import(pathToFileURL(candidate).href);
    }
  }

  try {
    return await import('playwright');
  } catch {
    throw new Error(
      'Unable to load Playwright. Install it in this project or keep Week05/feedback-forge dependencies available.',
    );
  }
}

function createOutputCollector(stream, chunks) {
  stream?.on('data', (chunk) => {
    chunks.push(chunk.toString());
    if (chunks.length > 50) {
      chunks.shift();
    }
  });
}

function extractCandidateUrls(baseUrl, outputChunks) {
  const candidates = new Set([baseUrl]);
  const joinedOutput = outputChunks.join('\n');
  const matches = joinedOutput.match(/https?:\/\/(?:127\.0\.0\.1|localhost):\d+/g) ?? [];

  for (const match of matches) {
    candidates.add(match);
  }

  return Array.from(candidates);
}

async function waitForServer(baseUrl, server, outputChunks, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  let lastError = '';

  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(
        `Dev server exited before becoming ready (code ${server.exitCode}).\n${outputChunks.join('')}`,
      );
    }

    const candidates = extractCandidateUrls(baseUrl, outputChunks);

    for (const candidate of candidates) {
      try {
        const response = await fetch(candidate);
        if (response.ok || response.status < 500) {
          return candidate;
        }
      } catch (error) {
        lastError = error instanceof Error ? error.message : String(error);
      }
    }

    await delay(1000);
  }

  throw new Error(`Timed out waiting for ${baseUrl}. Last error: ${lastError}\n${outputChunks.join('')}`);
}

function normalizeRoutes(routes) {
  return routes.map((route) => (typeof route === 'string' ? { path: route, label: route } : route));
}

async function autoFillVisibleFields(page) {
  await page.evaluate(() => {
    const isVisible = (element) => {
      const style = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== 'none'
        && style.visibility !== 'hidden'
        && rect.width > 0
        && rect.height > 0;
    };

    const fireEvents = (element) => {
      element.dispatchEvent(new Event('input', { bubbles: true }));
      element.dispatchEvent(new Event('change', { bubbles: true }));
    };

    const setInputValue = (element, value) => {
      const prototype = element instanceof HTMLTextAreaElement
        ? HTMLTextAreaElement.prototype
        : HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(prototype, 'value');
      descriptor?.set?.call(element, value);
      fireEvents(element);
    };

    const setSelectValue = (element) => {
      const option = Array.from(element.options).find((item) => item.value && !item.disabled);
      if (!option) {
        return false;
      }
      element.value = option.value;
      fireEvents(element);
      return true;
    };

    const inferText = (element) => {
      const label = element.labels?.[0]?.textContent ?? '';
      return `${label} ${element.getAttribute('aria-label') ?? ''} ${element.getAttribute('name') ?? ''} ${element.getAttribute('placeholder') ?? ''}`.toLowerCase();
    };

    const elements = Array.from(document.querySelectorAll('input, textarea, select'))
      .filter((element) => !element.disabled && isVisible(element))
      .slice(0, 8);

    for (const element of elements) {
      if (element instanceof HTMLSelectElement) {
        setSelectValue(element);
        continue;
      }

      if (element instanceof HTMLInputElement) {
        if (['hidden', 'submit', 'button', 'file', 'image', 'range', 'color'].includes(element.type)) {
          continue;
        }

        if (['checkbox', 'radio'].includes(element.type)) {
          if (!element.checked) {
            element.click();
          }
          continue;
        }
      }

      const metadata = inferText(element);
      let value = 'Sample response';

      if (metadata.includes('name')) value = 'Sarah Chen';
      else if (metadata.includes('email')) value = 'sarah.chen@example.com';
      else if (metadata.includes('phone') || metadata.includes('mobile') || metadata.includes('tel')) value = '0412 345 678';
      else if (metadata.includes('search') || metadata.includes('query')) value = 'doctor consultation';
      else if (metadata.includes('date')) value = '2026-04-01';
      else if (metadata.includes('time')) value = '10:00';
      else if (metadata.includes('message') || metadata.includes('notes') || metadata.includes('comment')) value = 'Interested in learning more about this workflow.';

      if (element instanceof HTMLTextAreaElement || element instanceof HTMLInputElement) {
        setInputValue(element, value);
      }
    }
  });
}

async function smoothScroll(page, pauseMs) {
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  const viewportHeight = page.viewportSize()?.height ?? DEFAULT_VIEWPORT.height;

  if (pageHeight <= viewportHeight) {
    await delay(pauseMs);
    return;
  }

  const maxOffset = Math.max(pageHeight - viewportHeight, 0);
  const steps = Math.min(4, Math.max(2, Math.ceil(maxOffset / 500)));

  for (let step = 1; step <= steps; step += 1) {
    const target = Math.round((maxOffset * step) / steps);
    await page.evaluate((offset) => window.scrollTo({ top: offset, behavior: 'smooth' }), target);
    await delay(pauseMs);
  }

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await delay(pauseMs);
}

export async function runRecording({
  projectDir,
  baseUrl,
  routes,
  startCommand = ['npm', 'run', 'dev'],
  viewport = DEFAULT_VIEWPORT,
  waitMs = DEFAULT_WAIT_MS,
  startupTimeoutMs = DEFAULT_TIMEOUT_MS,
}) {
  const repoRoot = path.resolve(projectDir, '..', '..');
  const imagesDir = path.join(projectDir, 'images');
  const normalizedRoutes = normalizeRoutes(routes);

  await mkdir(imagesDir, { recursive: true });

  const [command, ...args] = startCommand;
  const outputChunks = [];

  console.log(`Starting dev server in ${projectDir}...`);
  const server = spawn(command, args, {
    cwd: projectDir,
    detached: true,
    env: withHomebrewPath(process.env),
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  createOutputCollector(server.stdout, outputChunks);
  createOutputCollector(server.stderr, outputChunks);

  let browser;
  let context;

  try {
    const resolvedBaseUrl = await waitForServer(baseUrl, server, outputChunks, startupTimeoutMs);
    console.log(`Server ready at ${resolvedBaseUrl}`);

    const { chromium } = await loadPlaywright(projectDir, repoRoot);
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext({
      viewport,
      recordVideo: {
        dir: imagesDir,
        size: viewport,
      },
    });

    const page = await context.newPage();

    for (let index = 0; index < normalizedRoutes.length; index += 1) {
      const route = normalizedRoutes[index];
      const targetUrl = new URL(route.path, resolvedBaseUrl).toString();
      console.log(`Scene ${index + 1}: ${route.label}`);
      await page.goto(targetUrl, { waitUntil: 'domcontentloaded' });
      await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
      await delay(waitMs);
      await autoFillVisibleFields(page);
      await delay(Math.max(500, Math.floor(waitMs / 2)));
      await smoothScroll(page, waitMs);
    }

    console.log('Recording complete.');
  } finally {
    if (context) {
      await context.close().catch(() => {});
    }

    if (browser) {
      await browser.close().catch(() => {});
    }

    if (server.pid) {
      console.log('Stopping dev server...');
      try {
        process.kill(-server.pid);
      } catch (error) {
        if (!(error instanceof Error) || !('code' in error) || error.code !== 'ESRCH') {
          throw error;
        }
      }
    }
  }
}
