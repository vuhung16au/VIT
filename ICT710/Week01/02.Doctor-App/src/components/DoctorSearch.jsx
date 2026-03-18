'use client'

import { useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const specialties = [
  { value: '', label: 'All Specialties' },
  { value: 'cardiology', label: 'Cardiology' },
  { value: 'dermatology', label: 'Dermatology' },
  { value: 'pediatrics', label: 'Pediatrics' },
  { value: 'orthopedics', label: 'Orthopedics' },
]

const previewLabels = {
  cardiology: 'Cardiology',
  dermatology: 'Dermatology',
  pediatrics: 'Pediatrics',
  orthopedics: 'Orthopedics',
}

const DoctorSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [specialty, setSpecialty] = useState('')

  const previewText = useMemo(() => {
    if (!searchQuery.trim()) {
      return ''
    }

    const specialtyLabel = specialty ? previewLabels[specialty] : ''
    return specialtyLabel
      ? `Searching for: ${searchQuery} in ${specialtyLabel}`
      : `Searching for: ${searchQuery}`
  }, [searchQuery, specialty])

  return (
    <section
      aria-labelledby="doctor-search-heading"
      className="mx-auto max-w-3xl rounded-[2rem] border border-blue-100 bg-white/95 p-8 shadow-2xl shadow-blue-100 backdrop-blur sm:p-10"
    >
      <div className="mb-8 flex items-start justify-between gap-6">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Find care faster
          </p>
          <h3 id="doctor-search-heading" className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Find Your Doctor
          </h3>
        </div>
        <div className="hidden rounded-2xl bg-blue-50 p-4 text-blue-600 sm:block">
          <FiSearch className="h-8 w-8" />
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="searchQuery" className="mb-2 block text-sm font-medium text-slate-700">
            Doctor Name or Condition
          </label>
          <input
            id="searchQuery"
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search for doctor or medical condition..."
            className="input bg-slate-50/80 focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="specialty" className="mb-2 block text-sm font-medium text-slate-700">
            Specialty
          </label>
          <select
            id="specialty"
            value={specialty}
            onChange={(event) => setSpecialty(event.target.value)}
            className="input bg-slate-50/80 focus:bg-white"
          >
            {specialties.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          className="w-full rounded-xl bg-blue-600 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl active:translate-y-0 active:scale-[0.99]"
        >
          Search Doctors
        </button>

        {previewText && (
          <div className="rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-900">
            <span className="font-medium">{previewText}</span>
          </div>
        )}
      </div>
    </section>
  )
}

export default DoctorSearch
