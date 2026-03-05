import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCalendar, FiClock, FiFileText, FiDownload, FiVideo, FiMapPin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

const MedicalRecords = () => {
  const [activeTab, setActiveTab] = useState('appointments')

  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2026-03-05',
      time: '2:00 PM',
      type: 'video',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Dermatology',
      date: '2026-02-28',
      time: '10:00 AM',
      type: 'in-person',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      date: '2026-02-15',
      time: '4:30 PM',
      type: 'video',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80'
    },
  ]

  const prescriptions = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      date: '2026-02-28',
      medication: 'Lisinopril 10mg',
      dosage: 'Once daily',
      duration: '30 days',
      refills: 2
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      date: '2026-02-15',
      medication: 'Hydrocortisone Cream 1%',
      dosage: 'Apply twice daily',
      duration: '14 days',
      refills: 0
    },
  ]

  const reports = [
    {
      id: 1,
      name: 'Blood Test Results',
      doctor: 'Dr. Sarah Johnson',
      date: '2026-02-28',
      type: 'Lab Report',
      size: '245 KB'
    },
    {
      id: 2,
      name: 'ECG Report',
      doctor: 'Dr. Sarah Johnson',
      date: '2026-02-15',
      type: 'Diagnostic Report',
      size: '1.2 MB'
    },
    {
      id: 3,
      name: 'Skin Biopsy Results',
      doctor: 'Dr. Michael Chen',
      date: '2026-01-20',
      type: 'Lab Report',
      size: '512 KB'
    },
  ]

  const getStatusBadge = (status) => {
    if (status === 'upcoming') {
      return (
        <span className="inline-flex items-center space-x-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
          <FiClock className="w-4 h-4" />
          <span>Upcoming</span>
        </span>
      )
    }
    if (status === 'completed') {
      return (
        <span className="inline-flex items-center space-x-1 px-3 py-1 bg-medical/10 text-medical-dark rounded-full text-sm font-medium">
          <FiCheckCircle className="w-4 h-4" />
          <span>Completed</span>
        </span>
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            My Medical Records
          </h1>
          <p className="text-gray-600">
            View your appointments, prescriptions, and medical reports
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-40">
        <div className="container-custom">
          <div className="flex space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('appointments')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'appointments'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Appointments
            </button>
            <button
              onClick={() => setActiveTab('prescriptions')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'prescriptions'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Prescriptions
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'reports'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Reports
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <div className="space-y-4">
              {appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <div key={appointment.id} className="card p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start space-x-4">
                        <img
                          src={appointment.image}
                          alt={appointment.doctor}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg mb-1">
                            {appointment.doctor}
                          </h3>
                          <p className="text-primary-600 mb-2">{appointment.specialty}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <FiCalendar className="w-4 h-4" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <FiClock className="w-4 h-4" />
                              <span>{appointment.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {appointment.type === 'video' ? (
                                <>
                                  <FiVideo className="w-4 h-4" />
                                  <span>Video Consultation</span>
                                </>
                              ) : (
                                <>
                                  <FiMapPin className="w-4 h-4" />
                                  <span>In-Person Visit</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-3">
                        {getStatusBadge(appointment.status)}
                        {appointment.status === 'upcoming' && (
                          <button className="btn btn-primary text-sm py-2 px-4">
                            Join Consultation
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="card p-12 text-center">
                  <FiCalendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No appointments yet
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Book your first appointment to get started
                  </p>
                  <Link to="/doctors" className="btn btn-primary inline-flex items-center space-x-2">
                    <FiCalendar className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Prescriptions Tab */}
          {activeTab === 'prescriptions' && (
            <div className="space-y-4">
              {prescriptions.length > 0 ? (
                prescriptions.map((prescription) => (
                  <div key={prescription.id} className="card p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">
                          {prescription.medication}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Prescribed by <span className="font-medium">{prescription.doctor}</span>
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Dosage</p>
                            <p className="font-medium text-gray-900">{prescription.dosage}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Duration</p>
                            <p className="font-medium text-gray-900">{prescription.duration}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Date Prescribed</p>
                            <p className="font-medium text-gray-900">{prescription.date}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Refills Remaining</p>
                            <p className="font-medium text-gray-900">{prescription.refills}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <button className="btn btn-primary text-sm py-2 px-4 whitespace-nowrap">
                          Request Refill
                        </button>
                        <button className="btn btn-secondary text-sm py-2 px-4 whitespace-nowrap flex items-center justify-center space-x-2">
                          <FiDownload className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="card p-12 text-center">
                  <FiFileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No prescriptions
                  </h3>
                  <p className="text-gray-600">
                    Your prescriptions will appear here after consultations
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="space-y-4">
              {reports.length > 0 ? (
                reports.map((report) => (
                  <div key={report.id} className="card p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary-100 rounded-lg">
                          <FiFileText className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg mb-1">
                            {report.name}
                          </h3>
                          <p className="text-gray-600 mb-2">
                            {report.doctor}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span>{report.type}</span>
                            <span>•</span>
                            <span>{report.date}</span>
                            <span>•</span>
                            <span>{report.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn btn-secondary text-sm py-2 px-4 flex items-center space-x-2">
                          <FiDownload className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="card p-12 text-center">
                  <FiFileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No reports available
                  </h3>
                  <p className="text-gray-600">
                    Your test results and medical reports will appear here
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default MedicalRecords
