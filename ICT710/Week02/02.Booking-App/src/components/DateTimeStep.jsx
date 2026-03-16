import { useState, useEffect } from 'react';

export default function DateTimeStep({ doctorId, selected, onSelect, onNext, onBack, canNext }) {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    if (!doctorId) return;
    setLoading(true);
    const q = dateFilter ? `?date=${dateFilter}` : '';
    fetch(`/api/appointments/slots/${doctorId}${q}`)
      .then((res) => res.json())
      .then((data) => { setSlots(Array.isArray(data) ? data : []); setError(null); })
      .catch((e) => { setError(e.message); setSlots([]); })
      .finally(() => setLoading(false));
  }, [doctorId, dateFilter]);

  const formatSlot = (iso) => {
    const d = new Date(iso);
    return d.toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' });
  };

  return (
    <div>
      <p className="text-gray-600 mb-4">Choose date and time</p>
      <label className="block text-sm font-medium text-gray-700 mb-2">From date (optional)</label>
      <input
        type="date"
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
        className="mb-4 border rounded-lg px-3 py-2 min-h-touch"
      />
      {loading && <p className="text-gray-500">Loading slots…</p>}
      {error && (
        <p className="text-red-600 mb-4">Couldn’t load slots. Try again.</p>
      )}
      {!loading && slots.length === 0 && !error && (
        <p className="text-gray-500 mb-4">No slots available — try another date or doctor.</p>
      )}
      <div className="flex flex-wrap gap-2 mb-6">
        {slots.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onSelect(s)}
            className={`min-h-touch px-4 py-2 rounded-lg border-2 transition-colors ${
              selected === s ? 'border-primary-600 bg-primary-50' : 'border-gray-200 hover:border-primary-300'
            }`}
          >
            {formatSlot(s)}
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
