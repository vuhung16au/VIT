# Deploy personal-training-website to Vercel

This project is a Next.js app, so Vercel deployment is straightforward.

## 1. Prepare the project

1. Ensure the app builds locally:
   npm install
   npm run build
2. Commit and push your code to GitHub.

## 2. Create a Vercel project

1. Sign in at vercel.com.
2. Click Add New Project.
3. Import the GitHub repository and select the folder for this app if prompted.

## 3. Configure build settings

Vercel usually detects Next.js automatically.

Recommended values:
- Framework Preset: Next.js
- Build Command: npm run build
- Install Command: npm install
- Output Directory: leave empty (auto for Next.js)

## 4. Set environment variables (if any)

If you use environment variables locally (such as .env.local), add the same keys in:
Project Settings -> Environment Variables.

## 5. Deploy

1. Click Deploy.
2. After build completes, open the generated production URL.

## 6. Redeploy on changes

Each push to the connected branch triggers a new deployment automatically.

## Optional: Vercel CLI deploy

1. Install CLI:
   npm install -g vercel
2. Run from the project folder:
   vercel
3. For production deploy:
   vercel --prod
