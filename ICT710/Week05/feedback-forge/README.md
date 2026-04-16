# Feedback Forge

A frontend-only Next.js demo for Week 05 of ICT710. The project adds practical data gathering techniques to a doctor booking experience, including questionnaires, interview scheduling, observational analytics, and triangulated insights.

## Demo

[https://feedback-forge-rho.vercel.app](https://feedback-forge-rho.vercel.app)

## What This Demo Shows

1. An in-app questionnaire shown after booking completion.
2. An interview scheduling form with validation and localStorage persistence.
3. A usage observation dashboard with simulated heatmap and drop-off insights.
4. A triangulation view that combines quantitative, qualitative, and behavioral evidence.
5. A recording-methods comparison with a simple consent workflow.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Bootstrap 5.3.3 styling patterns
- TypeScript

## Scope

- Frontend only
- Dummy data only
- No backend implementation

## Route Map

- `/` - Feedback Forge hub with booking, interview, and recording demos
- `/booking-complete` - Post-booking questionnaire
- `/admin/analytics` - Usage observation dashboard
- `/admin/insights` - Data triangulation dashboard

## 🚀 Deploy to Vercel

This project is deployed on Vercel: [https://feedback-forge-rho.vercel.app](https://feedback-forge-rho.vercel.app)

### Quick Deploy

```bash
# From the project directory
vercel --yes

# For production deployment
vercel --prod
```

### Configuration

The project includes a `vercel.json` configuration file that specifies:
- Framework: Next.js
- Build command: `npm run build`
- Install command: `npm install`
