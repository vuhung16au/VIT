import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { runRecording } from '../../../tools/recording/run-recording.mjs';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

await runRecording({
  projectDir,
  baseUrl: 'http://127.0.0.1:3000',
  routes: [
    { path: '/', label: 'Usability Lab Hub' },
    { path: '/plan', label: 'Plan' },
    { path: '/recruit', label: 'Recruit' },
    { path: '/conduct', label: 'Conduct' },
    { path: '/think-aloud', label: 'Think Aloud' },
    { path: '/analyze', label: 'Analyze' },
    { path: '/report', label: 'Report' },
  ],
});
