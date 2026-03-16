import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  clinic: { type: String, default: '' },
  consultationType: { type: String, enum: ['video', 'in-person', 'both'], default: 'both' },
  languages: [{ type: String }],
  reasonTags: [{ type: String }],
});

export default mongoose.model('Doctor', doctorSchema);
