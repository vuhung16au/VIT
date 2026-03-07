# User interface

Policies for the user interface of the Doctor Booking Application. Aligned with `01.Week02/01.Booking-App-Design/design.md`.

## Hierarchy

- **Primary:** Home → Book (wizard) → Confirm. **Secondary:** My appointments, Profile (if present), Help.
- Navigation must make “Home”, “Book appointment”, and “My appointments” easy to reach.

## Consistency

- **Select one:** Use cards or chips; selected state must be visually distinct (e.g. border + background).
- **Pick time:** Calendar or date picker + list of time slots; same pattern across the app.
- **Confirm:** Summary of choices + one primary button (e.g. “Confirm booking”); secondary “Back” when applicable.

## Visual and layout

- **Framework:** Tailwind CSS. Use design tokens (e.g. `primary-*`, `medical`) from `tailwind.config.js` for buttons and links.
- **Touch targets:** Minimum 44px height for interactive elements; use `min-h-touch` where defined (see [accessibility.md](accessibility.md)).
- **Spacing:** Use consistent padding and gaps (e.g. `p-4`, `gap-3`, `mb-6`) so layout does not feel cramped or uneven.

## Feedback in the UI

- **Success:** After booking, show a dedicated success state (e.g. green banner or card) with confirmation text and link to My appointments.
- **Loading:** Show “Loading…” or a spinner when fetching doctors, slots, or appointments.
- **Errors:** Show inline or banner messages with the text from [user-experience.md](user-experience.md); avoid raw technical errors in the UI.

## Empty and error states

- **No doctors/slots:** Message + suggestion (e.g. “Try another reason or date”) or link back.
- **API/network error:** Message + retry control where appropriate.

## Trust and clarity

- Footer or sign-up: short note that data is handled securely.
- Before video: “Your consultation is private and encrypted.”

## Rules for the AI assistant

1. Use existing Tailwind classes and tokens; do not introduce one-off hex colours for primary actions.
2. Keep selection patterns consistent: chips for reason/slots, cards for doctors, summary + primary button for confirm.
3. Add visible feedback for every user action that changes state (booking, cancel, reschedule).
4. Do not remove or reduce the size of touch targets below the minimum specified in [accessibility.md](accessibility.md).
