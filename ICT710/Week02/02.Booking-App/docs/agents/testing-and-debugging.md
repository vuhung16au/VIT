# Testing and debugging

Policies for testing and debugging the Doctor Booking Application.

## Testing

- **Frontend:** No test framework is currently required by the project. If adding tests, use a React-friendly runner (e.g. Vitest, Jest) and test user-visible behaviour and critical paths (e.g. wizard steps, API calls).
- **Backend:** No test framework is currently required. If adding tests, target route handlers and slot/booking logic; use a test DB or mocks for MongoDB.
- **E2E:** Not in scope unless specified; if added, keep the booking flow (Reason → Specialist → Date/time → Confirm) as the primary scenario.

## Debugging

- **Frontend:** Use browser DevTools (Network, Console). API calls go through Vite proxy to `/api`; check response status and body for failures.
- **Backend:** Use `console.log` sparingly; prefer structured logging as in [logging.md](logging.md). Run server with `npm run dev` (watch mode) for quick iteration.
- **Database:** Use MongoDB shell or Compass to inspect collections (`doctors`, `appointments`, `users`) when debugging data issues.
- **Environment:** Ensure `.env` in root (frontend) and `server/.env` (backend) are set; wrong `MONGODB_URI` or proxy port can cause silent failures.

## Rules for the AI assistant

1. Do not remove or break the existing run scripts (`npm run dev`, `npm run server`, `npm run build`) when adding or changing code.
2. When fixing bugs, add or adjust logging only in line with [logging.md](logging.md); avoid noisy or sensitive log content.
3. If introducing tests, place them in a conventional location (e.g. `src/**/*.test.jsx`, `server/**/*.test.js`) and document how to run them in README or QUICKSTART.
