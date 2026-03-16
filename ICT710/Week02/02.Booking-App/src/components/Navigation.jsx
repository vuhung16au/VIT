import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const navClass = (path) =>
    `min-h-touch inline-flex items-center px-4 rounded-md font-medium transition-colors ${
      location.pathname === path
        ? 'bg-primary-600 text-white'
        : 'text-gray-700 hover:bg-primary-100'
    }`;

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 flex items-center gap-2 h-14 max-w-4xl">
        <Link to="/" className="font-semibold text-primary-700 mr-4">
          Doctor Booking
        </Link>
        <Link to="/" className={navClass('/')}>
          Home
        </Link>
        <Link to="/book" className={navClass('/book')}>
          Book appointment
        </Link>
        <Link to="/appointments" className={navClass('/appointments')}>
          My appointments
        </Link>
      </div>
    </nav>
  );
}
