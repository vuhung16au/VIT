const REASONS = [
  { id: 'general', label: 'General check-up' },
  { id: 'follow-up', label: 'Follow-up visit' },
  { id: 'skin', label: 'Skin / rash' },
  { id: 'heart', label: 'Heart / blood pressure' },
  { id: 'referral', label: 'Referral' },
  { id: 'other', label: 'Other' },
];

export default function ReasonStep({ value, onChange, onNext, onBack, canNext }) {
  return (
    <div>
      <p className="text-gray-600 mb-4">I need a consultation for…</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {REASONS.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => onChange(r.id)}
            className={`min-h-touch px-4 py-2 rounded-lg border-2 transition-colors ${
              value === r.id
                ? 'border-primary-600 bg-primary-50 text-primary-800'
                : 'border-gray-200 bg-white hover:border-primary-300'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="min-h-touch px-4 rounded-lg border border-gray-300 bg-white font-medium"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          className="min-h-touch px-4 rounded-lg bg-primary-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
