# Design System Studio

`design-system-studio` is the Week 10 ICT710 demo project for Design Language and Systems. It
shows how tokens, foundations, reusable UI components, and motion rules create a cohesive product
language that scales.

## Demo

[https://design-system-studio-five.vercel.app](https://design-system-studio-five.vercel.app)

## What this project demonstrates

1. Foundations for typography, colors, icons, layout, and motion
2. A reusable component library for buttons, forms, cards, and navigation
3. Design tokens defined once and reused across pages
4. Interactive component previews and usage guidance

## Route map

- `/` - Design system overview
- `/foundations/typography` - Type scale and hierarchy
- `/foundations/colors` - Color palette and accessibility
- `/foundations/icons` - Icon browser and guidelines
- `/foundations/layout` - Grid and spacing system
- `/foundations/motion` - Motion principles and examples
- `/components/buttons` - Button variants and playground
- `/components/forms` - Form patterns
- `/components/cards` - Card styles
- `/components/navigation` - Navigation patterns

## Docs

- `docs/Key-Takeaways.md` - brief IxD, UI, and UX lessons learned
- `docs/Design-Principles.md` - core design philosophy

## 🚀 Deploy to Vercel

This project is deployed on Vercel: [https://design-system-studio-five.vercel.app](https://design-system-studio-five.vercel.app)

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
- `docs/Component-Specs.md` - component documentation
