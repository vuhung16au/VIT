import { useState, useEffect } from 'react';
import ReasonStep from '../components/ReasonStep';
import SpecialistStep from '../components/SpecialistStep';
import DateTimeStep from '../components/DateTimeStep';
import ConfirmStep from '../components/ConfirmStep';

const STEPS = ['reason', 'specialist', 'datetime', 'confirm'];

export default function Booking() {
  const [step, setStep] = useState(0);
  const [reason, setReason] = useState('');
  const [doctor, setDoctor] = useState(null);
  const [slot, setSlot] = useState(null);
  const [patient, setPatient] = useState({ name: '', email: '', phone: '' });
  const [confirmed, setConfirmed] = useState(false);

  const currentStepId = STEPS[step];
  const canNext = {
    reason: !!reason,
    specialist: !!doctor,
    datetime: !!slot,
    confirm: true,
  };

  const goNext = () => {
    if (step < STEPS.length - 1) setStep((s) => s + 1);
  };

  const goBack = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  if (confirmed) {
    return (
      <div className="rounded-lg bg-green-50 border border-medical p-6 text-center">
        <h2 className="text-xl font-semibold text-medical-dark mb-2">Booking confirmed</h2>
        <p className="text-gray-700 mb-4">
          Your appointment with {doctor?.name} is scheduled. You will receive a confirmation by email.
        </p>
        <a href="/appointments" className="text-primary-600 font-medium hover:underline">
          View My appointments
        </a>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Book an appointment</h1>
      <div className="flex gap-2 mb-6">
        {STEPS.map((s, i) => (
          <span
            key={s}
            className={`flex-1 h-2 rounded ${
              i <= step ? 'bg-primary-500' : 'bg-gray-200'
            }`}
            aria-hidden
          />
        ))}
      </div>

      {currentStepId === 'reason' && (
        <ReasonStep
          value={reason}
          onChange={setReason}
          onNext={goNext}
          onBack={goBack}
          canNext={canNext.reason}
        />
      )}

      {currentStepId === 'specialist' && (
        <SpecialistStep
          reason={reason}
          selected={doctor}
          onSelect={setDoctor}
          onNext={goNext}
          onBack={goBack}
          canNext={!!doctor}
        />
      )}

      {currentStepId === 'datetime' && (
        <DateTimeStep
          doctorId={doctor?.id}
          selected={slot}
          onSelect={setSlot}
          onNext={goNext}
          onBack={goBack}
          canNext={!!slot}
        />
      )}

      {currentStepId === 'confirm' && (
        <ConfirmStep
          reason={reason}
          doctor={doctor}
          slot={slot}
          patient={patient}
          onPatientChange={setPatient}
          onConfirm={async () => {
            const res = await fetch('/api/appointments', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                patientName: patient.name,
                patientEmail: patient.email,
                patientPhone: patient.phone,
                doctorId: doctor.id,
                reason,
                date: slot,
                consultationType: 'video',
              }),
            });
            if (res.ok) setConfirmed(true);
            else alert('Booking failed. Please try again.');
          }}
          onBack={goBack}
        />
      )}
    </div>
  );
}
