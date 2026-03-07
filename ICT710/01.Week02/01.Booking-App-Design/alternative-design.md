# Doctor Booking Application — Alternative Design

## Overview

This alternative design favours **conversation-first** and **dashboard-centric** flows instead of a strict step-by-step wizard. It targets users who prefer to “ask and choose” rather than “click through steps,” and supports power users who want an overview of everything at once.

---

## 1. Problem space (same issues, different emphasis)

The same current-design issues are addressed, but with different priorities:

- **Reducing steps** is achieved by making the **chatbot the default entry** for booking, so users can complete a booking in a short dialogue instead of multiple screens.
- **Specialist discovery** is supported by a **search-first** home: one search bar (symptom, doctor name, or specialty) with instant filters and results.
- **Feedback and control** are emphasised via a **dashboard** that always shows next appointment, quick actions (reschedule, join video), and recent activity.

---

## 2. Conceptual design: core functionalities

| Core functionality | Difference from main design |
|--------------------|-----------------------------|
| **Home** | Dashboard: “Next appointment” card, “Book new,” search bar, and shortcuts (e.g. “Same doctor again,” “Video consult”). |
| **Booking** | **Path A:** Chatbot leads the flow (reason → suggest doctors → suggest times → confirm). **Path B:** Search → results → pick doctor → pick time → confirm. User chooses path. |
| **Specialist discovery** | Search-first + filters in a single results view (no dedicated “reason then specialist” step). |
| **Appointment management** | Dashboard-centric: “My appointments” is the default view for logged-in users; booking is a clear secondary action. |
| **Video consultation** | Same “waiting room” idea; join link also from dashboard and reminders. |

Alignment with user needs: **Speed and flexibility** (conversation or search) and **always-on context** (dashboard) for users who check the app often.

---

## 3. Metaphors

- **“Assistant”** — The chatbot is framed as a “booking assistant” that you “ask” to book or change appointments, reducing the feeling of filling forms.
- **“Search”** — Like searching for a product or a restaurant: one query, then refine with filters. Familiar for discovery-heavy users.
- **“Dashboard”** — Like a bank or travel app home: key info (next appointment, quick actions) at a glance. Supports routine use.
- **“Waiting room”** — Same as main design for consistency and familiarity.

---

## 4. Interaction types by feature

| Feature | Primary interaction type | Rationale |
|--------|---------------------------|------------|
| **Booking via chatbot** | **Conversing** | User types or speaks; bot guides step by step. Suited to users who prefer dialogue. |
| **Booking via search** | **Exploring** (search → results → filters) then **Manipulating** (pick slot, confirm) | Exploration for discovery; manipulation for commitment. |
| **Dashboard** | **Exploring** (scan cards, tap quick actions) | Users explore what’s next and what they can do. |
| **Specialist results** | **Exploring** + **Instructing** (filters, sort, “Show me more like this”) | Deeper exploration and explicit instructions (filters). |
| **Reschedule / cancel** | **Manipulating** (from dashboard or list) | Same as main design. |
| **Help** | **Conversing** (chatbot) | Single entry point for “ask anything”; reduces need for separate FAQ UI. |

---

## 5. Conversational support

- **Primary entry for booking:** Chatbot is the **default** way to start a new booking (e.g. “What do you need?” → “Book appointment” → reason → suggestions). Users can switch to “Browse and book” (search path) if they prefer.
- **Unified help:** All help (how to join video, reschedule, cancel, policies) goes through the same chatbot; answers can include deep links to the relevant screen.
- **Voice:** Same as main design (e.g. “Book with Dr. X,” “My next appointment”); voice can open the chatbot with the intent pre-filled.
- **Proactive messages:** Optional reminders and “Your appointment is in 1 hour — join here” inside the chat thread to keep everything in one place.

Difference from main design: **Conversation is the primary path**, not an optional alternative.

---

## 6. User needs and goals by role

**Patients**

- **Alternative emphasis:** “I want to ask for an appointment and get it done” (conversation) or “I want to search and compare” (search + dashboard). Less emphasis on a single linear wizard.
- Same underlying needs: confirmations, reminders, easy video join, reschedule/cancel.

**Doctors**

- Same as main design; dashboard could show “Today’s list” and “Join next” more prominently.

**Hospital / practice staff**

- Same as main design; dashboard could add a “Admin” or “Practice view” for capacity and overrides.

---

## 7. User interface design (high level)

- **Home = Dashboard:** One screen with next appointment, “Book new” (opens chatbot or search), and shortcuts. No mandatory “reason first” step on the home screen.
- **Dual booking paths:** (1) Chat: “Book appointment” → conversation. (2) “Browse and book”: search → results → doctor → time → confirm. Tabs or buttons make both visible.
- **Persistent chat:** Chatbot available as a tab or floating button so users can ask for help or start a booking from any screen.
- **Visual style:** Cards and list-based layout; search bar prominent; less “wizard” (stepper) and more “hub and spokes.”
- **Consistency and feedback:** Same confirmation and error patterns as main design; dashboard updates after any booking change.

This design favours **flexibility and conversation** over a single guided path, and **dashboard** over a pure step-by-step flow. No code implementation; design and structure only.
