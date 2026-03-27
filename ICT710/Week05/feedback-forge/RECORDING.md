# Automated Demo Recording

This project includes automated browser recording to create demo videos.

## Setup (One-time)

1. **Install Playwright and dependencies:**
   ```bash
   npm install
   npx playwright install chromium
   ```

2. **Install ffmpeg (if not already installed):**
   ```bash
   brew install ffmpeg
   ```

## Usage

### Quick Start (Recommended)
```bash
npm run demo:record
```

This will:
1. Start the Next.js dev server
2. Record browser interactions
3. Convert to GIF
4. Save as `images/patient-journey.gif`

### Alternative: Via Makefile
```bash
cd Week05
make demo
```

### Step-by-step
```bash
npm run record   # Records video as .webm
npm run gif      # Converts to .gif
```

## Customization

### Adjust Recording Speed
Edit `scripts/record-demo.mjs`:
- Change `WAIT_TIME` (default: 2000ms)
- 1000 = faster, 3000 = slower

### Headless Mode
Edit `scripts/record-demo.mjs`:
- Change `headless: false` to `headless: true`

### GIF Quality
Edit `scripts/convert-to-gif.sh`:
- Change `fps=10` (higher = smoother but larger file)
- Change `scale=960` to adjust width

### Recording Script
Edit `scripts/record-demo.mjs` to:
- Add more page navigations
- Fill different forms
- Add clicks, hovers, scrolls
- Change interaction timing

## Output

- Recording: `images/*.webm` (temporary)
- Final GIF: `images/patient-journey.gif`
