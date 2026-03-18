# Week 12 Demo Plan: Usability Testing

## Week Overview

Week 12 focuses on conducting usability testing with real users - the gold standard for evaluating interface effectiveness. Students will learn to plan tests, recruit participants, moderate sessions using think-aloud protocol, collect quantitative and qualitative data, analyze results, and present actionable recommendations.

## Learning Objectives

- Understand what makes a product usable (usefulness, efficiency, effectiveness, learnability, satisfaction)
- Plan usability tests with clear objectives and tasks
- Conduct think-aloud protocol usability sessions
- Collect and analyze both quantitative (time, errors) and qualitative (satisfaction) data
- Identify usability problems from test observations
- Present findings with severity ratings and design recommendations
- Apply usability testing to iterative design improvement

## Demo 1: Usability Testing Lab Simulator (40 mins)

### Objective

Build an interactive platform that simulates planning, conducting, and analyzing usability tests, demonstrating the complete testing workflow from test plan creation to final report.

### Prerequisites

- NEW PROJECT (usability testing toolkit)
- Next.js 16 with App Router
- Tailwind CSS 4.2 (rapid prototyping, modern UI)
- Can reference previous projects (doctor booking, design system) as test subjects

### Implementation Steps

1. **Create Usability Testing Hub** (6 mins)
   - Create `src/app/page.tsx` as testing dashboard
   - Show testing workflow stages:
     - Stage 1: Plan (Define objectives, tasks, metrics)
     - Stage 2: Recruit (Participant screening)
     - Stage 3: Conduct (Moderation + observation)
     - Stage 4: Analyze (Data synthesis)
     - Stage 5: Report (Findings + recommendations)
   
   - Display active tests:
     - Doctor Booking App Usability Test
     - Design System Navigation Test
   
   - Show statistics:
     - Tests completed: 12
     - Participants recruited: 45
     - Issues identified: 87
     - Avg satisfaction score: 3.8/5

2. **Build Test Planning Tool** (8 mins)
   - Create `src/app/plan/page.tsx`
   - Test plan form includes:
     
     **Test Objectives**:
     - What are you trying to learn?
     - Example: "Evaluate if users can book an appointment in < 3 minutes"
     
     **Test Participants**:
     - Number of participants: 5-12 recommended (Nielsen: 5 finds 85% of problems)
     - Participant profile:
       - Demographics (age, gender, tech savvy)
       - Experience level (first-time, occasional, frequent)
       - Screening criteria
     - Incentive: Gift card amount, compensation
     
     **Test Tasks**:
     - Task 1: [Primary task]
       - Description: "Book an appointment with Dr. Sarah Chen for next Tuesday at 2 PM"
       - Success criteria: User completes booking without moderator help
       - Time limit: 5 minutes
     - Task 2: [Secondary task]
     - Task 3: [Exploration task]
     
     **Metrics to Collect**:
     - Quantitative:
       - Task completion rate (%)
       - Time on task (seconds)
       - Error count
       - Clicks to complete
       - Navigation path
     - Qualitative:
       - User satisfaction (1-5 scale)
       - Difficulty rating (1-5 scale)
       - Think-aloud observations
       - Post-task interview responses
     
     **Test Environment**:
     - Setting: Lab / Remote / In-the-wild
     - Equipment: Laptop, mobile, screen recording software
     - Moderator script template
     - Consent form template
   
   - Generate test plan PDF with all details

3. **Create Participant Recruitment Tool** (5 mins)
   - Create `src/app/recruit/page.tsx`
   - Screener questionnaire builder:
     ```
     Screening Questions:
     Q1: How often do you book medical appointments online?
     [ ] Never (exclude)
     [ ] Rarely (1-2 times/year)
     [ ] Sometimes (3-6 times/year)
     [ ] Frequently (7+ times/year)
     
     Q2: What devices do you use for online tasks?
     [ ] Desktop/laptop
     [ ] Smartphone
     [ ] Tablet
     
     Q3: Age range?
     [ ] 18-29
     [ ] 30-49
     [ ] 50-65
     [ ] 65+
     
     Q4: Rate your comfort with technology (1-5):
     [Slider: 1=Beginner to 5=Expert]
     ```
   
   - Show participant roster:
     - Name, age, tech level, availability
     - Diversity score (ensure representative sample)
     - Scheduled session times
   
   - Send automated invites with:
     - Date/time
     - Location (or Zoom link if remote)
     - What to expect
     - Consent form

