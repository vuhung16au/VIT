import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  patientEmail: { type: String, required: true },
  patientPhone: { type: String, default: '' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  reason: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['scheduled', 'completed', 'cancelled', 'no-show'], default: 'scheduled' },
  consultationType: { type: String, enum: ['video', 'in-person'], default: 'video' },
});

export default mongoose.model('Appointment', appointmentSchema);
