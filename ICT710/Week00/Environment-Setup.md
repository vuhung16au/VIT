# Week 00 Environment Setup

This guide helps students prepare a working frontend development environment before the main weekly demos begin.

## Goal

By the end of Week 00, students should be able to:

- install Node.js and npm
- verify that the terminal can run `node` and `npm`
- create and run a Next.js project
- open a local development server in the browser
- build a project successfully with `npm run build`

## Recommended Setup

## 1. Install Node.js

Install a current LTS version of Node.js.

After installation, check:

```bash
node -v
npm -v
```

Both commands should print a version number.

## 2. Install a Code Editor

Recommended:

- VS Code

Optional AI coding tools:

- Codex
- Cursor
- GitHub Copilot

## 3. Create a Next.js App

From the `Week00` folder:

```bash
npx create-next-app@latest interaction-basics --ts --eslint --app --src-dir
```

Suggested answers:

- TypeScript: `Yes`
- ESLint: `Yes`
- Tailwind CSS: `Yes`
- `src/` directory: `Yes`
- App Router: `Yes`

## 4. Run the App

```bash
cd interaction-basics
npm install
npm run dev
```

Open:

- [http://localhost:3000](http://localhost:3000)

## 5. Build the App

```bash
npm run build
```

This checks that the project can compile successfully for production.

## 6. Basic Workflow Students Should Practice

Students should be comfortable with:

1. open terminal
2. `cd` into project folder
3. run `npm install`
4. run `npm run dev`
5. edit a file such as `src/app/page.tsx`
6. refresh browser and observe UI changes
7. run `npm run build`

## Suggested File Awareness

Students do not need to understand everything yet, but they should recognize:

- `package.json`
- `src/app/page.tsx`
- `src/app/layout.tsx`
- `public/`
- `node_modules/`

## Build Success Checklist

Students are ready for Week 01 if they can answer yes to all:

- `node -v` works
- `npm -v` works
- `npm run dev` starts the local server
- the browser loads the page
- editing `page.tsx` changes the UI
- `npm run build` succeeds
