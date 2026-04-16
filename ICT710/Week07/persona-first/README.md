# Persona First

`persona-first` is the Week 07 ICT710 demo project for User-Centered Design. It shows how one
doctor-booking service can be redesigned differently for three distinct personas instead of
offering one generic interface to everyone.

## Demo

[https://persona-first.vercel.app](https://persona-first.vercel.app)

## What this project demonstrates

1. A persona selector that sets the design context for the whole demo
2. Three data-driven personas: Sarah, Robert, and Maya
3. Three persona-specific booking flows with different priorities and interaction styles
4. Journey maps that connect touchpoints, emotions, and pain points
5. A usability-guidelines page with before/after comparisons and a walkthrough checklist

## Tech stack

- Next.js 16 with the App Router
- TypeScript
- Bootstrap 5.3.3 styling via CDN import
- Tailwind CSS 4 utilities for light structural styling

## Route map

- `/` - Persona selector landing page
- `/personas` - Persona gallery with journey maps
- `/booking/sarah` - Fast, shortcut-driven booking flow
- `/booking/robert` - Accessible step-by-step booking flow
- `/booking/maya` - Family-friendly booking flow with reminders and saved progress
- `/guidelines` - Usability guideline comparison and cognitive walkthrough tool

## Docs

- `docs/Key-Takeaways.md` - brief IxD, UI, and UX lessons learned
- `docs/Persona-Research.md` - how the personas were derived
- `docs/Journey-Mapping-Guide.md` - how the journey maps are structured
- `docs/Usability-Guidelines.md` - the checklist used in Demo 2

## 🚀 Deploy to Vercel

This project is deployed on Vercel: [https://persona-first.vercel.app](https://persona-first.vercel.app)

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
