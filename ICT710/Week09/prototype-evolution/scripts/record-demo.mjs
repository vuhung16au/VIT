import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { runRecording } from '../../../tools/recording/run-recording.mjs';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

await runRecording({
  projectDir,
  baseUrl: 'http://127.0.0.1:3000',
  routes: [
    { path: '/', label: 'Prototype Gallery' },
    { path: '/prototypes/paper', label: 'Paper Prototype' },
    { path: '/prototypes/wireframe', label: 'Wireframe Prototype' },
    { path: '/prototypes/low-fi', label: 'Low-Fidelity Prototype' },
    { path: '/prototypes/high-fi', label: 'High-Fidelity Prototype' },
    { path: '/storyboard', label: 'Storyboard' },
    { path: '/wizard-oz', label: 'Wizard of Oz Demo' },
    { path: '/components-demo', label: 'Components Demo' },
  ],
});
