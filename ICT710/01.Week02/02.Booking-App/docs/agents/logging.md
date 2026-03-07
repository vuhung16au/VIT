# Logging

Policies for logging in the Doctor Booking Application.

## Backend (Express)

- **Startup:** Log when the server is listening (port) and when MongoDB connection succeeds or fails. Use plain `console.log` / `console.error` for now.
- **Requests:** Do not log every request by default to avoid noise. Optionally log request method and path for errors or slow requests if middleware is added later.
- **Errors:** Log caught errors before sending a response (e.g. in catch blocks or error middleware); include enough context to debug (e.g. route, error message), but do not log request bodies that may contain PII (e.g. patient email, name) in full.
- **Sensitive data:** Do not log passwords, tokens, or full patient details. Log IDs or redacted identifiers when needed for debugging.

## Frontend

- **Development:** Use `console.log` sparingly for debugging; remove or guard with `import.meta.env.DEV` before committing.
- **Production:** Avoid logging PII (email, name) to the console. Do not log full API responses that contain patient data.

## Rules for the AI assistant

1. When adding new API routes or error handling, log server-side errors with a short message and route context; do not log request body that contains PII.
2. Do not introduce logging of raw request/response bodies for endpoints that handle patient or user data.
3. Prefer structured, one-line log messages so logs remain readable and grep-friendly.
