import express from 'express';
import Doctor from '../models/Doctor.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { specialty, reason, consultationType } = req.query;
    const filter = {};
    if (specialty) filter.specialty = new RegExp(specialty, 'i');
    if (reason) filter.reasonTags = new RegExp(reason, 'i');
    if (consultationType && consultationType !== 'both') {
      filter.$or = [
        { consultationType },
        { consultationType: 'both' },
      ];
    }
    const doctors = await Doctor.find(filter);
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
