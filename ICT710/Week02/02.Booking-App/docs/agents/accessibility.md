# Accessibility

Policies for accessibility in the Doctor Booking Application. Aligned with `01.Week02/01.Booking-App-Design/design.md` and WCAG-oriented practice.

## Touch targets

- **Minimum size:** 44×44 px for all interactive elements (buttons, links, form controls, selectable cards/chips).
- **Implementation:** Use `min-h-touch` (or equivalent) for buttons and links; ensure padding so the clickable area meets the minimum. See `src/index.css` and Tailwind config.

## Colour and contrast

- **Contrast:** Text and interactive elements must have sufficient contrast against the background (aim for WCAG AA: 4.5:1 for normal text, 3:1 for large text and UI components).
- **Do not rely on colour alone** to convey meaning (e.g. selected state should use border, icon, or label in addition to colour).

## Labels and semantics

- **Form fields:** Every input must have an associated visible label (use `<label>` with `for`/`id` or aria-label where appropriate).
- **Buttons:** Use clear, action-oriented text (“Confirm booking”, “Next”, “Cancel”); avoid vague labels like “Submit”.
- **Headings:** Use a logical heading hierarchy (e.g. one `h1` per page, then `h2` for sections).

## Focus and keyboard

- **Focus visible:** Ensure focus indicators are visible for keyboard users (do not remove outline without replacing with a clear focus style).
- **Keyboard operable:** All actions available by mouse must be available by keyboard (tab order, Enter/Space to activate).

## Content and language

- **Language:** Set `lang="en"` on the HTML root; use clear, simple language; avoid medical jargon in patient-facing copy.
- **Error messages:** Present errors in text that screen readers can announce; avoid only visual or colour-based indication.

## Scaling

- Support system font scaling: avoid fixed pixel font sizes for critical content; use relative units or Tailwind’s default scaling where possible.

## Rules for the AI assistant

1. When adding a new button, link, or form control, ensure it meets the 44px minimum touch target and has a visible label or accessible name.
2. When changing colours, check that contrast remains sufficient; do not use colour alone for state.
3. When adding new pages or sections, use proper heading levels and keep tab order logical.
4. Do not remove or override focus styles without providing an alternative visible focus indicator.
