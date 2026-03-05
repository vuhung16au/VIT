import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiCalendar, FiUsers, FiFileText, FiVideo } from 'react-icons/fi'
import { FaStethoscope } from 'react-icons/fa'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/', icon: <FaStethoscope /> },
    { name: 'Find Doctors', path: '/doctors', icon: <FiUsers /> },
    { name: 'My Records', path: '/records', icon: <FiFileText /> },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            aria-label="HealthCare Home"
          >
            <div className="p-2 bg-primary-600 rounded-lg group-hover:bg-primary-700 transition-colors">
              <FaStethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              Health<span className="text-primary-600">Care</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
            <Link
              to="/booking/1"
              className="btn btn-primary flex items-center space-x-2"
            >
              <FiCalendar className="w-5 h-5" />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link
                to="/booking/1"
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-primary w-full flex items-center justify-center space-x-2 mt-4"
              >
                <FiCalendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
