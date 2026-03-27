import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { runRecording } from '../../../tools/recording/run-recording.mjs';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

await runRecording({
  projectDir,
  baseUrl: 'http://127.0.0.1:3000',
  routes: [
    { path: '/', label: 'Interface Hub' },
    { path: '/cli', label: 'CLI Interface' },
    { path: '/gui', label: 'GUI Interface' },
    { path: '/touch', label: 'Touch Interface' },
    { path: '/voice', label: 'Voice Interface' },
    { path: '/gesture', label: 'Gesture Interface' },
    { path: '/timeline', label: 'Timeline' },
  ],
});
