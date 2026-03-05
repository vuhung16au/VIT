import { useParams, Link } from 'react-router-dom'
import { FiStar, FiMapPin, FiAward, FiClock, FiVideo, FiCalendar, FiDollarSign } from 'react-icons/fi'

const DoctorProfile = () => {
  const { id } = useParams()

  // Mock data - in real app, fetch based on id
  const doctor = {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    qualifications: ['MBBS', 'MD - Cardiology', 'FACC'],
    experience: '15 years',
    rating: 4.9,
    reviews: 234,
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    fee: '$150',
    videoAvailable: true,
    languages: ['English', 'Spanish'],
    about: 'Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating cardiovascular conditions. She specializes in preventive cardiology, heart disease management, and interventional procedures. Dr. Johnson is committed to providing personalized care and building long-term relationships with her patients.',
    education: [
      { degree: 'MBBS', institution: 'Harvard Medical School', year: '2006' },
      { degree: 'MD - Cardiology', institution: 'Johns Hopkins University', year: '2010' },
    ],
    awards: [
      'Best Cardiologist Award 2022',
      'Excellence in Patient Care 2021',
      'Research Publication Award 2020',
    ],
    expertise: [
      'Heart Disease',
      'Hypertension',
      'Arrhythmia',
      'Preventive Cardiology',
      'Coronary Artery Disease',
      'Heart Failure',
    ],
  }

  const reviews = [
    {
      name: 'John Doe',
      rating: 5,
      date: 'March 1, 2026',
      comment: 'Dr. Johnson is exceptional! She took the time to explain everything clearly and made me feel comfortable. Highly recommend!'
    },
    {
      name: 'Jane Smith',
      rating: 5,
      date: 'February 28, 2026',
      comment: 'Very professional and caring. The video consultation was smooth and convenient. Great experience overall.'
    },
    {
      name: 'Mike Brown',
      rating: 4,
      date: 'February 25, 2026',
      comment: 'Knowledgeable doctor with great bedside manner. Wait time was a bit long but worth it.'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Doctor Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom py-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Doctor Image and Basic Info */}
            <div className="md:col-span-1">
              <div className="card p-6 sticky top-24">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full aspect-square object-cover rounded-xl mb-4"
                />
                {doctor.videoAvailable && (
                  <div className="bg-medical/10 text-medical px-4 py-2 rounded-lg flex items-center justify-center space-x-2 mb-4">
                    <FiVideo className="w-5 h-5" />
                    <span className="font-medium">Video Consultation Available</span>
                  </div>
                )}
                <Link
                  to={`/booking/${doctor.id}`}
                  className="btn btn-primary w-full flex items-center justify-center space-x-2 mb-3"
                >
                  <FiCalendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </Link>
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Consultation Fee</span>
                    <span className="text-xl font-bold text-gray-900">{doctor.fee}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Details */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h1>
                <p className="text-xl text-primary-600 font-medium mb-2">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600">
                  {doctor.qualifications.join(', ')}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="card p-4">
                  <div className="flex items-center space-x-2 text-yellow-500 mb-2">
                    <FiStar className="w-5 h-5 fill-current" />
                    <span className="text-2xl font-bold">{doctor.rating}</span>
                  </div>
                  <p className="text-sm text-gray-600">{doctor.reviews} reviews</p>
                </div>
                <div className="card p-4">
                  <div className="flex items-center space-x-2 text-primary-600 mb-2">
                    <FiClock className="w-5 h-5" />
                    <span className="text-2xl font-bold">{doctor.experience}</span>
                  </div>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
                <div className="card p-4">
                  <div className="flex items-center space-x-2 text-medical mb-2">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-gray-900 font-medium">{doctor.location}</p>
                </div>
                <div className="card p-4">
                  <div className="flex items-center space-x-2 text-primary-600 mb-2">
                    <FiAward className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-gray-600">Board Certified</p>
                </div>
              </div>

              {/* About */}
              <div className="card p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed">{doctor.about}</p>
              </div>

              {/* Expertise */}
              <div className="card p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Areas of Expertise</h2>
                <div className="flex flex-wrap gap-3">
                  {doctor.expertise.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="card p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
                <div className="space-y-4">
                  {doctor.education.map((edu, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <FiAward className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div className="card p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Awards & Recognition</h2>
                <ul className="space-y-2">
                  {doctor.awards.map((award, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div className="card p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Languages Spoken</h2>
                <div className="flex flex-wrap gap-3">
                  {doctor.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="card p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Patient Reviews</h2>
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        <div className="flex items-center space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DoctorProfile
