# Project structure

Layout of the Doctor Booking Application and where to add or change code.

## Root (`02.Booking-App/`)

- **`package.json`** — Frontend dependencies and scripts (`dev`, `build`, `preview`, `server`).
- **`vite.config.js`** — Vite config; API proxy to backend (e.g. `/api` → `http://localhost:3001`).
- **`tailwind.config.js`** — Tailwind theme (colours, etc.).
- **`postcss.config.js`** — PostCSS (Tailwind, autoprefixer).
- **`index.html`** — Vite entry; root of the SPA.
- **`.env`** — Frontend env (e.g. `VITE_API_URL`); not committed (see `.gitignore`).
- **`AGENTS.md`** — Instructions for AI assistant; references `docs/agents/*.md`.
- **`README.md`**, **`QUICKSTART.md`** — Project and run instructions.

## Frontend (`src/`)

- **`main.jsx`** — React root; wraps app in `BrowserRouter`.
- **`App.jsx`** — Route definitions and layout.
- **`index.css`** — Global styles and Tailwind directives.
- **`pages/`** — Route-level components: `Home.jsx`, `Booking.jsx`, `Appointments.jsx`.
- **`components/`** — Reusable UI: `Layout.jsx`, `Navigation.jsx`, wizard steps (`ReasonStep.jsx`, `SpecialistStep.jsx`, `DateTimeStep.jsx`, `ConfirmStep.jsx`), `DoctorCard.jsx`.

Add new routes in `App.jsx` and new pages in `src/pages/`. Reusable pieces go in `src/components/`.

## Public (`public/`)

- **`favicon.ico`**, **`images/`** — Static assets. Refer in HTML/JSX with paths like `/favicon.ico`, `/images/…`.

## Backend (`server/`)

- **`index.js`** — Express app; connects MongoDB; mounts routes; loads `.env` from `server/`.
- **`package.json`** — Server dependencies and scripts (`start`, `dev`, `seed`).
- **`.env`** — Server env (`PORT`, `MONGODB_URI`); not committed.
- **`models/`** — Mongoose schemas: `Doctor.js`, `Appointment.js`, `User.js`.
- **`routes/`** — API routes: `doctors.js`, `appointments.js`, `users.js`.
- **`scripts/seed.js`** — Seed script for sample doctors.

Add new API surface by adding or extending files in `server/routes/` and, if needed, `server/models/`.

## Docs (`docs/agents/`)

- Agent policies: `interaction-design.md`, `user-experience.md`, `user-interface.md`, `accessibility.md`, `coding-conventions.md`, `project-structure.md`, `testing-and-debugging.md`, `logging.md`, `error-handling.md`, `security.md`.

## Rules for the AI assistant

1. Put new React pages under `src/pages/`, shared UI under `src/components/`.
2. Put new API routes under `server/routes/` and new models under `server/models/`.
3. Do not move or rename the core wizard steps or the main route names (`/`, `/book`, `/appointments`) without an explicit requirement.
