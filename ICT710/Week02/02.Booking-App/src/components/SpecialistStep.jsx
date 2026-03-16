import { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';

export default function SpecialistStep({ reason, selected, onSelect, onNext, onBack, canNext }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = new URLSearchParams();
    if (reason) q.set('reason', reason);
    fetch(`/api/doctors?${q}`)
      .then((res) => res.json())
      .then((data) => { setDoctors(Array.isArray(data) ? data : []); setError(null); })
      .catch((e) => { setError(e.message); setDoctors([]); })
      .finally(() => setLoading(false));
  }, [reason]);

  return (
    <div>
      <p className="text-gray-600 mb-4">Choose a specialist</p>
      {loading && <p className="text-gray-500">Loading…</p>}
      {error && (
        <p className="text-red-600 mb-4">Couldn’t load doctors. Check your connection and try again.</p>
      )}
      {!loading && doctors.length === 0 && !error && (
        <p className="text-gray-500 mb-4">No specialists found. Try another reason or contact support.</p>
      )}
      <div className="space-y-3 mb-6">
        {doctors.map((d) => (
          <DoctorCard
            key={d._id}
            doctor={{ ...d, id: d._id }}
            selected={selected?.id === d._id || selected?._id === d._id}
            onSelect={() => onSelect({ ...d, id: d._id })}
          />
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
