import { useState } from 'react';

const initialSlots = [
  { id: '1', doctor: 'Dr. Smith', time: 'Mon 2 PM', available: true },
  { id: '2', doctor: 'Dr. Smith', time: 'Mon 3 PM', available: true },
  { id: '3', doctor: 'Dr. Jones', time: 'Tue 10 AM', available: true },
  { id: '4', doctor: 'Dr. Jones', time: 'Tue 11 AM', available: true },
];

export default function Manipulating() {
  const [slots, setSlots] = useState(initialSlots);
  const [booked, setBooked] = useState(null);

  const handleBook = (slot) => {
    if (!slot.available) return;
    setBooked(slot);
    setSlots((current) =>
      current.map((item) => (item.id === slot.id ? { ...item, available: false } : item)),
    );
  };

  return (
    <div className="min-h-screen rounded-[2rem] bg-gradient-to-br from-purple-50 via-pink-50 to-white px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
          MANIPULATING: Direct Manipulation Calendar
        </h1>

        {booked && (
          <div className="mb-6 rounded-2xl border border-green-300 bg-green-100 p-4 text-green-800">
            ✓ Booked: {booked.doctor} on {booked.time}
          </div>
        )}

        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="grid gap-6 md:grid-cols-2">
            {['Dr. Smith', 'Dr. Jones'].map((doctor) => (
              <div key={doctor}>
                <h2 className="mb-4 text-lg font-bold text-gray-900">{doctor}</h2>
                <div className="space-y-3">
                  {slots
                    .filter((slot) => slot.doctor === doctor)
                    .map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => handleBook(slot)}
                        disabled={!slot.available}
                        className={`w-full rounded-2xl border-2 p-4 text-left transition-all ${
                          slot.available
                            ? 'border-purple-300 hover:-translate-y-0.5 hover:border-purple-600 hover:shadow-lg'
                            : 'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400'
                        }`}
                      >
                        <p className="font-semibold">{slot.time}</p>
                        <p className="text-sm">
                          {slot.available ? 'Available to book' : 'Already booked'}
                        </p>
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-5 text-sm shadow-md">
          <h2 className="mb-2 font-bold text-gray-900">Characteristics</h2>
          <ul className="ml-5 list-disc space-y-2 text-gray-700">
            <li>Visual representation of schedule data</li>
            <li>Direct manipulation through tapping and selecting</li>
            <li>Immediate state change after booking</li>
            <li>Good when users benefit from seeing options spatially</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
