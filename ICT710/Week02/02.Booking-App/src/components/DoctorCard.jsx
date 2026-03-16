export default function DoctorCard({ doctor, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left min-h-touch flex items-center gap-4 p-4 rounded-lg border-2 transition-colors ${
        selected ? 'border-primary-600 bg-primary-50' : 'border-gray-200 hover:border-primary-300'
      }`}
    >
      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
        {doctor.name?.charAt(0) || '?'}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-gray-900">{doctor.name}</div>
        <div className="text-sm text-gray-600">{doctor.specialty}</div>
        {doctor.clinic && (
          <div className="text-sm text-gray-500">at {doctor.clinic}</div>
        )}
        {doctor.consultationType && (
          <span className="text-xs text-gray-500 capitalize">{doctor.consultationType}</span>
        )}
      </div>
      {selected && (
        <span className="text-primary-600 font-medium" aria-hidden>✓</span>
      )}
    </button>
  );
}
