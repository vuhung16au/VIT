# Deployment Information

## Project: Interaction Basics

### Vercel Deployment Status

✅ **Successfully Deployed**

### Live URLs

- **Production**: https://interaction-basics.vercel.app
- **Project Dashboard**: https://vercel.com/vuhung16plus-6477s-projects/interaction-basics

### Deployment Configuration

The project is configured with the following settings in `vercel.json`:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "regions": ["sfo1"],
  "git": {
    "deploymentEnabled": true
  }
}
```

### Build Information

- **Framework**: Next.js 16.1.6
- **Build Time**: ~50 seconds
- **Build Command**: `next build --webpack`
- **Output Directory**: `.next`
- **Node Version**: 20.x (Vercel default)

### Redeployment

To redeploy:

```bash
# Preview deployment (branch/commit specific)
vercel

# Production deployment
vercel --prod
```

### Auto-deployment

When connected to Git, Vercel will automatically:
- Deploy previews for pull requests
- Deploy to production when merging to main branch

### Notes

- No environment variables required for this project
- The `.vercel` directory is git-ignored
- Build succeeds with TypeScript strict mode
- All routes are static and pre-rendered
