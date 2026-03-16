import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { FaStethoscope } from 'react-icons/fa'

const Footer = () => {
  const quickLinks = [
    { name: 'Find Doctors', path: '/doctors' },
    { name: 'Book Appointment', path: '/booking/1' },
    { name: 'Medical Records', path: '/records' },
    { name: 'About Us', path: '/' },
  ]

  const specialties = [
    'General Medicine',
    'Cardiology',
    'Dermatology',
    'Pediatrics',
    'Orthopedics',
    'Neurology',
  ]

  const socialLinks = [
    { icon: <FiFacebook />, url: '#', label: 'Facebook' },
    { icon: <FiTwitter />, url: '#', label: 'Twitter' },
    { icon: <FiInstagram />, url: '#', label: 'Instagram' },
    { icon: <FiLinkedin />, url: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-primary-600 rounded-lg">
                <FaStethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Health<span className="text-primary-400">Care</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Your trusted platform for online doctor consultations and appointments. 
              Healthcare made accessible and convenient.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-white font-semibold mb-4">Specialties</h3>
            <ul className="space-y-2">
              {specialties.map((specialty) => (
                <li key={specialty}>
                  <span className="text-sm">
                    {specialty}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">123 Healthcare Street, Medical District, City 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm hover:text-primary-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:support@healthcare.com" className="text-sm hover:text-primary-400 transition-colors">
                  support@healthcare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2026 HealthCare. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
