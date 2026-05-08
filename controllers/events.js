const router = require('express').Router();
const Event = require('../models/event');

// Index GET /events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find({})
      .populate('creator', 'username')
      .sort({ date: 1 });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

// Create POST /events
router.post('/', async (req, res) => {
  try {
    const event = await Event.create({
      ...req.body,
      creator: req.user._id,
    });

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

module.exports = router;