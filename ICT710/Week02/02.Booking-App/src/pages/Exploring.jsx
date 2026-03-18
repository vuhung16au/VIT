import { useState } from 'react';

const doctors = [
  {
    id: '1',
    name: 'Dr. Sarah Smith',
    specialty: 'Cardiology',
    rating: 4.8,
    image: '👩‍⚕️',
    bio: '15 years of experience helping patients manage heart health.',
  },
  {
    id: '2',
    name: 'Dr. Mike Jones',
    specialty: 'Pediatrics',
    rating: 4.9,
    image: '👨‍⚕️',
    bio: 'Specialized in child development and family-centered care.',
  },
  {
    id: '3',
    name: 'Dr. Lisa Chen',
    specialty: 'Dermatology',
    rating: 4.7,
    image: '👩‍⚕️',
    bio: 'Experienced in skin health, prevention, and long-term treatment plans.',
  },
];

export default function Exploring() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen rounded-[2rem] bg-gradient-to-br from-orange-50 via-yellow-50 to-white px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
          EXPLORING: Browse and Discover Doctors
        </h1>

        <div className="grid gap-6 md:grid-cols-3">
          {doctors.map((doctor) => (
            <button
              key={doctor.id}
              type="button"
              onClick={() => setSelected(doctor)}
              className="rounded-3xl bg-white p-6 text-left shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 text-center text-6xl" aria-hidden="true">
                {doctor.image}
              </div>
              <h2 className="mb-2 text-xl font-bold text-gray-900">{doctor.name}</h2>
              <p className="mb-2 text-gray-600">{doctor.specialty}</p>
              <div className="mb-3 flex items-center gap-1 text-sm">
                <span className="text-yellow-500">★</span>
                <span className="font-semibold text-gray-900">{doctor.rating}</span>
              </div>
              <p className="text-sm text-gray-600">{doctor.bio}</p>
            </button>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">{selected.name}</h2>
              <p className="mb-2 text-lg text-orange-700">{selected.specialty}</p>
              <p className="mb-6 text-gray-600">{selected.bio}</p>
              <button
                type="button"
                className="w-full rounded-xl bg-orange-600 py-3 font-semibold text-white transition-colors hover:bg-orange-700"
              >
                Book Appointment
              </button>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="mt-3 w-full rounded-xl py-3 font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 rounded-2xl bg-white p-5 text-sm shadow-md">
          <h2 className="mb-2 font-bold text-gray-900">Characteristics</h2>
          <ul className="ml-5 list-disc space-y-2 text-gray-700">
            <li>Supports browsing without a fixed path in mind</li>
            <li>Uses rich visual cues like ratings and bios</li>
            <li>Encourages discovery before commitment</li>
            <li>Helpful for exploration, but less efficient for exact known tasks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
