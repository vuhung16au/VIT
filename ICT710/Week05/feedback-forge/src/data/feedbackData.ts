import type {
  InterviewSchedule,
  RecordingEntry,
  SurveyResponse,
  TriangulatedInsight,
} from "@/types/feedback";

export const surveyStorageKey = "feedback-forge-surveys";
export const interviewStorageKey = "feedback-forge-interviews";
export const recordingStorageKey = "feedback-forge-recordings";

export const defaultSurveys: SurveyResponse[] = [
  {
    id: "survey-1",
    satisfaction: 4,
    clarity: 5,
    trust: 4,
    bookingEase: "Time slots were easy to understand",
    comment: "I liked the progress cues but wanted a clearer insurance explanation.",
    createdAt: "2026-03-18T09:00:00.000Z",
  },
  {
    id: "survey-2",
    satisfaction: 3,
    clarity: 4,
    trust: 5,
    bookingEase: "I would prefer fewer choices at the scheduling step",
    comment: "The doctor profile built trust, but date selection felt slow.",
    createdAt: "2026-03-18T10:30:00.000Z",
  },
];

export const defaultInterviews: InterviewSchedule[] = [
  {
    id: "interview-1",
    name: "Rita Evans",
    email: "rita@example.com",
    phone: "0412 555 221",
    preferredSlot: "Wednesday 2:00 PM",
    interviewType: "Video",
    createdAt: "2026-03-18T11:15:00.000Z",
  },
];

export const defaultRecordings: RecordingEntry[] = [
  {
    id: "recording-1",
    method: "Notes + Photos",
    category: "Confusion",
    note: "Participant paused on date selection and asked whether the appointment timezone was local.",
    createdAt: "2026-03-18T12:00:00.000Z",
  },
];

export const triangulatedInsights: TriangulatedInsight[] = [
  {
    title: "Scheduling is the main friction point",
    questionnaire: "Users rate booking satisfaction well overall, but time-slot confidence drops.",
    interviews: "Participants say they want clearer slot availability and expectations before selecting a doctor.",
    observation: "Most hesitation and drop-off happens during date and time selection.",
  },
  {
    title: "Trust signals matter in healthcare",
    questionnaire: "High trust ratings correlate with visible doctor details.",
    interviews: "Users explicitly mention credentials and cancellation policies as reassuring.",
    observation: "Profiles with credentials receive longer but more committed engagement.",
  },
];
