import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 'who',
    question: 'Who are the users?',
    placeholder: 'Patients aged 18-70 with different levels of digital confidence.',
  },
  {
    id: 'what',
    question: 'What are they trying to do?',
    placeholder: 'Book doctor appointments quickly and with confidence.',
  },
  {
    id: 'when',
    question: 'When do they use this?',
    placeholder: 'During urgent symptoms, routine checkups, or follow-up care.',
  },
  {
    id: 'where',
    question: 'Where are they using this?',
    placeholder: 'Mostly mobile, with some desktop use at home or work.',
  },
  {
    id: 'why',
    question: 'Why do they need this?',
    placeholder: 'The current process relies on phone calls, delays, and uncertainty.',
  },
];

const initialAnswers = {
  who: '',
  what: '',
  when: '',
  where: '',
  why: '',
};

export default function ProblemSpace() {
  const [answers, setAnswers] = useState(initialAnswers);

  const isComplete = useMemo(
    () => Object.values(answers).every((answer) => answer.trim().length > 0),
    [answers],
  );

  return (
    <div className="min-h-screen rounded-[2rem] bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Problem Space Analysis</h1>
        <p className="mb-8 text-gray-600">
          Answer the 5W questions before designing the interface. This keeps the problem clear
          before we start shaping screens and flows.
        </p>

        <div className="space-y-6">
          {questions.map((item) => (
            <div key={item.id} className="rounded-2xl bg-white p-6 shadow-md">
              <label htmlFor={item.id} className="mb-3 block text-lg font-bold text-gray-900">
                {item.question}
              </label>
              <textarea
                id={item.id}
                value={answers[item.id]}
                onChange={(event) =>
                  setAnswers((current) => ({ ...current, [item.id]: event.target.value }))
                }
                placeholder={item.placeholder}
                rows={3}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              />
            </div>
          ))}
        </div>

        {isComplete && (
          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900">✓ Problem Space Defined</h2>
            <p className="mb-4 text-gray-700">
              Your answers point to several design implications before any UI details are finalized.
            </p>
            <ul className="ml-5 list-disc space-y-2 text-gray-700">
              <li>
                <strong>Mobile-first layout</strong> because healthcare tasks often happen on the go.
              </li>
              <li>
                <strong>Simple, clear interactions</strong> because user confidence will vary widely.
              </li>
              <li>
                <strong>Fast booking flow</strong> because some situations feel urgent or stressful.
              </li>
              <li>
                <strong>Visible feedback and reassurance</strong> to reduce uncertainty.
              </li>
            </ul>

            <div className="mt-6 text-center">
              <Link
                to="/problem-space/conceptual-model"
                className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                View Conceptual Model →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
