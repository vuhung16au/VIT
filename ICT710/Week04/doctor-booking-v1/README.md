# Doctor Booking v1

A frontend-only Next.js + Tailwind CSS demo for Week 04 of ICT710. The project applies the Double Diamond framework by starting with a deliberately poor design, defining the problem, building two alternatives, and comparing them through an A/B testing dashboard.

## Demo

[https://doctor-booking-v1.vercel.app](https://doctor-booking-v1.vercel.app)

## What This Demo Shows

1. A deliberately poor booking form for heuristic critique.
2. A multi-step form alternative that uses progressive disclosure.
3. A single-page accordion alternative that keeps more context visible.
4. A comparison homepage and a simple A/B testing dashboard.
5. Design-process documentation across Discover, Define, and Deliver.

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- TypeScript

## Scope

- Frontend only
- Dummy data only
- No backend implementation

## Route Map

- `/` - Overview and version comparison
- `/bad-version` - Deliberately poor booking design
- `/version-a-multistep` - Progressive disclosure multi-step flow
- `/version-b-singlepage` - Accordion-based single-page flow
- `/ab-test` - Metrics and winner analysis dashboard

## 🚀 Deploy to Vercel

This project is deployed on Vercel: [https://doctor-booking-v1.vercel.app](https://doctor-booking-v1.vercel.app)

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
- Build command: `bun run build`
- Install command: `bun install`
