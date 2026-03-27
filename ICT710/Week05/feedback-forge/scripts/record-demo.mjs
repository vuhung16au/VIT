import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { setTimeout } from 'timers/promises';

const BASE_URL = 'http://127.0.0.1:3000';
const WAIT_TIME = 2000; // 2 seconds between actions

async function startDevServer() {
  console.log('Starting Next.js dev server...');
  const server = spawn('npm', ['run', 'dev'], {
    stdio: 'pipe',
    detached: true
  });
  
  // Wait for server to be ready
  await new Promise((resolve) => {
    server.stdout.on('data', (data) => {
      if (data.toString().includes('Ready') || data.toString().includes('localhost:3000')) {
        console.log('Server ready!');
        resolve();
      }
    });
  });
  
  return server;
}

async function recordDemo() {
  let server;
  try {
    server = await startDevServer();
    await setTimeout(3000);

    const browser = await chromium.launch({
      headless: false, // Set to true for headless recording
    });
    
    const context = await browser.newContext({
      viewport: { width: 960, height: 1106 },
      recordVideo: {
        dir: './images/',
        size: { width: 960, height: 1106 }
      }
    });

    const page = await context.newPage();
    
    // Scene 1: Homepage with forms
    console.log('Scene 1: Homepage');
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');
    await setTimeout(WAIT_TIME);
    
    // Scroll to show full page
    await page.evaluate(() => window.scrollTo(0, 0));
    await setTimeout(1000);
    
    // Fill booking form
    const bookingForm = page.locator('div.card').filter({ hasText: 'Book a doctor consultation' }).first();
    await bookingForm.locator('.col-md-6').filter({ hasText: 'Full name' }).locator('input').fill('Sarah Chen');
    await setTimeout(500);
    
    await bookingForm.locator('.col-md-6').filter({ hasText: /^Email$/ }).locator('input').fill('sarah.chen@example.com');
    await setTimeout(500);

    await bookingForm.locator('.col-12').filter({ hasText: 'Doctor' }).locator('select').selectOption('Dr. Lisa Chen - Dermatology');
    await setTimeout(500);

    await bookingForm.getByRole('button', { name: '2:00 PM' }).click();
    await setTimeout(500);
    
    // Scroll to see interview scheduler
    await page.evaluate(() => window.scrollBy(0, 300));
    await setTimeout(WAIT_TIME);
    
    // Fill interview scheduler
    const interviewCard = page.locator('div.card').filter({ hasText: 'Schedule a user interview' }).first();
    await interviewCard.locator('.col-md-6').filter({ hasText: /^Name$/ }).locator('input').fill('Alex Johnson');
    await setTimeout(500);
    await interviewCard.locator('.col-md-6').filter({ hasText: /^Email$/ }).locator('input').fill('alex.johnson@example.com');
    await setTimeout(500);
    await interviewCard.locator('.col-md-6').filter({ hasText: /^Phone$/ }).locator('input').fill('0412 987 654');
    await setTimeout(500);
    await interviewCard.getByRole('button', { name: 'Phone' }).click();
    await setTimeout(500);
    
    // Scroll down to recording methods
    await page.evaluate(() => window.scrollBy(0, 400));
    await setTimeout(WAIT_TIME);
    
    // Scroll to navigation buttons
    await page.evaluate(() => window.scrollBy(0, 300));
    await setTimeout(WAIT_TIME);
    
    // Scene 2: Post-booking questionnaire
    console.log('Scene 2: Booking Complete');
    await page.getByRole('link', { name: 'View post-booking questionnaire' }).click();
    await page.waitForLoadState('networkidle');
    await setTimeout(WAIT_TIME);
    
    // Scroll through questionnaire
    await page.evaluate(() => window.scrollTo(0, 0));
    await setTimeout(1000);
    await page.evaluate(() => window.scrollBy(0, 300));
    await setTimeout(1500);
    await page.evaluate(() => window.scrollBy(0, 300));
    await setTimeout(WAIT_TIME);
    
    // Scene 3: Analytics Dashboard
    console.log('Scene 3: Analytics Dashboard');
    await page.goto(`${BASE_URL}/admin/analytics`);
    await page.waitForLoadState('networkidle');
    await setTimeout(WAIT_TIME);
    await page.evaluate(() => window.scrollTo(0, 0));
    await setTimeout(1000);
    await page.evaluate(() => window.scrollBy(0, 400));
    await setTimeout(1500);
    await page.evaluate(() => window.scrollBy(0, 400));
    await setTimeout(WAIT_TIME);
    
    // Scene 4: Insights/Triangulation
    console.log('Scene 4: Insights Dashboard');
    await page.goto(`${BASE_URL}/admin/insights`);
    await page.waitForLoadState('networkidle');
    await setTimeout(WAIT_TIME);
    await page.evaluate(() => window.scrollTo(0, 0));
    await setTimeout(1000);
    await page.evaluate(() => window.scrollBy(0, 400));
    await setTimeout(1500);
    await page.evaluate(() => window.scrollBy(0, 400));
    await setTimeout(WAIT_TIME);
    
    // Scene 5: Return to homepage
    console.log('Scene 5: Return Home');
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');
    await setTimeout(WAIT_TIME);
    await page.evaluate(() => window.scrollTo(0, 0));
    await setTimeout(WAIT_TIME);

    console.log('Recording complete!');
    
    await context.close();
    await browser.close();
    
  } finally {
    if (server) {
      console.log('Stopping dev server...');
      process.kill(-server.pid);
    }
  }
}

recordDemo().catch(console.error);
