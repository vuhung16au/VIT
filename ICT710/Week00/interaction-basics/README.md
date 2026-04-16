# Interaction Basics

`interaction-basics` is the Week 00 starter app for ICT710.

## Demo 

[demo](https://interaction-basics.vercel.app)

## Purpose

This small project helps students:

- confirm that Node.js, npm, and Next.js are working
- run a local development server
- edit a small interface and see the result
- understand how simple UI states can demonstrate IxD principles

## What the app includes

- name input
- email input
- consultation type selection
- visible time-slot selection
- disabled submit until the form is valid
- loading feedback while submitting
- confirmation state after success

## IxD concepts demonstrated

- visibility of system status
- feedback
- error prevention
- consistency
- recognition rather than recall

## Run

```bash
npm install
npm run dev
```

## Verify

```bash
npm run build
npm run lint
```

## Deploy to Vercel

### Option 1: Vercel CLI (Recommended for first-time deployment)

```bash
# From the project directory
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No (first time) or Yes (redeployment)
# - Project name? interaction-basics (or your preferred name)
# - Directory? ./ (current directory)
# - Override settings? No
```

### Option 2: Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New..." → "Project"
4. Import your repository
5. Vercel will auto-detect Next.js and configure settings
6. Click "Deploy"

### Production Deployment

```bash
# Deploy to production
vercel --prod
```

### Notes

- The project is configured for Vercel with `vercel.json`
- No environment variables required for basic deployment
- Build command: `next build --webpack`
- Output directory: `.next`
