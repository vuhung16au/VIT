import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { runRecording } from '../../../tools/recording/run-recording.mjs';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

await runRecording({
  projectDir,
  baseUrl: 'http://127.0.0.1:3000',
  routes: [
    { path: '/', label: 'Week 03 Hub' },
    { path: '/cognitive-ux', label: 'Cognitive UX' },
    { path: '/ab-testing', label: 'A/B Testing' },
    { path: '/concepts', label: 'Concept Map' },
    { path: '/key-takeaways', label: 'Key Takeaways' },
  ],
});
