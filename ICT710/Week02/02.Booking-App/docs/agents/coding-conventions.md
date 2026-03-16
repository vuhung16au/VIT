# Coding conventions

Conventions for code in the Doctor Booking Application.

## General

- **Formatting:** Use consistent indentation (2 spaces). Use double quotes for strings in JS/JSX unless escaping makes single quotes clearer.
- **Naming:**  
  - **Files:** `PascalCase.jsx` for components/pages; `camelCase.js` for utilities and non-React modules.  
  - **Components:** PascalCase.  
  - **Functions, variables:** camelCase.  
  - **Constants:** UPPER_SNAKE_CASE when truly constant.
- **Modules:** Use ES modules (`import`/`export`). Default export for React components and route handlers; named exports for utilities and multiple related items.

## Frontend (React + Vite)

- **Components:** Functional components with hooks. Prefer `function ComponentName` or `const ComponentName = () =>` for consistency.
- **Props:** Destructure when it improves readability; keep prop types clear (PropTypes or TypeScript if introduced).
- **State:** Use `useState` for local UI state; lift state only when needed for sibling/parent. Use `useEffect` for data fetching and subscriptions; specify dependencies.
- **Routing:** React Router; routes defined in `App.jsx`. Use `Link` for in-app navigation.
- **Styling:** Tailwind CSS only. Avoid inline styles except for dynamic values (e.g. width from data). Use design tokens from `tailwind.config.js`.

## Backend (Node.js + Express)

- **Structure:** Route handlers in `server/routes/`; models in `server/models/`. Keep route files thin; put business logic in handlers or small service modules if needed.
- **Async:** Use `async/await`; call `next(err)` or return a response in catch blocks. Do not leave promises unhandled.
- **Request/response:** Use `express.json()` for JSON bodies. Return JSON with appropriate status codes (e.g. 201 for create, 400 for validation, 404 for not found, 500 for server error).

## Database (MongoDB + Mongoose)

- **Models:** One file per model in `server/models/`. Use clear schema types and `required` where appropriate.
- **Ids:** Use MongoDB `_id`; when exposing to frontend, use `_id` or map to `id` consistently. Populate references (e.g. `doctorId`) when returning nested data.

## Rules for the AI assistant

1. Follow existing naming and file organisation; do not introduce a different structure without good reason.
2. Prefer Tailwind over custom CSS; use existing tokens (primary, medical) for colours.
3. In the backend, always send a JSON response and an appropriate HTTP status; do not throw uncaught errors to the client.
