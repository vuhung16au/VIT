# Doctor Booking Application — ICT710

A doctor booking web application for ICT710 Week 02. The project now supports both the original booking flow and the Week 02 teaching demos for problem-space analysis and interaction-type exploration.

## Demo

[https://booking-app-week02.vercel.app](https://booking-app-week02.vercel.app)

## Technologies

- **Frontend:** Vite, React, Tailwind CSS — UI and client-side routing.
- **Backend:** Node.js, Express — REST API and server logic.
- **Database:** MongoDB — users, doctors, and appointments.

## Features

- **Week 02 interaction types demo:** Explore the same doctor-booking task through instructing, conversing, manipulating, and exploring interfaces.
- **Problem space analysis:** Use a 5W worksheet and conceptual model page to demonstrate “think first, code later”.
- **Booking flow (wizard):** Reason for visit → Choose specialist → Pick date/time → Confirm with name and email.
- **My appointments:** View upcoming and past appointments by email; cancel or (placeholder) join video.
- **Design alignment:** Single linear flow, chips for reason/slots, confirmation step, and clear feedback as in the design doc.

## How to use

1. **Prerequisites:** Bun 1.0+, MongoDB running locally (or set `MONGODB_URI`).
2. **Backend:** From project root, run the API (see [QUICKSTART.md](./QUICKSTART.md)).
3. **Frontend:** Run the Vite dev server and open the URL shown (e.g. http://localhost:5173).
4. **Seed data (optional):** Run `bun run seed` in the `server` folder to add sample doctors.

## Week 02 demo routes

The home page now acts as a Week 02 demo hub. Key routes include:

- `/interaction-types` — overview of four interaction styles
- `/interaction-types/instructing` — command-based booking
- `/interaction-types/conversing` — chatbot-style booking
- `/interaction-types/manipulating` — direct slot selection
- `/interaction-types/exploring` — browse-and-discover doctor cards
- `/problem-space` — 5W worksheet
- `/problem-space/conceptual-model` — conceptual model visualization
- `/book` — original booking wizard
- `/appointments` — appointment lookup and management

## Design choices

- **Week 02 teaching focus:** The app now demonstrates conceptual design before physical UI through the interaction-type pages and 5W analysis flow.
- **Wizard steps** match the design: Reason → Specialist → Date/time → Confirm, with Back/Next and a progress indicator.
- **Specialist discovery** is driven by the selected reason (filter by `reasonTags`); doctors support video, in-person, or both.
- **Slots** are generated for the next 14 days, 9:00–17:00, excluding already booked times.
- **No login:** Appointments are looked up by patient email; no auth implemented.
- **Accessibility:** Touch targets and contrast follow the design (e.g. min-height for tap targets, clear labels).

## Build verification

The frontend build was verified successfully with:

```bash
PATH=/opt/homebrew/bin:$PATH /opt/homebrew/bin/bun run build
```

## Project structure

```
02.Booking-App/
├── src/              # React app (pages, components)
├── public/           # Static assets
├── server/           # Express API and MongoDB models
├── package.json      # Frontend deps and scripts
├── vite.config.js    # Vite + API proxy to backend
└── tailwind.config.js
```

Important frontend pages now include:

- `src/pages/Home.jsx` — Week 02 landing hub
- `src/pages/InteractionTypes.jsx`
- `src/pages/Instructing.jsx`
- `src/pages/Conversing.jsx`
- `src/pages/Manipulating.jsx`
- `src/pages/Exploring.jsx`
- `src/pages/ProblemSpace.jsx`
- `src/pages/ConceptualModel.jsx`
- `src/pages/Booking.jsx`
- `src/pages/Appointments.jsx`

See [QUICKSTART.md](./QUICKSTART.md) for run instructions.

## 🚀 Deploy to Vercel

This project is configured for easy deployment to Vercel (frontend only).

### Quick Deploy

```bash
# From the project directory
vercel --yes

# For production deployment
vercel --prod
```

### Configuration

The project includes a `vercel.json` configuration file that specifies:
- Build command: `bun run build`
- Output directory: `dist`
- Install command: `bun install`

### Note

The deployed version includes the frontend only. For full functionality with backend API, you'll need to:
- Deploy the backend separately (e.g., to Vercel Serverless Functions or another service)
- Update API endpoints in the frontend configuration

### Live Demo

Visit the deployed frontend: [https://booking-app-week02.vercel.app](https://booking-app-week02.vercel.app)
