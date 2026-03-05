import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiCalendar, FiClock, FiVideo, FiMapPin, FiUser, FiMail, FiPhone, FiCheckCircle } from 'react-icons/fi'

const Booking = () => {
  const { doctorId } = useParams()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    appointmentType: 'video',
    date: '',
    time: '',
    symptoms: '',
    patientName: '',
    patientEmail: '',
    patientPhone: '',
  })

  // Mock doctor data
  const doctor = {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    fee: '$150',
  }

  const availableDates = [
    { date: '2026-03-05', label: 'Today' },
    { date: '2026-03-06', label: 'Tomorrow' },
    { date: '2026-03-07', label: 'Fri, Mar 7' },
    { date: '2026-03-08', label: 'Sat, Mar 8' },
    { date: '2026-03-09', label: 'Sun, Mar 9' },
  ]

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ]

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit booking
      console.log('Booking submitted:', bookingData)
      setStep(4)
    }
  }

  const isStepValid = () => {
    if (step === 1) {
      return bookingData.appointmentType && bookingData.date && bookingData.time
    }
    if (step === 2) {
      return bookingData.symptoms.trim().length > 0
    }
    if (step === 3) {
      return bookingData.patientName && bookingData.patientEmail && bookingData.patientPhone
    }
    return false
  }

  if (step === 4) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center section-padding">
        <div className="container-custom max-w-2xl">
          <div className="card p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-medical/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiCheckCircle className="w-12 h-12 text-medical" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your appointment with {doctor.name} has been successfully booked.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
              <h2 className="font-semibold text-gray-900 mb-4">Appointment Details</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiCalendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{bookingData.date}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiClock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{bookingData.time}</span>
                </div>
                <div className="flex items-center space-x-3">
                  {bookingData.appointmentType === 'video' ? (
                    <FiVideo className="w-5 h-5 text-gray-400" />
                  ) : (
                    <FiMapPin className="w-5 h-5 text-gray-400" />
                  )}
                  <span className="text-gray-700">
                    {bookingData.appointmentType === 'video' ? 'Video Consultation' : 'In-Person Visit'}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-8">
              A confirmation email has been sent to <strong>{bookingData.patientEmail}</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/records')}
                className="btn btn-primary"
              >
                View My Appointments
              </button>
              <button
                onClick={() => navigate('/')}
                className="btn btn-secondary"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    s === step ? 'bg-primary-600 text-white' : s < step ? 'bg-medical text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {s < step ? <FiCheckCircle className="w-6 h-6" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={`flex-1 h-1 mx-2 ${s < step ? 'bg-medical' : 'bg-gray-200'}`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Select Slot</span>
              <span>Symptoms</span>
              <span>Patient Info</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Doctor Card */}
            <div className="md:col-span-1">
              <div className="card p-6 sticky top-24">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full aspect-square object-cover rounded-xl mb-4"
                />
                <h3 className="font-semibold text-gray-900 text-lg mb-1">{doctor.name}</h3>
                <p className="text-primary-600 mb-4">{doctor.specialty}</p>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Consultation Fee</span>
                    <span className="text-xl font-bold text-gray-900">{doctor.fee}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="card p-6 md:p-8">
                {/* Step 1: Select Appointment Type, Date & Time */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Select Appointment Slot</h2>

                    {/* Appointment Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Consultation Type
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setBookingData({...bookingData, appointmentType: 'video'})}
                          className={`p-4 border-2 rounded-xl transition-all ${
                            bookingData.appointmentType === 'video'
                              ? 'border-primary-600 bg-primary-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <FiVideo className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                          <p className="font-medium text-gray-900">Video Call</p>
                          <p className="text-sm text-gray-600">Online consultation</p>
                        </button>
                        <button
                          type="button"
                          onClick={() => setBookingData({...bookingData, appointmentType: 'in-person'})}
                          className={`p-4 border-2 rounded-xl transition-all ${
                            bookingData.appointmentType === 'in-person'
                              ? 'border-primary-600 bg-primary-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <FiMapPin className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                          <p className="font-medium text-gray-900">In-Person</p>
                          <p className="text-sm text-gray-600">Visit clinic</p>
                        </button>
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Select Date
                      </label>
                      <div className="grid grid-cols-5 gap-2">
                        {availableDates.map((d) => (
                          <button
                            key={d.date}
                            type="button"
                            onClick={() => setBookingData({...bookingData, date: d.date})}
                            className={`p-3 border-2 rounded-lg transition-all text-center ${
                              bookingData.date === d.date
                                ? 'border-primary-600 bg-primary-50 text-primary-600'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <p className="font-medium text-sm">{d.label}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    {bookingData.date && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Select Time
                        </label>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setBookingData({...bookingData, time})}
                              className={`p-3 border-2 rounded-lg transition-all ${
                                bookingData.time === time
                                  ? 'border-primary-600 bg-primary-50 text-primary-600 font-medium'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 2: Symptoms */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Tell us about your symptoms</h2>
                    <div>
                      <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
                        Describe your symptoms or reason for consultation
                      </label>
                      <textarea
                        id="symptoms"
                        name="symptoms"
                        value={bookingData.symptoms}
                        onChange={handleInputChange}
                        rows="6"
                        className="input"
                        placeholder="Please describe your symptoms in detail..."
                        required
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        This information helps the doctor prepare for your consultation.
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 3: Patient Information */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Patient Information</h2>
                    <div>
                      <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="patientName"
                          name="patientName"
                          value={bookingData.patientName}
                          onChange={handleInputChange}
                          className="input pl-12"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="patientEmail" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          id="patientEmail"
                          name="patientEmail"
                          value={bookingData.patientEmail}
                          onChange={handleInputChange}
                          className="input pl-12"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="patientPhone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          id="patientPhone"
                          name="patientPhone"
                          value={bookingData.patientPhone}
                          onChange={handleInputChange}
                          className="input pl-12"
                          placeholder="+1 (234) 567-890"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 pt-6 mt-6 border-t border-gray-200">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="btn btn-secondary flex-1"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={!isStepValid()}
                    className="btn btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {step === 3 ? 'Confirm Booking' : 'Continue'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
