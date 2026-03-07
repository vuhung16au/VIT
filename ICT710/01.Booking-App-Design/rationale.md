# Rationale: Main Design vs Alternative Design (A/B Testing)

This document explains the differences between the two designs and the rationale behind each, for use in A/B testing to evaluate which better meets user needs and improves usability.

---

## Summary of differences

| Dimension | Main design | Alternative design |
|-----------|-------------|--------------------|
| **Primary booking flow** | Linear wizard: Reason → Specialist → Date/time → Confirm | Dual path: (1) Chatbot-led conversation, (2) Search → results → doctor → time → confirm |
| **Home / entry** | Action-oriented: “Book appointment” starts the wizard | Dashboard: next appointment, “Book new,” search bar, shortcuts |
| **Conversation** | Optional assistant for booking and help | Conversation as **default** booking path; chatbot prominent |
| **Discovery** | Condition/symptom first, then specialist list | Search-first (symptom, name, specialty) with filters |
| **Metaphor emphasis** | “Booking a table” (steps); “Waiting room” | “Assistant” (ask); “Search”; “Dashboard” |
| **Best for** | Users who prefer clear steps and predictability | Users who prefer asking or searching and seeing everything at once |

---

## Rationale for main design

- **Predictable flow:** One path reduces cognitive load and decision fatigue. Users always know the next step (reason → who → when → confirm). This can improve completion rates for first-time and anxious users.
- **Guided discovery:** Starting with “reason for visit” aligns with clinical logic (condition/specialty) and can improve match quality between patient and doctor.
- **Lower reliance on conversation quality:** Usability does not depend on NLP or chatbot design; the UI alone can deliver a good experience.
- **Familiar pattern:** Wizard-style flows are common in forms (e.g. checkout, registration), so many users can transfer existing mental models.

**A/B hypothesis:** Main design will perform better on **task completion rate** and **time to first successful booking** for users who prefer structured, step-by-step flows, and possibly for first-time users.

---

## Rationale for alternative design

- **Flexibility:** Two paths (conversation vs search) suit different user preferences: those who like to “ask” and those who like to “browse and compare.” Power users can go straight to search and filters.
- **Context at a glance:** Dashboard gives immediate value (next appointment, quick actions) and supports repeated use without re-entering the full flow.
- **Conversation as differentiator:** Making the chatbot the default booking path can feel more natural to users who prefer messaging apps and may reduce perceived effort (“I just told the app what I need”).
- **Search-first discovery:** Users who already know what they want (e.g. “cardiologist,” “Dr. Smith”) can skip the “reason” step and find results faster.

**A/B hypothesis:** Alternative design will perform better on **satisfaction** and **efficiency** (fewer steps when using chat or search) for users who are comfortable with search and conversation, and for returning users who use the dashboard.

---

## What to measure in A/B testing

1. **Task success rate:** % of users who complete a booking (and optionally reschedule/cancel) within the test session.
2. **Time on task:** Time from “start booking” to “booking confirmed” for each design.
3. **Path choice (alternative only):** % using chatbot vs search path; correlation with success and time.
4. **Perceived ease and satisfaction:** Short post-task survey (e.g. ease of use, clarity, likelihood to use again).
5. **Drop-off points:** Where users abandon (e.g. after reason, after specialist list, at calendar) in the main design; at chat vs search in the alternative.
6. **First-time vs returning:** Compare metrics by user type; main design may favour first-time, alternative may favour returning (dashboard, shortcuts).
7. **Accessibility and errors:** Success rate and time for users who rely on screen readers or have limited dexterity; error rate and recovery (e.g. wrong slot, confusion).

---

## Design choice summary

- **Main design** prioritises **clarity, consistency, and a single guided path**. Choose it (or expect it to win) when the goal is maximum completion rate and a simple, predictable experience.
- **Alternative design** prioritises **choice (conversation vs search) and context (dashboard)**. Choose it (or expect it to win) when the goal is flexibility and appeal to users who prefer assistants or search.

A/B testing will show which design is more effective for your user base and which aspects (wizard vs conversation vs search, dashboard vs action-first home) to carry into the final product or a hybrid design.
