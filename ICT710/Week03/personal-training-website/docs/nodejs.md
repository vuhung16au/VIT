# Node.js and npm requirements for personal-training-website

This project requires Node.js and npm to install dependencies, run development mode, and build production output.

## Recommended versions

- Node.js: 20 LTS or newer (recommended: 20.11+ or 22 LTS)
- npm: comes with Node.js (recommended npm 10+)

Check your versions:

node -v
npm -v

## Install Node.js

Choose one method.

### Option A: Official installer (simple)

1. Go to nodejs.org.
2. Download and install the LTS version.
3. Reopen terminal and verify:
   node -v
   npm -v

### Option B: nvm (recommended for managing versions)

1. Install nvm.
2. Install and use Node 20 LTS:
   nvm install 20
   nvm use 20
3. Verify:
   node -v
   npm -v

## Install project dependencies

From the project root:

npm install

## Run locally (development)

npm run dev

Then open:

http://localhost:3000

## Build and run production locally

1. Build:
   npm run build
2. Start production server:
   npm run start

## Required npm scripts in this project

- npm run dev: start Next.js development server
- npm run build: create production build
- npm run start: run production server
- npm run lint: run ESLint checks
