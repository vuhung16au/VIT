# Evaluation Toolkit

`evaluation-toolkit` is the Week 11 ICT710 demo project for Design Evaluation. It demonstrates
heuristic evaluation, cognitive walkthroughs, analytics review, inspection checklists, and simple
comparative evaluation across earlier projects.

## Demo

[https://evaluation-toolkit.vercel.app](https://evaluation-toolkit.vercel.app)

## What this project demonstrates

1. Heuristic evaluation using Nielsen&apos;s 10 heuristics
2. Cognitive walkthrough analysis for task-based review
3. Analytics inspection with funnel and heatmap insights
4. Inspection checklist scoring across accessibility, usability, performance, and content
5. Comparison and A/B testing views for alternative designs

## Route map

- `/` - Evaluation hub
- `/heuristic` - Heuristic review and issue logging
- `/cognitive-walkthrough` - Step-by-step walkthrough analysis
- `/analytics` - Funnel and analytics review
- `/checklist` - Inspection checklist
- `/comparison` - Compare two design alternatives
- `/ab-testing` - A/B testing concept and simulated results

## Docs

- `docs/Key-Takeaways.md` - brief IxD, UI, and UX lessons learned
- `docs/Nielsens-Heuristics.md` - heuristic reference
- `docs/Report-Template.md` - evaluation reporting template

## 🚀 Deploy to Vercel

This project is deployed on Vercel: [https://evaluation-toolkit.vercel.app](https://evaluation-toolkit.vercel.app)

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
