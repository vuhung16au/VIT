# Doctor Booking Application — ICT710

A doctor booking web application based on the design in `01.Week02/01.Booking-App-Design/`. It lets patients book consultations (video or in-person), choose a specialist by reason for visit, pick a time slot, and manage appointments.

## Technologies

- **Frontend:** Vite, React, Tailwind CSS — UI and client-side routing.
- **Backend:** Node.js, Express — REST API and server logic.
- **Database:** MongoDB — users, doctors, and appointments.

## Features

- **Booking flow (wizard):** Reason for visit → Choose specialist → Pick date/time → Confirm with name and email.
- **My appointments:** View upcoming and past appointments by email; cancel or (placeholder) join video.
- **Design alignment:** Single linear flow, chips for reason/slots, confirmation step, and clear feedback as in the design doc.

## How to use

1. **Prerequisites:** Node.js 18+, MongoDB running locally (or set `MONGODB_URI`).
2. **Backend:** From project root, run the API (see [QUICKSTART.md](./QUICKSTART.md)).
3. **Frontend:** Run the Vite dev server and open the URL shown (e.g. http://localhost:5173).
4. **Seed data (optional):** Run `npm run seed` in the `server` folder to add sample doctors.

## Design choices

- **Wizard steps** match the design: Reason → Specialist → Date/time → Confirm, with Back/Next and a progress indicator.
- **Specialist discovery** is driven by the selected reason (filter by `reasonTags`); doctors support video, in-person, or both.
- **Slots** are generated for the next 14 days, 9:00–17:00, excluding already booked times.
- **No login:** Appointments are looked up by patient email; no auth implemented.
- **Accessibility:** Touch targets and contrast follow the design (e.g. min-height for tap targets, clear labels).

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

See [QUICKSTART.md](./QUICKSTART.md) for run instructions.
