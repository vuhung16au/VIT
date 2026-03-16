# User experience

Policies for user experience in the Doctor Booking Application. Aligned with `01.Week02/01.Booking-App-Design/design.md`.

## Design principle

**Minimal steps to first booking.** Optional depth (filters, preferences, medical history) may be added without cluttering the main path.

## User goals (by role)

### Patients

- Book or reschedule quickly, with minimal steps.
- Find a suitable specialist (condition, availability, video vs in-clinic).
- Feel confident the booking is confirmed and get reminders.
- Join video consultation easily and know what to do if something fails.
- Access past visits when needed.

### Doctors (if in scope)

- Clear schedule (today/upcoming) with patient context (reason, history link).
- One-click join for video and clear “waiting room” state.

### Hospital / practice staff (if in scope)

- Oversee bookings and capacity; handle exceptions (reschedule, reassign).

When adding features, prioritise the **patient** flow first.

## UX rules

1. **Single linear flow:** One clear path: Reason → Specialist → Date/time → Confirm. Back/Next must be obvious; avoid branching that confuses “what’s next?”.
2. **Feedback:** After booking, show a clear success message. In My appointments, show “Upcoming” and “Past” and clear actions (Join video, Reschedule, Cancel).
3. **Empty and error states:**  
   - No slots: “No slots available — try another date or doctor.”  
   - Network/API error: “Couldn’t connect — check internet and try again” with retry.  
   Do not leave the user with a blank screen or generic error only.
4. **Trust:** Short privacy/security note at sign-up (or before first booking); before video: “Your consultation is private and encrypted.”
5. **Short path for repeat users:** Where applicable, support “same doctor, next slot” without re-entering the full wizard (e.g. from My appointments or Home).

## Rules for the AI assistant

1. Do not add steps to the core booking flow without a clear user need; prefer optional steps or progressive disclosure.
2. Every destructive or committing action (confirm booking, cancel appointment) must have clear feedback (success message or confirmation).
3. Every error or empty state that the user can encounter must have a human-readable message and, where appropriate, a retry or alternative action.
