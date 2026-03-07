# Instructions for AI Coding Assistant — Doctor Booking App

This document gives an AI coding assistant the context and rules needed to work on the **Doctor Booking Application** (ICT710). Follow the policies and procedures in `docs/agents/` when making changes.

## Project overview

- **What it is:** A doctor booking web app: patients book consultations (video or in-person), choose a specialist by reason for visit, pick a time slot, and manage appointments.
- **Stack:** Frontend = Vite + React + Tailwind CSS; Backend = Node.js + Express; Database = MongoDB.
- **Design source:** `01.Week02/01.Booking-App-Design/design.md` (and related design docs in that folder).

## Focus areas

This project emphasises:

1. **Interaction design** — [docs/agents/interaction-design.md](docs/agents/interaction-design.md)
2. **User experience** — [docs/agents/user-experience.md](docs/agents/user-experience.md)
3. **User interface** — [docs/agents/user-interface.md](docs/agents/user-interface.md)
4. **Accessibility** — [docs/agents/accessibility.md](docs/agents/accessibility.md)

When adding or changing features, prioritise these four and align with the design doc.

## Other policies and procedures

- **Coding conventions:** [docs/agents/coding-conventions.md](docs/agents/coding-conventions.md)
- **Project structure:** [docs/agents/project-structure.md](docs/agents/project-structure.md)
- **Testing and debugging:** [docs/agents/testing-and-debugging.md](docs/agents/testing-and-debugging.md)
- **Logging:** [docs/agents/logging.md](docs/agents/logging.md)
- **Error handling:** [docs/agents/error-handling.md](docs/agents/error-handling.md)
- **Security:** [docs/agents/security.md](docs/agents/security.md)

## Quick rules for the assistant

1. **Respect the booking flow:** Keep the wizard order **Reason → Specialist → Date/time → Confirm**. Do not reorder or skip steps without explicit requirement.
2. **Refer to design:** For any UX/UI decision, check `01.Booking-App-Design/design.md` and the relevant `docs/agents/*.md` file.
3. **Keep accessibility:** Preserve or improve touch targets (≥ 44px), contrast, and labels; see [docs/agents/accessibility.md](docs/agents/accessibility.md).
4. **Stay consistent:** Use existing patterns (chips for selection, cards for doctors, summary + primary button for confirm).
5. **Document changes:** When adding features that affect UX or accessibility, update the relevant agent doc if the policy changes.
