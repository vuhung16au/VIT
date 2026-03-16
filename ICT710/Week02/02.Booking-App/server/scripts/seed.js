import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Doctor from '../models/Doctor.js';

dotenv.config();
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/doctor-booking';

const doctors = [
  { name: 'Dr. Sarah Chen', specialty: 'General Practice', clinic: 'City Medical Centre', consultationType: 'both', languages: ['English', 'Mandarin'], reasonTags: ['general', 'follow-up', 'check-up'] },
  { name: 'Dr. James Wilson', specialty: 'Cardiology', clinic: 'Heart Care Clinic', consultationType: 'video', languages: ['English'], reasonTags: ['heart', 'blood pressure', 'follow-up'] },
  { name: 'Dr. Emma Liu', specialty: 'Dermatology', clinic: 'Skin & Wellness', consultationType: 'both', languages: ['English', 'Cantonese'], reasonTags: ['skin', 'rash', 'follow-up'] },
  { name: 'Dr. Michael Brown', specialty: 'General Practice', clinic: 'City Medical Centre', consultationType: 'in-person', languages: ['English'], reasonTags: ['general', 'referral'] },
];

async function seed() {
  await mongoose.connect(mongoUri);
  await Doctor.deleteMany({});
  await Doctor.insertMany(doctors);
  console.log('Seeded doctors:', doctors.length);
  process.exit(0);
}

seed().catch((e) => { console.error(e); process.exit(1); });
