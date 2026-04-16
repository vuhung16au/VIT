# Cognitive Social UX

A frontend-only Next.js + Tailwind CSS demo for Week 03 of ICT710. The project focuses on user experience foundations through cognitive UX, social UX, emotional trust-building, and A/B testing.

## Demo

[https://cognitive-social-ux.vercel.app](https://cognitive-social-ux.vercel.app)

## What This Demo Shows

1. Cognitive UX demos for attention, memory, and learning.
2. Social and emotional UX examples for trust and family account booking.
3. A simple A/B testing simulator for comparing design variants.
4. A student-friendly hub that connects UX psychology to interface decisions.

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- TypeScript

## Scope

- Frontend only
- Dummy data only
- No backend implementation

## Route Map

- `/` - Week 03 demo hub
- `/cognitive-ux` - Cognitive UX overview
- `/cognitive-ux/attention` - Visual hierarchy comparison
- `/cognitive-ux/memory` - Recognition vs recall
- `/cognitive-ux/learning` - Progressive disclosure
- `/social-emotional/trust` - Trust-building design comparison
- `/social-emotional/social` - Family account management
- `/ab-testing` - A/B testing simulator
- `/key-takeaways` - Student reflection summary
- `/concepts` - UX concept mapping

## 🚀 Deploy to Vercel

This project is deployed on Vercel: [https://cognitive-social-ux.vercel.app](https://cognitive-social-ux.vercel.app)

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
