const router = require('express').Router();
const Event = require('../models/event');

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