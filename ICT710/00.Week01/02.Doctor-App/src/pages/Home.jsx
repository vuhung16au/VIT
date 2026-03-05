import { Link } from 'react-router-dom'
import { FiCalendar, FiVideo, FiUsers, FiClock, FiShield, FiStar } from 'react-icons/fi'

const Home = () => {
  const features = [
    {
      icon: <FiVideo className="w-8 h-8" />,
      title: 'Video Consultation',
      description: 'Connect with doctors through secure video calls from the comfort of your home.'
    },
    {
      icon: <FiCalendar className="w-8 h-8" />,
      title: 'Easy Booking',
      description: 'Book appointments with specialists in just a few clicks, anytime, anywhere.'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Expert Doctors',
      description: 'Access a wide network of certified and experienced healthcare professionals.'
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: '24/7 Availability',
      description: 'Healthcare support available round the clock for your convenience.'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Secure & Private',
      description: 'Your medical data is protected with enterprise-grade security and encryption.'
    },
    {
      icon: <FiStar className="w-8 h-8" />,
      title: 'Top Rated',
      description: 'Highly rated by thousands of satisfied patients across the country.'
    }
  ]

  const specialties = [
    { name: 'General Medicine', count: '120+ Doctors' },
    { name: 'Cardiology', count: '85+ Doctors' },
    { name: 'Dermatology', count: '95+ Doctors' },
    { name: 'Pediatrics', count: '110+ Doctors' },
    { name: 'Orthopedics', count: '75+ Doctors' },
    { name: 'Neurology', count: '60+ Doctors' },
    { name: 'Ophthalmology', count: '70+ Doctors' },
    { name: 'Dentistry', count: '90+ Doctors' },
  ]

  const stats = [
    { value: '500+', label: 'Expert Doctors' },
    { value: '50K+', label: 'Happy Patients' },
    { value: '100K+', label: 'Consultations' },
    { value: '4.8/5', label: 'Rating' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Health, Our Priority
              </h1>
              <p className="text-xl md:text-2xl text-primary-100">
                Book online consultations with certified doctors. Healthcare made easy and accessible.
              </p>
              <p className="text-lg text-primary-200">
                Connect with healthcare professionals through video consultations or book in-person appointments. 
                Get expert medical advice from the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/doctors"
                  className="btn bg-white text-primary-600 hover:bg-gray-100 focus-visible:ring-white inline-flex items-center justify-center space-x-2"
                >
                  <FiUsers className="w-5 h-5" />
                  <span>Find a Doctor</span>
                </Link>
                <Link
                  to="/booking/1"
                  className="btn bg-primary-500 text-white hover:bg-primary-400 focus-visible:ring-white inline-flex items-center justify-center space-x-2"
                >
                  <FiCalendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                  alt="Healthcare professionals"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-medical/10 rounded-lg">
                      <FiVideo className="w-6 h-6 text-medical" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl">1000+</p>
                      <p className="text-sm text-gray-600">Video Consultations Daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HealthCare?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience seamless healthcare with our comprehensive platform designed for your well-being.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 hover:scale-105 transition-transform">
                <div className="p-3 bg-primary-100 text-primary-600 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Specialty
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the right specialist for your healthcare needs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specialties.map((specialty, index) => (
              <Link
                key={index}
                to="/doctors"
                className="card p-6 text-center hover:scale-105 transition-all group"
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {specialty.name}
                </h3>
                <p className="text-sm text-gray-600">{specialty.count}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/doctors" className="btn btn-primary">
              View All Specialties
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Book your first consultation today and experience quality healthcare at your fingertips.
          </p>
          <Link
            to="/doctors"
            className="btn bg-white text-primary-600 hover:bg-gray-100 focus-visible:ring-white inline-flex items-center space-x-2"
          >
            <FiCalendar className="w-5 h-5" />
            <span>Book Now</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
