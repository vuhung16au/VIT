import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { runRecording } from '../../../tools/recording/run-recording.mjs';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

await runRecording({
  projectDir,
  baseUrl: 'http://127.0.0.1:3000',
  routes: [
    { path: '/', label: 'Scene 1' },
    { path: '/scene-2', label: 'Scene 2' },
    { path: '/scene-3', label: 'Scene 3' },
    { path: '/scene-4', label: 'Scene 4' },
    { path: '/concepts', label: 'Concepts' },
    { path: '/key-takeaways', label: 'Key Takeaways' },
  ],
});
