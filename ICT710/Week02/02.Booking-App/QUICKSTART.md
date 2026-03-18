# Quick start — Doctor Booking App

Get the app running in a few steps. This project now includes both the original booking flow and the Week 02 conceptual-design demos.

## Prerequisites

- **Node.js** 18 or newer
- **MongoDB** running (local: `mongod` or a cloud URI)

## 1. Install dependencies

```bash
# Frontend
npm install

# Backend
cd server && npm install && cd ..
```

## 2. Environment

- **Frontend:** Optional. Default API proxy is `http://localhost:3001/api` via Vite. To override, create `.env` with `VITE_API_URL=...`.
- **Backend:** In `server/`, copy `.env.example` to `.env` and set:
  - `PORT=3001` (or another port)
  - `MONGODB_URI=mongodb://localhost:27017/doctor-booking` (or your MongoDB URI)

## 3. Seed doctors (optional)

From the `server` folder:

```bash
cd server
npm run seed
cd ..
```

This adds a few sample doctors so the booking flow has options.

## 4. Run backend and frontend

Use **two terminals**.

**Terminal 1 — API:**

```bash
cd server
npm run dev
```

Server runs at http://localhost:3001. You should see “MongoDB connected” and “Server running on …”.

**Terminal 2 — Frontend:**

```bash
npm run dev
```

Vite runs at http://localhost:5173 (or the port it prints). Open that URL in the browser.

## 5. Use the app

1. **Home:** Open the Week 02 demo hub.
2. **Interaction types:** Visit `/interaction-types` and try the four booking interaction styles.
3. **Problem space:** Visit `/problem-space` and complete the 5W worksheet, then open the conceptual model.
4. **Book:** Use `/book` to follow the existing steps: Reason → Specialist → Date/time → Enter name/email → Confirm booking.
5. **My appointments:** Use `/appointments` to enter your email and view upcoming or past appointments.

## Key routes

- `/` — Week 02 landing page
- `/interaction-types`
- `/interaction-types/instructing`
- `/interaction-types/conversing`
- `/interaction-types/manipulating`
- `/interaction-types/exploring`
- `/problem-space`
- `/problem-space/conceptual-model`
- `/book`
- `/appointments`

## Build check

The frontend was verified with:

```bash
PATH=/opt/homebrew/bin:$PATH /opt/homebrew/bin/npm run build
```

API is proxied from the Vite dev server (`/api/*` → backend), so the frontend talks to the same origin during development.
