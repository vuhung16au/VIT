import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Book a doctor consultation</h1>
      <p className="text-gray-600 mb-6">
        Choose your reason for visit, pick a specialist, select a time, and confirm. You can have an online video consultation or an in-person appointment.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          to="/book"
          className="min-h-touch inline-flex items-center justify-center px-6 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
        >
          Book an appointment
        </Link>
        <Link
          to="/appointments"
          className="min-h-touch inline-flex items-center justify-center px-6 rounded-lg border border-gray-300 bg-white font-medium hover:bg-gray-50 transition-colors"
        >
          My appointments
        </Link>
      </div>
    </div>
  );
}
