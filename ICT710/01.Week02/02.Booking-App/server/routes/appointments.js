import express from 'express';
import Appointment from '../models/Appointment.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { email } = req.query;
    const filter = email ? { patientEmail: email } : {};
    const appointments = await Appointment.find(filter)
      .populate('doctorId')
      .sort({ date: 1 });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { patientName, patientEmail, patientPhone, doctorId, reason, date, consultationType } = req.body;
    const appointment = new Appointment({
      patientName,
      patientEmail,
      patientPhone: patientPhone || '',
      doctorId,
      reason,
      date: new Date(date),
      consultationType: consultationType || 'video',
    });
    await appointment.save();
    await appointment.populate('doctorId');
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { date, status } = req.body;
    const update = {};
    if (date) update.date = new Date(date);
    if (status) update.status = status;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true }
    ).populate('doctorId');
    if (!appointment) return res.status(404).json({ error: 'Appointment not found' });
    res.json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/slots/:doctorId', async (req, res) => {
  try {
    const { doctorId } = req.params;
    const { date } = req.query;
    const start = date ? new Date(date) : new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 14);
    const booked = await Appointment.find({
      doctorId,
      date: { $gte: start, $lt: end },
      status: 'scheduled',
    }).select('date');
    const bookedSet = new Set(booked.map((a) => {
      const d = new Date(a.date);
      d.setMinutes(0, 0, 0);
      return d.toISOString();
    }));
    const slots = [];
    for (let i = 0; i < 14; i++) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      for (let h = 9; h <= 16; h++) {
        const slot = new Date(d);
        slot.setHours(h, 0, 0, 0);
        if (slot > new Date() && !bookedSet.has(slot.toISOString())) {
          slots.push(slot.toISOString());
        }
      }
    }
    res.json(slots);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
