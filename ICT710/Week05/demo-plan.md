# Week 05 Demo Plan: Data Gathering Techniques

## Week Overview

Week 5 focuses on data gathering techniques crucial for understanding user needs and evaluating designs. Students will learn to implement interviews, questionnaires, and observation methods in their interaction design process using the doctor booking app as the main demo vehicle.

## Learning Objectives

- Understand three primary data gathering techniques: interviews, questionnaires, and observation
- Implement user feedback collection mechanisms in a web application
- Learn to combine multiple data gathering methods to avoid biases
- Practice triangulation and pilot studies
- Transform raw user data into actionable design insights

## Demo 1: Feedback Forge - Adding Data Gathering to Doctor Booking App (35 mins)

### Objective

Demonstrate how to implement multiple data gathering techniques within the doctor booking app to collect user feedback and improve the user experience.

### Prerequisites

- Doctor booking app from Week 4 (with booking functionality)
- Next.js 16 with App Router
- Bootstrap 5.3.3 (CDN-based)

### Implementation Steps

1. **Create the feedback data model** (5 mins)
   - Create `src/data/feedbackData.ts`
   - Define TypeScript interfaces for:
     - Survey responses (questionnaire data)
     - Interview notes
     - Usage observations
   - Initialize mock data storage using local state

2. **Implement In-App Questionnaire** (10 mins)
   - Create `src/components/FeedbackQuestionnaire.tsx`
   - Add post-booking survey with:
     - Likert scale questions (1-5) for satisfaction
     - Multiple choice questions about booking process
     - Open-ended text area for general feedback
   - Implement form submission handler
   - Store responses in local state
   - Display thank you message upon completion

3. **Add User Interview Scheduler** (8 mins)
   - Create `src/components/InterviewScheduler.tsx`
   - Build interview booking form with:
     - User contact information fields
     - Preferred interview time slots
     - Interview type selection (phone, video, in-person)
   - Add validation for required fields
   - Display scheduled interviews list

4. **Implement Usage Observation Dashboard** (7 mins)
   - Create `src/app/admin/analytics/page.tsx`
   - Build analytics dashboard showing:
     - Heatmap visualization of clicked elements (simulated)
     - User journey flow diagram
     - Time spent on each step
     - Drop-off points in booking process
   - Use mock data to demonstrate insights

5. **Create Data Triangulation View** (5 mins)
   - Create `src/app/admin/insights/page.tsx`
   - Display combined insights from:
     - Questionnaire results (quantitative)
     - Interview notes (qualitative)
     - Observed user behavior (behavioral)
   - Show how different methods reveal different aspects

### Code Structure

```
Week05/feedback-forge/
├── README.md
├── QUICKSTART.md
├── docs/
│   └── Key-Takeaways.md
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Main booking interface
│   │   ├── booking-complete/page.tsx    # Post-booking with survey
│   │   └── admin/
│   │       ├── analytics/page.tsx       # Observation dashboard
│   │       └── insights/page.tsx        # Triangulation view
│   ├── components/
│   │   ├── FeedbackQuestionnaire.tsx    # Survey component
│   │   ├── InterviewScheduler.tsx       # Interview booking
│   │   ├── AnalyticsDashboard.tsx       # Usage heatmap
│   │   └── BookingForm.tsx              # From Week 4
│   ├── data/
│   │   ├── feedbackData.ts              # Feedback storage
│   │   └── analyticsData.ts             # Usage tracking data
│   └── types/
│       └── feedback.ts                  # TypeScript interfaces
├── public/
│   └── icons/                           # Survey icons
└── package.json
```

### Key Teaching Points

1. **Multiple Methods Reduce Bias**: Demonstrate how questionnaires give quantitative data, interviews provide depth, and observation reveals actual behavior (which may differ from self-reporting)

2. **Timing Matters**: Show when to use each method:
   - Questionnaires: After task completion (cognitive load is low)
   - Interviews: During initial research or deep-dive investigations
   - Observation: During actual usage (passive, non-intrusive)

3. **Question Design**: 
   - Avoid leading questions
   - Use clear, unambiguous language
   - Mix question types (open/closed)
   - Keep surveys short (5-8 questions max)

4. **Triangulation**: Combining data sources strengthens findings and reveals discrepancies between what users say and what they do

5. **Pilot Testing**: Always test your data gathering instruments before full deployment

## Demo 2: Data Recording Comparison (15 mins)

### Objective

Compare different data recording approaches: notes + photos, audio + photos, and video recording.

### Implementation Steps

1. **Create Recording Methods Showcase** (5 mins)
   - Create `src/components/RecordingMethodsDemo.tsx`
   - Display three cards showing:
     - Notes + Photos (text input + image upload)
     - Audio + Photos (audio recording + image upload)
     - Video Recording (video capture simulation)

