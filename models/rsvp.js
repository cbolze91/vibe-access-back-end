const mongoose = require('mongoose');

const rsvpSchema = new mongoose.Schema(
  {
    // Event the user is RSVP'ing to.
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      required: true,
    },

    // Logged-in user who created the RSVP.
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    // Simple RSVP status for MVP.
    status: {
      type: String,
      enum: ['going', 'interested'],
      default: 'going',
    },
  },
  { timestamps: true }
);

// Prevents one user from RSVP'ing to the same event multiple times.
rsvpSchema.index({ event: 1, user: 1 }, { unique: true });

module.exports = mongoose.model('Rsvp', rsvpSchema);
