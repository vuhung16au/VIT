import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { runRecording } from '../../../tools/recording/run-recording.mjs';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

await runRecording({
  projectDir,
  baseUrl: 'http://127.0.0.1:5173',
  routes: [
    { path: '/', label: 'Week 02 Hub' },
    { path: '/interaction-types', label: 'Interaction Types' },
    { path: '/interaction-types/instructing', label: 'Instructing Interface' },
    { path: '/interaction-types/conversing', label: 'Conversing Interface' },
    { path: '/interaction-types/manipulating', label: 'Manipulating Interface' },
    { path: '/interaction-types/exploring', label: 'Exploring Interface' },
    { path: '/problem-space', label: 'Problem Space Analysis' },
    { path: '/problem-space/conceptual-model', label: 'Conceptual Model' },
    { path: '/book', label: 'Booking Flow' },
    { path: '/appointments', label: 'Appointments' },
  ],
});
