# ICT710 Demo Recording

This repo includes a shared browser-recording workflow for the main demo projects used across Weeks 01 to 12.

## Supported Projects

- `Week01/01.Create-Personal-Website`
- `Week01/02.Doctor-App`
- `Week02/01.Booking-App-Design`
- `Week02/02.Booking-App`
- `Week03/cognitive-social-ux`
- `Week03/patient-journey`
- `Week03/personal-training-website`
- `Week05/feedback-forge`
- `Week06/interface-playground`
- `Week07/persona-first`
- `Week08/requirements-hub`
- `Week09/prototype-evolution`
- `Week10/design-system-studio`
- `Week11/evaluation-toolkit`
- `Week12/usability-lab-simulator`

## One-Time Setup

1. Install project dependencies in the app you want to record with `npm install`.
2. Install Chromium for Playwright in at least one recorder-enabled project:
   ```bash
   npx playwright install chromium
   ```
3. Install `ffmpeg` if it is not already available:
   ```bash
   brew install ffmpeg
   ```

The shared recorder prefers a local `playwright` install in the project being recorded. If that is missing, it falls back to the Week 05 `feedback-forge` install when available.

## Usage

From the repo root:

```bash
make demo
```

From an individual project:

```bash
make demo
```

Or:

```bash
npm run demo:record
```

## Output

- Temporary recordings are written to `images/*.webm`
- Final GIFs are written to `images/<project-name>.gif`

Each project also includes a local `RECORDING.md` with the expected output filename and commands.
