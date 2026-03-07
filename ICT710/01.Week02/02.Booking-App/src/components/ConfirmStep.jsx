export default function ConfirmStep({ reason, doctor, slot, patient, onPatientChange, onConfirm, onBack }) {
  const formatSlot = (iso) => {
    if (!iso) return '—';
    const d = new Date(iso);
    return d.toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' });
  };

  return (
    <div>
      <p className="text-gray-600 mb-4">Review and confirm your booking</p>
      <div className="rounded-lg border bg-gray-50 p-4 mb-6 space-y-2">
        <p><strong>Reason:</strong> {reason}</p>
        <p><strong>Doctor:</strong> {doctor?.name} — {doctor?.specialty}</p>
        <p><strong>When:</strong> {formatSlot(slot)}</p>
      </div>

      <div className="space-y-3 mb-6">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Your name</span>
          <input
            type="text"
            value={patient.name}
            onChange={(e) => onPatientChange({ ...patient, name: e.target.value })}
            className="mt-1 block w-full border rounded-lg px-3 py-2 min-h-touch"
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Email</span>
          <input
            type="email"
            value={patient.email}
            onChange={(e) => onPatientChange({ ...patient, email: e.target.value })}
            className="mt-1 block w-full border rounded-lg px-3 py-2 min-h-touch"
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Phone (optional)</span>
          <input
            type="tel"
            value={patient.phone}
            onChange={(e) => onPatientChange({ ...patient, phone: e.target.value })}
            className="mt-1 block w-full border rounded-lg px-3 py-2 min-h-touch"
          />
        </label>
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
          onClick={onConfirm}
          disabled={!patient.name?.trim() || !patient.email?.trim()}
          className="min-h-touch px-4 rounded-lg bg-medical text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirm booking
        </button>
      </div>
    </div>
  );
}
