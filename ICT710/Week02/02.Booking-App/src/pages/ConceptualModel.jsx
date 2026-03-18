const entities = [
  {
    name: 'Patient',
    color: 'border-blue-500 text-blue-700',
    attributes: ['Name', 'Email', 'Phone', 'Medical History'],
  },
  {
    name: 'Doctor',
    color: 'border-green-500 text-green-700',
    attributes: ['Name', 'Specialty', 'Availability', 'Rating'],
  },
  {
    name: 'Appointment',
    color: 'border-purple-500 text-purple-700',
    attributes: ['Date', 'Time', 'Status', 'Notes'],
  },
];

const relationships = [
  ['Patient', 'searches for', 'Doctor'],
  ['Patient', 'books', 'Appointment'],
  ['Doctor', 'accepts or rejects', 'Appointment'],
  ['Appointment', 'belongs to', 'Doctor'],
];

const actions = [
  ['Search Doctors', 'Filter by specialty, availability, and rating.'],
  ['View Doctor Profile', 'See bio, reviews, and available times.'],
  ['Select Time Slot', 'Choose from available appointment times.'],
  ['Confirm Booking', 'Review details and finalize the appointment.'],
  ['Receive Confirmation', 'Get a confirmation through email or SMS.'],
  ['Manage Booking', 'Cancel or reschedule existing appointments.'],
];

export default function ConceptualModel() {
  return (
    <div className="min-h-screen rounded-[2rem] bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">Conceptual Model</h1>

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Doctor Booking System: Entities and Relationships
          </h2>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {entities.map((entity) => (
              <div key={entity.name} className={`rounded-2xl border-2 p-5 ${entity.color}`}>
                <h3 className="mb-3 text-lg font-bold">{entity.name}</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  {entity.attributes.map((attribute) => (
                    <li key={attribute}>• {attribute}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t pt-8">
            <h3 className="mb-4 text-xl font-bold text-gray-900">Key Relationships</h3>
            <ul className="space-y-3">
              {relationships.map(([from, type, to]) => (
                <li key={`${from}-${type}-${to}`} className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-blue-600">{from}</span>
                  <span className="text-gray-400">→</span>
                  <span className="italic text-gray-700">{type}</span>
                  <span className="text-gray-400">→</span>
                  <span className="font-semibold text-green-600">{to}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t pt-8">
            <h3 className="mb-4 text-xl font-bold text-gray-900">Core User Actions</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {actions.map(([name, description]) => (
                <div key={name} className="rounded-2xl bg-gray-50 p-4">
                  <h4 className="mb-1 font-semibold text-gray-900">{name}</h4>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
