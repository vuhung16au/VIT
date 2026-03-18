# Week 11 Demo Plan: Design Evaluation

## Week Overview

Week 11 focuses on evaluating design quality through expert inspection methods, analytics, and structured evaluation frameworks. Students will learn to assess existing interfaces WITHOUT direct user involvement first, using heuristic evaluation, cognitive walkthroughs, and analytics dashboards to identify usability problems before formal testing.

## Learning Objectives

- Understand the difference between formative and summative evaluation
- Conduct heuristic evaluation using Nielsen's 10 usability heuristics
- Perform cognitive walkthroughs to identify learning barriers
- Use analytics to understand user behavior patterns
- Apply inspection methods to identify usability problems
- Document findings with severity ratings and actionable recommendations

## Demo 1: Design Evaluation Dashboard (35 mins)

### Objective

Build an interactive evaluation platform that demonstrates heuristic evaluation, cognitive walkthrough, and analytics review on BOTH existing projects (doctor booking app from Weeks 5-9 and design system from Week 10).

### Prerequisites

- NEW PROJECT that evaluates existing projects
- Next.js 16 with App Router
- Bootstrap 5.3.3 (structured data presentation)
- Access to previous projects for screenshots/examples

### Implementation Steps

1. **Create Evaluation Hub** (6 mins)
   - Create `src/app/page.tsx` as evaluation dashboard
   - Build project selection:
     - Select "Doctor Booking App" (Weeks 5-9)
     - Select "Design System Studio" (Week 10)
   - Show evaluation methods available:
     - Heuristic Evaluation (Nielsen's 10)
     - Cognitive Walkthrough
     - Analytics Review
     - Inspection Checklist
   - Display evaluation summary cards:
     - Total issues found
     - Severity breakdown (Critical, High, Medium, Low)
     - Compliance score
     - Most violated heuristics

2. **Build Heuristic Evaluation Tool** (10 mins)
   - Create `src/app/heuristic/page.tsx`
   - Display Nielsen's 10 Usability Heuristics:
     1. Visibility of system status
     2. Match between system and real world
     3. User control and freedom
     4. Consistency and standards
     5. Error prevention
     6. Recognition rather than recall
     7. Flexibility and efficiency of use
     8. Aesthetic and minimalist design
     9. Help users recognize, diagnose, recover from errors
     10. Help and documentation
   
   - For each heuristic, show:
     - Heuristic name and description
     - Evaluation form:
       - Screenshot upload area
       - Screen/component being evaluated
       - Compliance rating (1-5 scale)
       - Issues found (description)
       - Severity (Critical, High, Medium, Low)
       - Recommendations
     - Example violations (pre-populated)
   
   - **Example Pre-loaded Findings** (Doctor Booking App):
     ```
     Heuristic 1: Visibility of System Status
     Screen: Appointment booking form
     Issue: No loading indicator when submitting appointment
     Severity: High
     Recommendation: Add spinner + "Booking your appointment..." message
     
     Heuristic 4: Consistency and Standards
     Screen: Date picker
     Issue: Date format inconsistent (MM/DD vs DD/MM in different screens)
     Severity: Medium
     Recommendation: Use ISO date format (YYYY-MM-DD) consistently
     
     Heuristic 6: Recognition Rather Than Recall
     Screen: Doctor selection
     Issue: Specialties use medical jargon (Otolaryngology vs ENT)
     Severity: Medium
     Recommendation: Use plain language + tooltip with definition
     ```
   
   - Display findings in:
     - Table view (sortable by severity)
     - Card view (grouped by heuristic)
     - Export to PDF report

3. **Create Cognitive Walkthrough Tool** (8 mins)
   - Create `src/app/cognitive-walkthrough/page.tsx`
   - Define walkthrough structure:
     - **Task Definition**: What user is trying to accomplish
     - **User Profile**: Who is the user? (with persona reference)
     - **Step-by-step Analysis**: Evaluate each action
   
   - For each step, ask 4 questions:
     1. Will users know what to do?
     2. Will users see how to do it?
     3. Will users understand from feedback whether action was correct?
     4. Will users know they made progress toward goal?
   
   - **Example Walkthrough** (Doctor Booking App):
     ```
     Task: Book appointment with Dr. Sarah Chen for next Tuesday
     User: Robert (65-year-old, limited tech experience)
     
     Step 1: Navigate to booking page
     Q1: Will user know what to do?
     ❌ NO - Homepage has 3 CTAs: "Find Doctor", "Book Now", "View Specialists"
     Issue: Unclear which button to click
     Recommendation: Primary CTA should be "Book Appointment"
     
     Step 2: Select specialty
     Q2: Will user see how to do it?
     ⚠️ MAYBE - Dropdown has 20+ specialties without search
     Issue: Long list requires scrolling, easy to miss option
     Recommendation: Add search/filter, group by common categories
     
     Step 3: Choose doctor
     Q3: Will user understand feedback?
     ✅ YES - Doctor cards show availability clearly
     
     Step 4: Select date/time
     Q4: Will user know they made progress?
     ❌ NO - No visual confirmation when date is selected
     Issue: Selected date doesn't highlight
     Recommendation: Add selected state styling, show summary sidebar
     ```
   
   - Display walkthrough results:
     - Issue count per step
     - Most problematic steps (heat map)
     - Task completion likelihood score
     - Recommended fixes prioritized

4. **Build Analytics Dashboard** (6 mins)
   - Create `src/app/analytics/page.tsx`
   - Show simulated analytics data:
     
     **User Flow Analytics** (Doctor Booking App):
     - Homepage → 1,000 visitors
     - Clicked "Book Now" → 650 (65% conversion)
     - Selected specialty → 520 (80% of 650)
     - Selected doctor → 410 (79% of 520)
     - Completed booking → 245 (60% of 410)
     - **Overall funnel completion: 24.5%**
     
     **Drop-off Analysis**:
     - Biggest drop: Doctor selection → Completed booking (40% abandon)
     - Why? Hypothesis: Date picker confusing, no instant confirmation
     
     **Heatmap Data**:
     - Most clicked: "Search by specialty" (85%)
     - Least clicked: "Advanced filters" (12%)
     - Dead zone: Footer links (2% clicks)
     
     **Performance Metrics**:
     - Average time to book: 4.5 minutes (industry: 2 minutes)
     - Error rate: 18% (submitted incomplete forms)
     - Return rate: 35% (abandoned and came back)
   
   - Visualizations:
     - Funnel chart (conversion at each step)
     - Heatmap overlay on screenshots
     - Time-on-task bar chart
     - Error locations (annotated screenshots)
   
   - Insights and Recommendations:
     - "40% drop at final step suggests payment/confirmation UX issue"
     - "High time-on-task indicates cognitive load"
     - "18% error rate points to unclear form validation"

5. **Create Inspection Checklist** (5 mins)
   - Create `src/app/checklist/page.tsx`
   - Build comprehensive checklist with categories:
     
     **Accessibility Checklist**:
     - ☐ Color contrast meets WCAG AA (4.5:1)
     - ☐ All images have alt text
     - ☐ Keyboard navigation works for all actions
     - ☐ Focus indicators visible
     - ☐ Screen reader compatible
     - ☐ Form labels properly associated
     
     **Usability Checklist**:
     - ☐ Primary CTA clearly visible
     - ☐ Error messages specific and actionable
     - ☐ Consistent terminology throughout
     - ☐ Undo/redo available for critical actions
     - ☐ Search functionality available
     - ☐ Help/documentation accessible
     
     **Performance Checklist**:
     - ☐ Page load time < 3 seconds
     - ☐ Images optimized
     - ☐ No console errors
     - ☐ Mobile responsive
     
     **Content Checklist**:
     - ☐ Headings in logical order (H1 → H2 → H3)
     - ☐ Links descriptive (not "click here")
     - ☐ Plain language (8th grade reading level)
   
   - For each checkbox:
     - Status: Pass / Fail / N/A
     - Notes field
     - Screenshot evidence
     - Related heuristic (if applicable)
   
   - Auto-calculate compliance score: (Pass / Total) × 100

### Code Structure

```
Week11/evaluation-toolkit/
├── README.md
├── QUICKSTART.md
├── docs/
│   ├── Key-Takeaways.md
│   ├── Nielsens-Heuristics.md      # Full heuristics reference
│   └── Report-Template.md          # Evaluation report template
├── src/
│   ├── app/
│   │   ├── page.tsx                # Evaluation hub
│   │   ├── heuristic/
│   │   │   └── page.tsx           # Heuristic evaluation
│   │   ├── cognitive-walkthrough/
│   │   │   └── page.tsx           # Cognitive walkthrough
│   │   ├── analytics/
│   │   │   └── page.tsx           # Analytics dashboard
│   │   └── checklist/
│   │       └── page.tsx           # Inspection checklist
│   ├── components/
│   │   ├── HeuristicCard.tsx      # Heuristic display
│   │   ├── IssueForm.tsx          # Issue logging
│   │   ├── SeverityBadge.tsx      # Severity indicator
│   │   ├── WalkthroughStep.tsx    # Walkthrough step UI
│   │   ├── AnalyticsChart.tsx     # Chart visualizations
│   │   └── ChecklistItem.tsx      # Checklist checkbox
│   ├── data/
│   │   ├── heuristics.ts          # Nielsen's 10 heuristics
│   │   ├── sampleFindings.ts      # Pre-loaded examples
│   │   └── analyticsData.ts       # Simulated analytics
│   └── lib/
│       └── severityCalculator.ts   # Severity scoring logic
├── public/
│   └── screenshots/                # App screenshots for evaluation
│       ├── doctor-booking/
│       └── design-system/
└── vercel.json
```

### Key Teaching Points

1. **Inspection Methods Are Cost-Effective**: Find 40-60% of usability problems without users

2. **Heuristics Provide Framework**: Nielsen's 10 give systematic way to evaluate

3. **Severity Matters**: Not all problems equal - prioritize critical issues

4. **Multiple Evaluators Better**: Single evaluator finds 35%, 3-5 find 75%+

5. **Analytics Show Reality**: What users actually do vs what they say

## Demo 2: Comparative Evaluation (15 mins)

### Objective

Compare two design alternatives using evaluation criteria to demonstrate how evaluation informs design decisions.

### Implementation Steps

1. **Create Comparison Tool** (7 mins)
   - Create `src/app/comparison/page.tsx`
   - Compare two versions of doctor booking flow:
     - **Version A**: Single-page form (all fields on one screen)
     - **Version B**: Multi-step wizard (fields across 3 steps)
   
   - Evaluate both against criteria:
     - **Learnability**: How quickly can new users complete task?
     - **Efficiency**: How fast can expert users complete?
     - **Memorability**: Can users remember after time away?
     - **Errors**: How many mistakes do users make?
     - **Satisfaction**: Do users enjoy using it?
   
   - Show side-by-side:
     - Screenshots of both versions
     - Heuristic compliance scores
     - Predicted task completion time
     - Cognitive load estimate
     - Accessibility scores

2. **Demo A/B Testing Concept** (5 mins)
   - Create `src/app/ab-testing/page.tsx`
   - Explain A/B testing methodology:
     - Split users 50/50 between versions
     - Measure conversion rates
     - Statistical significance calculation
   
   - Show simulated results:
     ```
     Version A (Single Page):
     - Conversion rate: 52%
     - Avg completion time: 3.2 mins
     - Error rate: 22%
     
     Version B (Multi-step):
     - Conversion rate: 68%
     - Avg completion time: 4.1 mins
     - Error rate: 9%
     
     Winner: Version B (statistically significant, p < 0.05)
     Trade-off: Longer time but fewer errors, higher completion
     ```

3. **Decision Framework** (3 mins)
   - Show decision matrix:
     ```
     Criteria          | Weight | Version A | Version B
     ------------------|--------|-----------|----------
     Learnability      | 25%    | 6/10      | 9/10
     Efficiency        | 20%    | 8/10      | 5/10
     Error Prevention  | 30%    | 4/10      | 9/10
     Satisfaction      | 25%    | 5/10      | 8/10
     ------------------|--------|-----------|----------
     Total Score       | 100%   | 5.45/10   | 7.8/10
     ```
   
   - Recommendation: Version B (multi-step) for better error prevention and satisfaction

### Key Teaching Points

- Evaluation isn't subjective opinion - it's systematic analysis
- Trade-offs exist: faster isn't always better
- Data-driven decisions beat "I think" discussions
- Context matters: Expert users may prefer Version A

## Student Exercise: Heuristic Evaluation Practice (10 mins)

### Guided Activity

**Task**: Conduct a mini heuristic evaluation on one screen from a website or app.

1. **Select Screen to Evaluate** (2 mins)
   Students choose:
   - Option A: Login screen from a popular app
   - Option B: Checkout page from e-commerce site
   - Option C: Settings screen from their phone
   - Option D: One of their own project screens

2. **Apply 3 Heuristics** (6 mins)
   Students evaluate screen against 3 key heuristics:
   - Heuristic 1: Visibility of system status
   - Heuristic 3: User control and freedom
   - Heuristic 5: Error prevention
   
   For each, document:
   - Is it violated? (Yes/No)
   - If yes, describe the problem
   - Severity: Critical / High / Medium / Low
   - Recommendation for fix

3. **Share Findings** (2 mins)
   - Students present 1 critical finding
   - Class discusses: Is this really a problem?
   - Instructor notes: Evaluators sometimes disagree - that's normal

### Deliverable

- Screenshot of evaluated screen
- Table with 3 heuristics evaluated
- At least 1 issue identified with severity and recommendation

### Success Criteria

- Correctly applies heuristic definitions
- Issue description is specific (not vague "it's confusing")
- Recommendations are actionable
- Severity rating justified

## Project Structure

```
Week11/evaluation-toolkit/
├── README.md                              # Project overview
├── QUICKSTART.md                          # Setup in <5 mins
├── docs/
│   ├── Key-Takeaways.md                  # Evaluation lessons
│   ├── Nielsens-Heuristics.md            # Full heuristics guide
│   ├── Report-Template.md                # Professional report format
│   └── Evaluation-Methods-Comparison.md  # When to use which method
├── src/
│   ├── app/                              # Evaluation toolkit pages
│   ├── components/                       # UI components
│   ├── data/                             # Sample data
│   └── lib/                              # Utility functions
├── public/
│   └── screenshots/                      # Evaluation evidence
└── vercel.json                           # Deployment config
```

## AI Agent Implementation Notes

### For Cursor/Codex Implementation

1. **Component Creation Order**:
   ```
   Step 1: Setup project structure and Bootstrap 5.3.3
   Step 2: Create evaluation hub (src/app/page.tsx)
   Step 3: Load Nielsen's 10 heuristics data
   Step 4: Build heuristic evaluation page
   Step 5: Create issue form component
   Step 6: Build cognitive walkthrough page
   Step 7: Create walkthrough step component
   Step 8: Build analytics dashboard
   Step 9: Create chart components (funnel, heatmap)
   Step 10: Build inspection checklist
   Step 11: Create comparison tool
   Step 12: Add export to PDF functionality
   ```

2. **Acceptance Criteria**:
   - All 10 usability heuristics must be displayed with descriptions
   - Issue form must capture: screen, description, severity, recommendation
   - Cognitive walkthrough must ask 4 questions per step
   - Analytics must show: funnel, heatmap, time-on-task
   - Checklist must auto-calculate compliance percentage
   - Severity badges must use color coding (red=critical, orange=high, yellow=medium, blue=low)
   - Comparison tool must show side-by-side evaluation
   - Export functionality must generate PDF report

3. **Specific File Paths**:
   - Heuristics data: `src/data/heuristics.ts`
   - Sample findings: `src/data/sampleFindings.ts`
   - Analytics data: `src/data/analyticsData.ts`
   - Heuristic page: `src/app/heuristic/page.tsx`
   - Walkthrough page: `src/app/cognitive-walkthrough/page.tsx`
   - Analytics page: `src/app/analytics/page.tsx`
   - Comparison page: `src/app/comparison/page.tsx`

4. **Heuristics Data Structure**:
   ```typescript
   export const nielsensHeuristics = [
     {
       id: 1,
       name: "Visibility of System Status",
       description: "The design should always keep users informed about what is going on, through appropriate feedback within a reasonable amount of time.",
       examples: [
         "Loading indicators when fetching data",
         "Progress bars for multi-step processes",
         "Status messages after form submission"
       ]
     },
     // ... 9 more heuristics
   ];
   ```

5. **Issue Tracking Structure**:
   ```typescript
   interface UsabilityIssue {
     id: string;
     heuristicId: number;
     screen: string;
     description: string;
     severity: 'critical' | 'high' | 'medium' | 'low';
     recommendation: string;
     screenshot?: string;
     foundBy: string;
     dateFound: Date;
   }
   ```

6. **Analytics Data Structure**:
   ```typescript
   interface AnalyticsData {
     funnel: {
       step: string;
       users: number;
       dropoffRate: number;
     }[];
     heatmap: {
       x: number;
       y: number;
       clicks: number;
     }[];
     performance: {
       avgTimeOnTask: number;
       errorRate: number;
       completionRate: number;
     };
   }
   ```

7. **Severity Color Coding**:
   ```css
   .severity-critical { background: #dc3545; color: white; }
   .severity-high     { background: #fd7e14; color: white; }
   .severity-medium   { background: #ffc107; color: black; }
   .severity-low      { background: #0dcaf0; color: black; }
   ```

8. **Bootstrap Components to Use**:
   - Cards: Display heuristics and issues
   - Tables: List all findings sortable
   - Badges: Show severity levels
   - Tabs: Switch between evaluation methods
   - Forms: Issue submission
   - Progress bars: Compliance scores
   - Tooltips: Explain heuristic terms

9. **Pre-populate Sample Data**:
   - Include 5-7 sample issues for doctor booking app
   - Include 3-4 sample issues for design system
   - Provide example cognitive walkthrough with 5 steps
   - Include realistic analytics data (conversion funnel, heatmap)

10. **Export Functionality**:
    - Generate PDF report with:
      - Executive summary (issue count, compliance score)
      - Issues by severity (critical first)
      - Issues by heuristic (grouped)
      - Recommendations prioritized
    - Use library: `jspdf` or `react-pdf`
    - Include screenshots in report

11. **Responsive Design**:
    - Mobile: Stack comparison side-by-side → top-bottom
    - Tablet: 2-column grid for issue cards
    - Desktop: Full dashboard with sidebar navigation

12. **Testing Prompts**:
    - Verify all 10 heuristics display correctly
    - Test issue form validation (required fields)
    - Confirm severity dropdown has 4 options
    - Check analytics charts render with sample data
    - Test checklist compliance calculation
    - Verify PDF export generates properly
    - Test comparison tool loads both versions

---

**Estimated Total Time**: 60 minutes (35 + 15 + 10)

**Tech Stack**: Next.js 16, TypeScript, Bootstrap 5.3.3, Chart.js (for analytics)

**Focus**: Expert evaluation methods that don't require users. Emphasize systematic approach over subjective opinions. Show how evaluation identifies specific, actionable problems.

**Builds On**: Uses BOTH doctor booking app (Weeks 5-9) and design system (Week 10) as evaluation targets, demonstrating continuity and practical application.
