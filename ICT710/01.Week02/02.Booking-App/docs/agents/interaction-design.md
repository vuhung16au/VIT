# Interaction design

Policies for interaction design in the Doctor Booking Application. Aligned with `01.Week02/01.Booking-App-Design/design.md`.

## Core flow

- **Primary path:** Home → Reason for visit → Specialist → Date/time → Confirm.
- Do not reorder or remove these steps. Optional shortcuts (e.g. “Same doctor again”) must not replace the main path for first-time or new-issue bookings.

## Interaction types by feature

| Feature | Interaction type | Implementation note |
|--------|-------------------|----------------------|
| Reason / symptom | **Instructing** | Use chips or a short list; avoid free text as primary input. |
| Specialist browse | **Exploring** | Scroll, filter, sort; users compare options. |
| Date/time choice | **Manipulating** | Calendar + time slots; direct selection (tap/click). |
| Confirm booking | **Instructing** | Review summary + single primary action (“Confirm booking”). |
| Reschedule / cancel | **Manipulating** | Select appointment → change date or cancel; actions on list/card. |
| Pre-video “waiting room” | **Conversing** | Short status messages (e.g. “Dr. X will be with you shortly”). |
| FAQ / help | **Conversing** | Chatbot or guided Q&A; link to relevant screen when possible. |

When adding or changing a feature, use the interaction type above so behaviour stays consistent with the design.

## Metaphors to preserve

- **Booking an appointment:** Choose what/who → when → confirm (like booking a table or flight).
- **Waiting room:** Pre-video screen with reassuring copy; no medical jargon.
- **My appointments:** List/cards with upcoming and past; actions = join, reschedule, cancel.
- **Clinic / practice:** When listing doctors, show “at [Clinic name]” where available.

## Conversational support (optional)

- Chatbot or voice: optional path for “Book appointment” or “When is my next appointment?”.
- Tone: reassuring, concise; avoid jargon; always offer escape to full app UI or human support.
- Do not make conversation the only path; the wizard must remain the primary way to book.

## Rules for the AI assistant

1. Prefer **instructing** (chips, buttons, clear CTAs) over open-ended input for the main booking flow.
2. Use **exploring** for specialist list (filters, scroll); use **manipulating** for calendar/slots and for appointment actions.
3. Keep the **commitment step** explicit: always a review screen and a single “Confirm” (or equivalent) action before creating a booking.
4. When adding waiting room or help, use short, status-style messages and optional chat; do not block the core flow on conversation.
