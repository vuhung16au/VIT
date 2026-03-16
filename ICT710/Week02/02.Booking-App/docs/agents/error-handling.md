# Error handling

Policies for error handling in the Doctor Booking Application.

## Backend (Express)

- **Route handlers:** Use `try/catch` in async handlers. On error: log (see [logging.md](logging.md)), then respond with appropriate status and a JSON body (e.g. `{ error: "Short message" }`). Use 400 for validation/client errors, 404 for not found, 500 for server/unexpected errors.
- **Validation:** Validate required fields (e.g. `doctorId`, `date`, `patientEmail`) before creating or updating resources. Return 400 with a clear message when validation fails.
- **MongoDB errors:** Catch connection and query errors; do not expose stack traces or internal details in the API response.
- **Unhandled errors:** Ensure no route throws without catching; consider a global error middleware that returns a generic 500 and logs the error.

## Frontend (React)

- **API calls:** Check `response.ok` before parsing JSON. On failure, show a user-friendly message as in [user-experience.md](user-experience.md) (e.g. “Couldn’t connect — check internet and try again”) and offer retry where appropriate.
- **Loading and empty states:** Show loading state while fetching; show empty or error state when the list is empty or the request fails. Do not leave a blank screen.
- **Form validation:** Validate required fields (e.g. name, email on confirm step) before submit; disable submit or show inline errors as appropriate.

## User-facing messages

- **No slots:** “No slots available — try another date or doctor.”
- **Network/API error:** “Couldn’t connect — check internet and try again” (and retry if applicable).
- **Booking failed:** “Booking failed. Please try again.” (or similar; avoid raw error text from the API).

## Rules for the AI assistant

1. Every backend route that can fail must catch errors and respond with JSON and a suitable status code.
2. Every frontend fetch that can fail must handle non-ok responses and show a user-visible message (and retry where it makes sense).
3. Do not expose stack traces, DB errors, or internal paths in API responses or in the UI.
