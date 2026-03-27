import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { runRecording } from '../../../tools/recording/run-recording.mjs';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

await runRecording({
  projectDir,
  baseUrl: 'http://127.0.0.1:3000',
  routes: [
    { path: '/', label: 'Design System Overview' },
    { path: '/foundations/typography', label: 'Typography' },
    { path: '/foundations/colors', label: 'Colors' },
    { path: '/foundations/icons', label: 'Icons' },
    { path: '/foundations/layout', label: 'Layout' },
    { path: '/foundations/motion', label: 'Motion' },
    { path: '/components/buttons', label: 'Buttons' },
    { path: '/components/forms', label: 'Forms' },
    { path: '/components/cards', label: 'Cards' },
    { path: '/components/navigation', label: 'Navigation' },
  ],
});