4. **Build Session Moderation Interface** (10 mins)
   - Create `src/app/conduct/page.tsx`
   - Session interface with:
     
     **Moderator Script Display**:
     ```
     Introduction (2 mins):
     "Thank you for participating. Today you'll use a doctor booking
     app. We're testing the interface, not you. There are no wrong
     answers. Please think aloud - say what you're thinking, what
     you're trying to do, what confuses you. I can't help during
     tasks, but I'll ask questions after. Ready?"
     ```
     
     **Task Cards** (show one at a time):
     ```
     Task 1 of 3
     Scenario: You need to book an appointment with Dr. Sarah Chen,
     a cardiologist, for next Tuesday at 2 PM.
     
     [Start Timer] [Mark Complete] [Mark Failed]
     ```
     
     **Observer Notes Panel**:
     - Timestamp: Auto-generated
     - Observation type: Positive / Negative / Neutral / Question
     - Note: Free text
     - Related heuristic: Dropdown (from Nielsen's 10)
     - Severity: Critical / High / Medium / Low
     
     Example observations:
     ```
     00:45 - Negative - User clicked "Find Doctor" instead of "Book Appointment" (expected primary CTA)
     01:23 - Question - "Where do I put the date?" (looking for date picker)
     02:10 - Negative - Clicked back button, lost form data (no save)
     03:05 - Positive - "Oh, this calendar view is nice!"
     ```
     
     **Metrics Auto-Capture**:
     - Task start time
     - Task end time
     - Duration
     - Success/failure
     - Number of clicks
     - Path taken (screen sequence)
     - Errors made
   
   - **Video Recording Simulation**:
     - Show placeholder for screen recording
     - Show placeholder for user's face (expressions)
     - Show placeholder for hand movements (for mobile)
     - Note: Actual recording would use tools like Zoom, Loom, or OBS

5. **Create Think-Aloud Protocol Guide** (4 mins)
   - Create `src/app/think-aloud/page.tsx`
   - Explain think-aloud:
     - User verbalizes thoughts while working
     - Moderator prompts if user goes silent: "What are you thinking?"
     - Benefits: Reveals mental model, expectations, confusion
   
   - Show example transcript:
     ```
     User: "OK, so I'm on the homepage... I want to book an appointment..."
     User: "There's a 'Book Now' button, that makes sense... [clicks]"
     User: "Hmm, now I have to pick a specialty? I don't know what
            specialty a cardiologist is... let me scroll..."
     User: "Oh wait, there's a search box! [types 'cardio']"
     User: "Why is it showing 'Cardiovascular Surgery'? I just want
            a regular heart doctor..."
     [MODERATOR NOTE: Terminology mismatch - 'Cardiology' vs 'heart doctor']
     ```
   
   - Highlight insights:
     - User didn't know medical term
     - Search helped but results confusing
     - User expected plain language

6. **Build Analysis Dashboard** (7 mins)
   - Create `src/app/analyze/page.tsx`
   - Show aggregated results from 8 participants:
     
     **Task Success Rates**:
     ```
     Task 1: Book appointment with specific doctor
     Success: 6/8 (75%)
     Avg time: 3.5 minutes (Target: 3 minutes)
     
     Task 2: Reschedule existing appointment
     Success: 5/8 (62.5%)
     Avg time: 4.2 minutes
     
     Task 3: Find doctor by specialty
     Success: 7/8 (87.5%)
     Avg time: 2.1 minutes
     ```
     
     **Error Analysis**:
     ```
     Error Type                    | Frequency | Severity
     ------------------------------|-----------|----------
     Clicked wrong button          | 12        | Medium
     Couldn't find date picker     | 8         | High
     Form validation unclear       | 7         | High
     Lost data on back button      | 5         | Critical
     Confused by medical jargon    | 11        | Medium
     ```
     
     **Satisfaction Scores** (1-5 scale):
     ```
     Overall satisfaction: 3.2/5
     Ease of use: 2.8/5
     Visual appeal: 4.1/5
     Likelihood to recommend: 2.9/5
     ```
     
     **Qualitative Themes** (from observations):
     1. Medical terminology too technical (8/8 participants mentioned)
     2. Date picker not obvious enough (6/8 struggled)
     3. No confirmation after booking (5/8 uncertain if succeeded)
     4. Navigation inconsistent (4/8 comments)
     5. Visual design praised (7/8 positive)
   
   - Visualizations:
     - Success rate bar chart
     - Time-on-task box plot
     - Error frequency heat map
     - Satisfaction radar chart
     - Sentiment word cloud from quotes

7. **Generate Testing Report** (3 mins)
   - Create `src/app/report/page.tsx`
   - Professional report structure:
     ```
     USABILITY TEST REPORT
     
     1. Executive Summary
        - 8 participants tested doctor booking app
        - Overall task success: 75%
        - 5 critical issues identified
        - Satisfaction: 3.2/5 (needs improvement)
     
     2. Test Methodology
        - Participants: 8 (age 25-68, mixed tech experience)
        - Location: Remote moderated sessions
        - Duration: 30 mins per session
        - Method: Think-aloud protocol
     
     3. Key Findings
        Finding #1: Medical terminology barrier (Critical)
        - 8/8 participants confused by specialty names
        - Recommendation: Use plain language + tooltips
        
        Finding #2: Date picker visibility (High)
        - 6/8 couldn't find date selection initially
        - Recommendation: Make calendar icon larger, add label
        
        Finding #3: No booking confirmation (Critical)
        - 5/8 uncertain if appointment was booked
        - Recommendation: Add clear success page with details
        
        [... more findings]
     
     4. Recommendations (Prioritized)
        Priority 1 (Critical - fix immediately):
        - Add booking confirmation page
        - Preserve form data on back button
        
        Priority 2 (High - fix in next sprint):
        - Replace medical jargon with plain terms
        - Increase date picker visibility
        
        Priority 3 (Medium - fix within month):
        - Add inline form validation
        - Improve error messages
     
     5. Appendices
        - Raw data (success rates, times, errors)
        - Participant quotes
        - Video clips (if applicable)
        - Consent forms
     ```
   
   - Export options: PDF, PowerPoint, CSV (raw data)

### Code Structure

```
Week12/usability-lab-simulator/
├── README.md
├── QUICKSTART.md
├── docs/
│   ├── Key-Takeaways.md          # Brief IxD, UI, UX lessons from the project
│   ├── Key-Takeaways.md
│   ├── Think-Aloud-Guide.md         # How to conduct think-aloud
│   ├── Moderator-Script.md          # Template script
│   └── Consent-Form-Template.md     # IRB-style consent
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Testing hub
│   │   ├── plan/page.tsx            # Test planning
│   │   ├── recruit/page.tsx         # Participant recruitment
│   │   ├── conduct/page.tsx         # Session moderation
│   │   ├── think-aloud/page.tsx     # Think-aloud guide
│   │   └── analyze/page.tsx         # Results analysis
│   │   └── report/page.tsx          # Report generation
│   ├── components/
│   │   ├── TaskCard.tsx             # Task display during session
│   │   ├── ObserverNotes.tsx        # Note-taking interface
│   │   ├── MetricsDisplay.tsx       # Auto-captured metrics
│   │   ├── ParticipantCard.tsx      # Participant info
│   │   ├── AnalyticsChart.tsx       # Data visualizations
│   │   └── FindingCard.tsx          # Issue display
│   ├── data/
│   │   ├── sampleTasks.ts           # Pre-defined test tasks
│   │   ├── participantProfiles.ts   # Sample participants
│   │   ├── sessionData.ts           # Simulated test sessions
│   │   └── findings.ts              # Example findings
│   └── lib/
│       ├── metricsCalculator.ts     # Calculate success rates, avg times
│       └── reportGenerator.ts       # PDF/PPTX export
├── public/
│   ├── videos/                      # Sample session recordings (optional)
│   └── templates/
│       ├── consent-form.pdf
│       └── moderator-script.pdf
└── vercel.json
```

### Key Teaching Points

1. **5 Users Find 85% of Problems**: Nielsen's research shows diminishing returns after 5 participants

2. **Think-Aloud Reveals Mental Models**: What users say != what they do

3. **Quantitative + Qualitative**: Numbers show what happened, observations show why

4. **Test Early and Often**: Iterative testing through design, not just at end

5. **Moderator Bias**: Don't lead users ("Try clicking here"), stay neutral

## Demo 2: Remote Usability Testing (10 mins)

### Objective

Demonstrate how remote testing differs from in-person, tools needed, and benefits/challenges.

### Implementation Steps

1. **Remote Testing Setup** (4 mins)
   - Create `src/app/remote/page.tsx`
   - Show remote testing checklist:
     ```
     Before Session:
     ☐ Send Zoom link + calendar invite
     ☐ Ask participant to test audio/video 5 mins early
     ☐ Share screen sharing instructions
     ☐ Prepare backup contact (phone number if Zoom fails)
     ☐ Start recording (with consent)
     
     During Session:
     ☐ Ask participant to share screen
     ☐ Remind: "Talk through your thoughts"
     ☐ Use chat for links/tasks (not verbal)
     ☐ Watch for technical issues
     ☐ Take notes in separate window
     
     After Session:
     ☐ Thank participant, explain next steps
     ☐ Send compensation (gift card)
     ☐ Download recording before it expires
     ☐ Back up notes
     ```

2. **Remote Tools Comparison** (3 mins)
   - Show table of tools:
     ```
     Tool          | Features                  | Best For
     --------------|---------------------------|------------------
     Zoom          | Screen share, recording   | Live moderated
     UserTesting   | Automated tasks, panel    | Unmoderated
     Lookback      | Session recording, notes  | Mobile testing
     Optimal Workshop | Card sorting, tree test | IA evaluation
     Hotjar        | Heatmaps, recordings      | Website analytics
     UsabilityHub  | 5-second tests, surveys   | Quick feedback
     ```

3. **Unmoderated Testing Demo** (3 mins)
   - Create `src/app/unmoderated/page.tsx`
   - Show unmoderated setup:
     - Participant gets link, completes alone
     - Tasks pre-recorded as instructions
     - Screen + audio recorded automatically
     - No moderator present (scales better)
   
   - Trade-offs:
     - ✅ Pros: Faster, cheaper, more participants, natural environment
     - ❌ Cons: Can't probe, can't help if stuck, may not think aloud

### Key Teaching Points

- Remote testing is now standard (COVID accelerated adoption)
- Unmoderated good for quick validation, moderated for deep insights
- Technology can fail - have backup plan
- Ensure accessibility (captions, screen reader compatible)

## Student Exercise: Analyze Usability Test Video (15 mins)

### Guided Activity

**Task**: Watch a 3-minute usability test clip and identify usability problems.

1. **Watch Test Session Clip** (3 mins)
   - Instructor shows pre-recorded clip:
     - User attempting to book appointment
     - Think-aloud narration included
     - Shows confusion, errors, success moments
   
   - (Alternative: Students test each other in pairs)

2. **Identify Issues** (7 mins)
   Students document observed problems:
   
   **Issue Template**:
   ```
   Timestamp: [When it happened]
   Problem: [What went wrong]
   User quote: [What user said]
   Severity: [Critical/High/Medium/Low]
   Heuristic violated: [Which one from Nielsen's 10]
   Recommendation: [How to fix]
   ```
   
   Example:
   ```
   Timestamp: 1:23
   Problem: User couldn't find date picker
   User quote: "Where do I put the date?"
   Severity: High
   Heuristic: #6 Recognition rather than recall
   Recommendation: Add calendar icon next to "Select Date" label
   ```
   
   Students should find 3-5 unique issues

3. **Compare Findings** (5 mins)
   - Students share their findings
   - Instructor tallies: Which issues were most commonly identified?
   - Discussion:
     - Did everyone see the same problems?
     - Were severity ratings consistent?
     - Why do observers sometimes disagree?

### Deliverable

- List of 3-5 usability issues with:
  - Problem description
  - User quote (evidence)
  - Severity rating
  - Fix recommendation

### Success Criteria

- Issues are specific (not vague "it's confusing")
- Evidence comes from user behavior/quotes
- Severity appropriate to impact
- Recommendations actionable

## Project Structure

```
Week12/usability-lab-simulator/
├── README.md                              # Project overview
├── QUICKSTART.md                          # Setup in <5 mins
├── docs/
│   ├── Key-Takeaways.md                  # Brief IxD, UI, UX lessons from the project
│   ├── Key-Takeaways.md                  # Usability testing lessons
│   ├── Think-Aloud-Guide.md              # How to conduct
│   ├── Moderator-Script.md               # Template script
│   ├── Consent-Form-Template.md          # Ethics + legal
│   └── Nielsen-5-Users.md                # Why 5 users is enough
├── src/
│   ├── app/                              # Testing toolkit pages
│   ├── components/                       # UI components
│   ├── data/                             # Sample test data
│   └── lib/                              # Utility functions
├── public/
│   ├── videos/                           # Sample sessions (if available)
│   └── templates/                        # Documents
└── vercel.json                           # Deployment config
```

## AI Agent Implementation Notes

### For Cursor/Codex Implementation

1. **Component Creation Order**:
   ```
   Step 1: Setup project with Tailwind CSS 4.2
   Step 2: Create testing hub dashboard
   Step 3: Build test planning form
   Step 4: Create task card components
   Step 5: Build participant recruitment tool
   Step 6: Create session moderation interface
   Step 7: Build observer notes panel
   Step 8: Create metrics auto-capture display
   Step 9: Build analysis dashboard with charts
   Step 10: Create report generation page
   Step 11: Add remote testing guide
   Step 12: Add export to PDF functionality
   ```

2. **Acceptance Criteria**:
   - Test plan must capture: objectives, participants, tasks, metrics
   - Session interface must show: task, timer, notes panel
   - Observer notes must timestamp automatically
   - Metrics must calculate: success rate, avg time, error count
   - Analysis must show: quantitative data + qualitative themes
   - Report must export to PDF with all sections
   - Think-aloud guide must explain protocol clearly

3. **Specific File Paths**:
   - Testing hub: `src/app/page.tsx`
   - Test planning: `src/app/plan/page.tsx`
   - Recruitment: `src/app/recruit/page.tsx`
   - Moderation: `src/app/conduct/page.tsx`
   - Analysis: `src/app/analyze/page.tsx`
   - Report: `src/app/report/page.tsx`
   - Sample tasks: `src/data/sampleTasks.ts`
   - Session data: `src/data/sessionData.ts`

4. **Sample Tasks Data Structure**:
   ```typescript
   export const testTasks = [
     {
       id: 1,
       title: "Book appointment with specific doctor",
       scenario: "You need to book an appointment with Dr. Sarah Chen, a cardiologist, for next Tuesday at 2 PM.",
       successCriteria: "User completes booking without moderator assistance",
       timeLimit: 300, // seconds
       difficulty: "medium"
     },
     // ... more tasks
   ];
   ```

5. **Session Data Structure**:
   ```typescript
   interface UsabilitySession {
     id: string;
     participantId: string;
     date: Date;
     tasks: {
       taskId: number;
       startTime: Date;
       endTime: Date;
       success: boolean;
       clicks: number;
       errors: string[];
       path: string[];
       notes: ObservationNote[];
     }[];
     satisfaction: {
       overall: number;      // 1-5
       easeOfUse: number;
       likelihood: number;
     };
     quotes: string[];
   }
   
   interface ObservationNote {
     timestamp: Date;
     type: 'positive' | 'negative' | 'neutral' | 'question';
     observation: string;
     severity?: 'critical' | 'high' | 'medium' | 'low';
     heuristicId?: number;
   }
   ```

6. **Metrics Calculation**:
   ```typescript
   function calculateMetrics(sessions: UsabilitySession[]) {
     return {
       successRate: (successCount / totalTasks) * 100,
       avgTime: totalTime / successCount,
       errorRate: totalErrors / totalTasks,
       satisfactionAvg: sum(satisfaction) / sessions.length
     };
   }
   ```

7. **Chart Visualizations**:
   - Success rate: Horizontal bar chart (task by task)
   - Time on task: Box plot (show median, quartiles, outliers)
   - Error frequency: Heat map (error type × task)
   - Satisfaction: Radar chart (5 dimensions)
   - Use Chart.js or Recharts library

8. **Tailwind Styling**:
   - Use card components: `bg-white rounded-lg shadow-md p-6`
   - Task cards: Large, clear, numbered
   - Timer: Prominent, update every second
   - Notes panel: Sticky sidebar, scrollable
   - Success/failure badges: Green/red with icons
   - Severity colors:
     - Critical: `bg-red-500 text-white`
     - High: `bg-orange-500 text-white`
     - Medium: `bg-yellow-500 text-black`
     - Low: `bg-blue-500 text-white`

9. **Pre-populate Sample Data**:
   - 8 participant profiles (diverse ages, tech levels)
   - 3 test tasks per session
   - 15-20 observer notes per session
   - Realistic times (2-5 minutes per task)
   - Mix of success/failure
   - Authentic user quotes from observations

10. **Think-Aloud Protocol Guide Content**:
    ```markdown
    # Think-Aloud Protocol Guide
    
    ## What is Think-Aloud?
    Users verbalize their thoughts while performing tasks.
    
    ## Introduction Script
    "Please think aloud - say what you're thinking, what you're 
    looking for, what confuses you, what you like. Pretend I'm 
    not here. There are no wrong answers."
    
    ## When to Prompt
    - If user silent for 5+ seconds: "What are you thinking?"
    - If user seems confused: "What are you looking for?"
    - If user makes error: "What happened there?"
    
    ## What NOT to Do
    - Don't lead: ❌ "Try clicking that button"
    - Don't explain: ❌ "That's the search feature"
    - Don't judge: ❌ "Good job!"
    
    ## What to Capture
    - Expectations: "I thought this would..."
    - Confusion: "I don't understand..."
    - Positive: "Oh, I like this!"
    - Errors: "Oops, that's not what I meant"
    ```

11. **Report Export Requirements**:
    - PDF format using jspdf or react-pdf
    - Include:
      - Cover page with test name, date
      - Executive summary (1 page)
      - Methodology (half page)
      - Findings (1 page per critical finding)
      - Recommendations table (prioritized)
      - Appendix with raw data tables
    - Professional formatting (headers, page numbers, branding)

12. **Responsive Design**:
    - Desktop: Split screen (task left, notes right)
    - Tablet: Stacked with sticky task header
    - Mobile: Single column, collapsible notes

13. **Testing Prompts**:
    - Verify timer starts/stops correctly
    - Test note timestamping accuracy
    - Confirm metrics calculate correctly
    - Check chart data visualization accuracy
    - Test PDF export generates all sections
    - Verify task success/failure marking
    - Test participant profile diversity

14. **Accessibility Considerations**:
    - Keyboard navigation for all controls
    - ARIA labels on interactive elements
    - High contrast mode for notes
    - Screen reader announcements for timer

---

**Estimated Total Time**: 65 minutes (40 + 10 + 15)

**Tech Stack**: Next.js 16, TypeScript, Tailwind CSS 4.2, Chart.js, jspdf

**Focus**: Hands-on usability testing with real users. Emphasize systematic observation, quantitative + qualitative data, and translating findings into design improvements. This is the culmination of the IxD process.

**Course Finale**: This demo completes the IxD journey: Research (Weeks 5-6) → Design (Weeks 7-9) → Build (Week 10) → Evaluate (Weeks 11-12). Students see the full cycle.
