# Prototype Evolution

`prototype-evolution` is the Week 09 ICT710 demo project for Prototyping and Construction. It
shows how a doctor-booking idea evolves from paper sketches to wireframes, low-fi interactive
screens, and a polished high-fi prototype.

## Demo

[https://prototype-evolution.vercel.app](https://prototype-evolution.vercel.app)

## What this project demonstrates

1. A gallery of four fidelity levels
2. Paper prototype simulation with Wizard of Oz interaction
3. Grayscale wireframe exploration
4. Low-fi interactive flow with minimal styling
5. High-fi interactive flow with polish and feedback states
6. Storyboarding, Wizard of Oz, and reusable component demos

## Route map

- `/` - Prototype gallery and comparison
- `/prototypes/paper` - Paper prototype viewer
- `/prototypes/wireframe` - Wireframe layout demo
- `/prototypes/low-fi` - Low-fi interactive flow
- `/prototypes/high-fi` - High-fi interactive flow
- `/storyboard` - User journey storyboard
- `/wizard-oz` - Wizard of Oz recommendation demo
- `/components-demo` - Small prototype component library

## Docs

- `docs/Key-Takeaways.md` - brief IxD, UI, and UX lessons learned
- `docs/Prototyping-Guide.md` - when to use each fidelity

## 🚀 Deploy to Vercel

This project is deployed on Vercel: [https://prototype-evolution.vercel.app](https://prototype-evolution.vercel.app)

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
- `docs/Testing-Script.md` - how to test prototypes with users
- `docs/Paper-Prototype-Kit.md` - printable-template guidance and sketching tips
