const router = require('express').Router();
const Rsvp = require('../models/rsvp');

// GET /rsvps/my-rsvps
// Gets all RSVPs for the currently logged-in user.
router.get('/my-rsvps', async (req, res) => {
  try {
    const rsvps = await Rsvp.find({ user: req.user._id })
      .populate('event')
      .sort({ createdAt: -1 });

    res.status(200).json(rsvps);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

// POST /rsvps
// Creates an RSVP for the currently logged-in user.
router.post('/', async (req, res) => {
  try {
    const rsvp = await Rsvp.create({
      event: req.body.event,
      user: req.user._id,
      status: req.body.status || 'going',
    });

    const populatedRsvp = await rsvp.populate('event');

    res.status(201).json(populatedRsvp);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ err: 'You already RSVP’d to this event.' });
    }

    res.status(500).json({ err: error.message });
  }
});

// DELETE /rsvps/:rsvpId
// Cancels only the logged-in user's own RSVP.
router.delete('/:rsvpId', async (req, res) => {
  try {
    const rsvp = await Rsvp.findById(req.params.rsvpId);

    if (!rsvp) {
      return res.status(404).json({ err: 'RSVP not found.' });
    }

    if (!rsvp.user.equals(req.user._id)) {
      return res.status(403).json({ err: 'Not authorized.' });
    }

    await rsvp.deleteOne();

    res.status(200).json({ message: 'RSVP cancelled.' });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

module.exports = router;
