import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiMapPin, FiStar, FiVideo, FiCalendar } from 'react-icons/fi'

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')

  const specialties = [
    'All Specialties',
    'General Medicine',
    'Cardiology',
    'Dermatology',
    'Pediatrics',
    'Orthopedics',
    'Neurology',
    'Ophthalmology',
    'Dentistry',
  ]

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      experience: '15 years',
      rating: 4.9,
      reviews: 234,
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
      fee: '$150',
      videoAvailable: true,
      nextAvailable: 'Today, 2:00 PM'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Dermatology',
      experience: '12 years',
      rating: 4.8,
      reviews: 189,
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
      fee: '$120',
      videoAvailable: true,
      nextAvailable: 'Tomorrow, 10:00 AM'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      experience: '10 years',
      rating: 4.9,
      reviews: 312,
      location: 'Chicago, IL',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
      fee: '$130',
      videoAvailable: true,
      nextAvailable: 'Today, 4:30 PM'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedics',
      experience: '18 years',
      rating: 4.7,
      reviews: 156,
      location: 'Houston, TX',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
      fee: '$180',
      videoAvailable: false,
      nextAvailable: 'Tomorrow, 2:00 PM'
    },
    {
      id: 5,
      name: 'Dr. Lisa Anderson',
      specialty: 'Neurology',
      experience: '14 years',
      rating: 4.8,
      reviews: 201,
      location: 'Boston, MA',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      fee: '$160',
      videoAvailable: true,
      nextAvailable: 'Today, 5:00 PM'
    },
    {
      id: 6,
      name: 'Dr. Robert Kim',
      specialty: 'General Medicine',
      experience: '8 years',
      rating: 4.6,
      reviews: 143,
      location: 'Seattle, WA',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
      fee: '$100',
      videoAvailable: true,
      nextAvailable: 'Today, 3:00 PM'
    },
  ]

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === 'all' || 
                            doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase()
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Find Your Doctor
          </h1>
          <p className="text-gray-600">
            Browse through our network of {doctors.length}+ certified healthcare professionals
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white shadow-sm sticky top-16 md:top-20 z-40">
        <div className="container-custom py-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-12"
                aria-label="Search doctors"
              />
            </div>

            {/* Specialty Filter */}
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="input"
              aria-label="Filter by specialty"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty === 'All Specialties' ? 'all' : specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredDoctors.length}</span> doctors
            </p>
          </div>

          {filteredDoctors.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="card overflow-hidden group">
                  {/* Doctor Image */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {doctor.videoAvailable && (
                      <div className="absolute top-4 right-4 bg-medical text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <FiVideo className="w-4 h-4" />
                        <span>Video</span>
                      </div>
                    )}
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-primary-600 font-medium">{doctor.specialty}</p>
                      <p className="text-sm text-gray-600">{doctor.experience} experience</p>
                    </div>

                    <div className="flex items-center justify-between py-3 border-y border-gray-100">
                      <div className="flex items-center space-x-1">
                        <FiStar className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="font-semibold">{doctor.rating}</span>
                        <span className="text-gray-600 text-sm">({doctor.reviews} reviews)</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">{doctor.fee}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <FiMapPin className="w-4 h-4 flex-shrink-0" />
                        <span>{doctor.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <FiCalendar className="w-4 h-4 flex-shrink-0" />
                        <span>Next available: {doctor.nextAvailable}</span>
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-2">
                      <Link
                        to={`/doctors/${doctor.id}`}
                        className="flex-1 btn btn-secondary text-sm py-2"
                      >
                        View Profile
                      </Link>
                      <Link
                        to={`/booking/${doctor.id}`}
                        className="flex-1 btn btn-primary text-sm py-2"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                No doctors found matching your criteria. Please try a different search.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Doctors