2. **Implement Note-Taking Interface** (4 mins)
   - Add rich text editor for observation notes
   - Photo upload with preview
   - Timestamp each entry
   - Tag observations by category (confusion, success, error)

3. **Show Pros/Cons Comparison** (3 mins)
   - Create comparison table component
   - Display advantages and disadvantages of each method
   - Show resource requirements (time, storage, privacy)

4. **Add Privacy Consent Modal** (3 mins)
   - Create informed consent form
   - Explain data collection and usage
   - Require explicit agreement before recording

### Key Teaching Points

- Video provides richest data but highest privacy concerns
- Notes + photos are low-tech and accessible
- Consider participant comfort levels
- Always obtain informed consent
- Storage and processing requirements vary by method

## Student Exercise: Gather Feedback on Their Portfolio (20 mins)

### Guided Activity

1. **Setup** (5 mins)
   - Students pair up
   - One acts as designer, one as user
   - Use portfolio website from Week 3

2. **Apply Three Methods** (12 mins)
   - **Observation** (4 mins): Designer observes peer navigating portfolio, takes notes
   - **Interview** (4 mins): Designer asks 5 semi-structured questions about experience
   - **Questionnaire** (4 mins): User completes 5-question survey (digital or paper)

3. **Triangulate Findings** (3 mins)
   - Compare insights from all three methods
   - Identify discrepancies (e.g., user said "easy" but struggled during observation)
   - Share one surprising finding with class

### Success Criteria

- Students collect data using all three methods
- Students identify at least one usability issue
- Students understand the value of combining methods

## Project Structure

```
Week05/feedback-forge/
├── README.md                           # Project overview, learning goals
├── QUICKSTART.md                       # Setup: install, run, deploy (<5 min)
├── docs/
│   ├── Key-Takeaways.md               # 3-5 key learnings for students
│   ├── Data-Gathering-Guide.md        # Best practices reference
│   └── Question-Bank.md               # Sample questions for interviews/surveys
├── src/
│   ├── app/                           # Next.js app directory
│   │   ├── page.tsx
│   │   ├── booking-complete/
│   │   └── admin/
│   └── components/                    # Reusable components
│       ├── FeedbackQuestionnaire.tsx
│       ├── InterviewScheduler.tsx
│       ├── AnalyticsDashboard.tsx
│       └── RecordingMethodsDemo.tsx
├── public/                            # Static assets
│   └── sample-data/                   # Mock feedback data
└── vercel.json                        # Deployment config
```

## AI Agent Implementation Notes

### For Cursor/Codex Implementation

1. **Component Creation Order**:
   ```
   Step 1: Create data models and TypeScript interfaces first
   Step 2: Build FeedbackQuestionnaire component (self-contained)
   Step 3: Build InterviewScheduler component (self-contained)
   Step 4: Create analytics dashboard (uses data models)
   Step 5: Build triangulation view (aggregates all data)
   Step 6: Connect components to main booking flow
   ```

2. **Acceptance Criteria**:
   - Questionnaire must have minimum 5 questions (mix of Likert scale and open-ended)
   - Interview scheduler must validate email and phone formats
   - Analytics dashboard must display at least 3 visualizations
   - All components must be responsive (mobile-first)
   - Data must persist in browser localStorage

3. **Specific File Paths**:
   - Feedback interface: `src/types/feedback.ts`
   - Questionnaire: `src/components/FeedbackQuestionnaire.tsx`
   - Admin routes: `src/app/admin/[page]/page.tsx`
   - Mock data: `src/data/mockFeedbackData.json`

4. **Styling Instructions**:
   - Use Bootstrap 5.3.3 CDN (import in `src/app/layout.tsx`)
   - Apply `.container`, `.row`, `.col-*` for layout
   - Use `.card` for feedback sections
   - Apply `.btn-primary`, `.btn-secondary` for actions
   - Use `.form-control`, `.form-label` for form elements

5. **Code Comments**:
   - Add `// LEARNING NOTE:` comments to explain IxD concepts
   - Comment why specific question types are used
   - Explain data triangulation logic
   - Note privacy considerations

6. **Testing Prompts**:
   - Verify questionnaire appears after booking completion
   - Test form validation on all input fields
   - Ensure analytics data updates when actions are performed
   - Confirm localStorage persists across page refreshes

---

**Estimated Total Time**: 60 minutes (35 + 15 + 10 buffer)

**Tech Stack**: Next.js 16, TypeScript, Bootstrap 5.3.3, localStorage

**Focus**: Data gathering techniques, not complex coding - keep implementation simple and focused on IxD principles.
