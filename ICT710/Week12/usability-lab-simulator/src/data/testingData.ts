export const workflowStages = [
  { title: "Plan", detail: "Define objectives, tasks, metrics, and environment." },
  { title: "Recruit", detail: "Screen participants and schedule sessions." },
  { title: "Conduct", detail: "Moderate sessions and capture observations." },
  { title: "Analyze", detail: "Synthesize quantitative and qualitative evidence." },
  { title: "Report", detail: "Prioritize findings and present recommendations." },
];

export const activeTests = [
  { name: "Doctor Booking App Usability Test", status: "In progress", sessions: 8 },
  { name: "Design System Navigation Test", status: "Planned", sessions: 4 },
];

export const screeningQuestions = [
  "How often do you book medical appointments online?",
  "What devices do you use for online tasks?",
  "Which age range are you in?",
  "How comfortable are you with technology (1-5)?",
];

export const participants = [
  { name: "Alex", age: "30-49", tech: "4/5", device: "Smartphone", slot: "Tue 10:00", diversity: "High" },
  { name: "Mina", age: "18-29", tech: "5/5", device: "Laptop", slot: "Tue 14:00", diversity: "Medium" },
  { name: "Robert", age: "65+", tech: "2/5", device: "Tablet", slot: "Wed 09:30", diversity: "High" },
  { name: "Priya", age: "50-65", tech: "3/5", device: "Laptop", slot: "Wed 13:30", diversity: "Medium" },
];

export const sessionTasks = [
  {
    title: "Task 1 of 3",
    scenario: "Book an appointment with Dr. Sarah Chen for next Tuesday at 2 PM.",
  },
  {
    title: "Task 2 of 3",
    scenario: "Reschedule an existing appointment to Friday morning.",
  },
  {
    title: "Task 3 of 3",
    scenario: "Find a doctor by specialty and compare two options.",
  },
];

export const observerNotes = [
  "00:45 - Negative - User clicked Find Doctor instead of Book Appointment.",
  "01:23 - Question - 'Where do I put the date?' while searching for date picker.",
  "02:10 - Negative - Back button caused form data loss.",
  "03:05 - Positive - 'This calendar view is nice.'",
];

export const thinkAloudTranscript = [
  'User: "OK, I want to book an appointment..."',
  'User: "There is a Book Now button, that makes sense."',
  'User: "Now I have to pick a specialty? I do not know the medical word."',
  'User: "Oh, there is a search box. Let me type cardio."',
  "Moderator note: Terminology mismatch between user language and system labels.",
];

export const analysisSummary = [
  { task: "Book appointment with specific doctor", success: "6/8 (75%)", time: "3.5 minutes" },
  { task: "Reschedule existing appointment", success: "5/8 (62.5%)", time: "4.2 minutes" },
  { task: "Find doctor by specialty", success: "7/8 (87.5%)", time: "2.1 minutes" },
];

export const errorTable = [
  { error: "Clicked wrong button", frequency: 12, severity: "Medium" },
  { error: "Couldn't find date picker", frequency: 8, severity: "High" },
  { error: "Form validation unclear", frequency: 7, severity: "High" },
  { error: "Lost data on back button", frequency: 5, severity: "Critical" },
  { error: "Confused by medical jargon", frequency: 11, severity: "Medium" },
];

export const satisfactionScores = [
  { label: "Overall satisfaction", value: "3.2/5" },
  { label: "Ease of use", value: "2.8/5" },
  { label: "Visual appeal", value: "4.1/5" },
  { label: "Likelihood to recommend", value: "2.9/5" },
];

export const qualitativeThemes = [
  "Medical terminology too technical",
  "Date picker not obvious enough",
  "No confirmation after booking",
  "Navigation inconsistent",
  "Visual design praised",
];

export const topFindings = [
  {
    title: "Medical terminology barrier",
    severity: "Critical",
    evidence: "8/8 participants were confused by specialty names.",
    recommendation: "Use plain language with optional medical detail.",
  },
  {
    title: "Date picker visibility",
    severity: "High",
    evidence: "6/8 participants could not find date selection quickly.",
    recommendation: "Increase date-picker prominence and label it clearly.",
  },
  {
    title: "No booking confirmation",
    severity: "Critical",
    evidence: "5/8 participants were unsure whether booking succeeded.",
    recommendation: "Add a clear success page with summary details.",
  },
];
