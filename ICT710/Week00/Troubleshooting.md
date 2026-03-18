# Week 00 Troubleshooting

This page lists common setup issues students may face in Week 00.

## Problem: `node: command not found`

Cause:

- Node.js is not installed, or the terminal cannot find it.

Fix:

1. install Node.js
2. close and reopen the terminal
3. run:

```bash
node -v
```

## Problem: `npm: command not found`

Cause:

- npm is missing from the terminal path
- Node.js installation is incomplete

Fix:

1. confirm Node.js is installed
2. run:

```bash
which npm
```

3. if needed, use the full path temporarily, for example:

```bash
/opt/homebrew/bin/npm -v
```

## Problem: `npm install` fails

Possible causes:

- unstable internet
- interrupted download
- permissions issue

Fix:

1. retry `npm install`
2. check internet connection
3. remove `node_modules` and retry:

```bash
rm -rf node_modules
npm install
```

## Problem: `npm run dev` starts but browser page does not load

Fix:

1. check terminal output for the local URL
2. open the exact URL shown by Next.js
3. confirm no other app is already using port `3000`

If port `3000` is busy, Next.js may choose another port.

## Problem: `npm run build` fails

Possible causes:

- syntax error
- missing import
- incorrect component code

Fix:

1. read the first error carefully
2. return to the referenced file and line
3. fix one error at a time
4. rerun:

```bash
npm run build
```

## Problem: browser shows old content

Fix:

1. save the file
2. refresh the page
3. restart the dev server if needed

## Problem: student is unsure if the setup is complete

Use this checklist:

- can run `node -v`
- can run `npm -v`
- can run `npm install`
- can run `npm run dev`
- can open the app in browser
- can edit UI text and see changes
- can run `npm run build`

If all are true, the environment is ready.
