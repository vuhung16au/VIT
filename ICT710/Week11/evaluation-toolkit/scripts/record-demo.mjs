import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { runRecording } from '../../../tools/recording/run-recording.mjs';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

await runRecording({
  projectDir,
  baseUrl: 'http://127.0.0.1:3000',
  routes: [
    { path: '/', label: 'Evaluation Hub' },
    { path: '/heuristic', label: 'Heuristic Evaluation' },
    { path: '/cognitive-walkthrough', label: 'Cognitive Walkthrough' },
    { path: '/analytics', label: 'Analytics Review' },
    { path: '/checklist', label: 'Checklist' },
    { path: '/comparison', label: 'Comparison' },
    { path: '/ab-testing', label: 'A/B Testing' },
  ],
});
