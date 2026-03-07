# Doctor Booking Application — Main Design

## 1. Problem space

**Issues with many current doctor booking applications:**

- **Cluttered flows:** Too many steps, unclear “next” action, and mixed in-person vs online options.
- **Poor specialist discovery:** Users struggle to find the right specialist or understand availability.
- **Weak feedback:** Little confirmation of booking success, reminders, or reschedule/cancel paths.
- **Accessibility and trust:** Small touch targets, low contrast, and unclear privacy/security messaging.
- **One-size-fits-all:** Same flow for quick follow-ups and first-time specialist visits.

**How this design addresses them:**

- Single, linear flow: **Reason for visit → Specialist/condition → Date/time → Confirm** with clear back/next.
- Specialist discovery via **condition/symptom first**, then matching specialists and filters (availability, language, video vs in-clinic).
- Explicit **confirmation screen**, email/SMS confirmation, and clear **reschedule/cancel** from “My appointments”.
- WCAG-aligned UI (contrast, tap targets, labels) and short, clear privacy/security statements at sign-up and before video.
- **Short path** for “same doctor, next slot” and **guided path** for “new issue / new specialist”.

---

## 2. Conceptual design: core functionalities and alignment with user needs

| Core functionality | User need/goal it serves |
|--------------------|---------------------------|
| **Reason-for-visit entry** | Quickly express why they’re booking (symptom, follow-up, referral). |
| **Specialist browse & filter** | Find the right doctor (specialty, availability, video/in-person, language). |
| **Calendar & time slot selection** | Choose a time that fits their schedule. |
| **Booking confirmation & reminders** | Trust that the booking is real and get reminded. |
| **Video consultation** | Attend consultation from home (Covid-safe, convenient). |
| **Appointment management** | View, reschedule, or cancel without calling. |
| **Profile & history** | Reuse details and see past consultations. |

Design principle: **Minimal steps to first booking**, with optional depth (filters, preferences, medical history) available when needed.

---

## 3. Metaphors

- **“Booking an appointment”** — Same as booking a table or a flight: choose what/who, when, then confirm. The app uses this mental model explicitly (steps: Choose → When → Confirm).
- **“Waiting room”** — Pre-video screen shows “You’re in the waiting room. Dr. X will be with you shortly.” Reduces anxiety and sets expectations.
- **“My appointments”** — A list/card layout like “My orders” or “My trips”: one place to see upcoming and past appointments and actions (join, reschedule, cancel).
- **“Clinic / practice”** — When listing doctors, group by clinic or show “at [Clinic name]” so the environment feels familiar to users used to physical practices.

These metaphors keep the app intuitive without requiring healthcare-specific knowledge.

---

## 4. Interaction types by feature

| Feature | Primary interaction type | Rationale |
|--------|---------------------------|------------|
| **Reason / symptom selection** | **Instructing** (e.g. “I need a consultation for…” + short list or chips) | Fast, low cognitive load; avoids free text where possible. |
| **Specialist browse** | **Exploring** (scroll, filter, sort) | Users compare options; exploration supports informed choice. |
| **Date/time choice** | **Manipulating** (calendar, tap slots) | Direct manipulation of calendar and times feels controllable. |
| **Booking confirmation** | **Instructing** (review + “Confirm booking”) | Clear commitment step; instructing is appropriate for final action. |
| **Pre-video “waiting room”** | **Conversing** (short status messages, optional chat) | Reduces uncertainty; light conversation (e.g. “Doctor will join in 2 min”) helps. |
| **Reschedule / cancel** | **Manipulating** (select appointment → change date or cancel) | Direct manipulation of “my appointments” matches user mental model. |
| **FAQ / help** | **Conversing** (chatbot or guided Q&A) | Users ask questions in natural language; conversing fits help-seeking. |

---

## 5. Conversational support (chatbot / voice)

- **Booking flow:** Optional **chatbot** for “Book an appointment”: user can say or type reason and preferred time; bot suggests specialists and slots and guides through confirm/cancel.
- **Queries:** Bot answers FAQs (e.g. “How do I join the video call?”, “How do I reschedule?”, “What if I miss my slot?”) with short answers and links to the relevant screen.
- **Voice:** Optional **voice assistant** for “Book my next appointment with Dr. [Name]” or “When is my next appointment?” for returning users; fallback to chatbot or app screens for complex choices.
- **Tone:** Reassuring and concise; avoid medical jargon; always offer escape to human support or full app UI.

This supports both quick, repeat bookings (conversation) and detailed exploration (UI).

---

## 6. User needs and goals by role

**Patients**

- Book or reschedule quickly, with minimal steps.
- Find a suitable specialist (condition, availability, video vs in-clinic).
- Feel confident the booking is confirmed and get reminders.
- Join video consultation easily and know what to do if something fails.
- Access past visits and documents when needed.

**Doctors**

- See a clear schedule (today/upcoming), with patient context (reason, history link).
- One-click join for video and clear “waiting room” state.
- Optional: block time, set availability, or mark no-shows (if in scope).

**Hospital / practice staff**

- Oversee bookings and capacity (e.g. by doctor or location).
- Handle exceptions (reschedule, reassign) when needed.
- Rely on consistent, predictable flows to reduce support calls.

The main design prioritises **patient flow** first, then **doctor** and **staff** views that reuse the same appointment and video concepts.

---

## 7. User interface design (high level)

- **Hierarchy:** One primary path: Home → Reason → Specialists → Date/time → Confirm. Secondary: “My appointments”, “Profile”, “Help”.
- **Consistency:** Same patterns for “select one” (cards/chips), “pick time” (calendar + list), and “confirm” (summary + primary button).
- **Feedback:** Success message after booking; visible “Upcoming” and “Past” in My appointments; clear “Join video” when it’s time.
- **Error and empty states:** “No slots available — try another date or doctor”; “Couldn’t connect — check internet and try again” with retry.
- **Accessibility:** Sufficient contrast, tap targets ≥ 44px, labels for form fields and buttons; support system font scaling.
- **Trust and clarity:** Short privacy/security note at sign-up; before video: “Your consultation is private and encrypted.”

No code implementation in this document; the above is design and structure only.
