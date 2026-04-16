# Usability Lab Simulator

`usability-lab-simulator` is the Week 12 ICT710 demo project for Usability Testing. It walks
through planning, recruiting, moderating, analyzing, and reporting moderated usability studies.

## Demo

[https://usability-lab-simulator.vercel.app](https://usability-lab-simulator.vercel.app)

## What this project demonstrates

1. Test planning with objectives, tasks, and metrics
2. Participant recruitment and screening
3. Session moderation with task prompts and observer notes
4. Think-aloud protocol guidance
5. Analysis of task success, errors, and satisfaction
6. Structured reporting with prioritized findings

## Route map

- `/` - Testing hub
- `/plan` - Test planning tool
- `/recruit` - Participant recruitment
- `/conduct` - Session moderation
- `/think-aloud` - Think-aloud guide
- `/analyze` - Analysis dashboard
- `/report` - Findings report

## Docs

- `docs/Key-Takeaways.md` - brief IxD, UI, and UX lessons learned
- `docs/Think-Aloud-Guide.md` - how to conduct think-aloud
- `docs/Moderator-Script.md` - example moderation script
- `docs/Consent-Form-Template.md` - consent template

## 🚀 Deploy to Vercel

This project is deployed on Vercel: [https://usability-lab-simulator.vercel.app](https://usability-lab-simulator.vercel.app)

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
