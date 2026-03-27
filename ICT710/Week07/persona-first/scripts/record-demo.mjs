import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { runRecording } from '../../../tools/recording/run-recording.mjs';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

await runRecording({
  projectDir,
  baseUrl: 'http://127.0.0.1:3000',
  routes: [
    { path: '/', label: 'Persona Landing Page' },
    { path: '/personas', label: 'Persona Gallery' },
    { path: '/booking/sarah', label: 'Sarah Booking Flow' },
    { path: '/booking/robert', label: 'Robert Booking Flow' },
    { path: '/booking/maya', label: 'Maya Booking Flow' },
    { path: '/guidelines', label: 'Guidelines' },
  ],
});
