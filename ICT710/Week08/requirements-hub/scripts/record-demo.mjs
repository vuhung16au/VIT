import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { runRecording } from '../../../tools/recording/run-recording.mjs';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

await runRecording({
  projectDir,
  baseUrl: 'http://127.0.0.1:3000',
  routes: [
    { path: '/', label: 'Requirements Hub Home' },
    { path: '/requirements', label: 'Requirements Overview' },
    { path: '/requirements/functional', label: 'Functional Requirements' },
    { path: '/requirements/non-functional', label: 'Non-Functional Requirements' },
    { path: '/requirements/user-stories', label: 'User Stories' },
    { path: '/requirements/use-cases', label: 'Use Cases' },
    { path: '/requirements/environment', label: 'Environmental Requirements' },
    { path: '/traceability', label: 'Traceability Matrix' },
    { path: '/prioritization', label: 'Prioritization Board' },
  ],
});
