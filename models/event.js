const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: String,
    location: {
      type: String,
      required: true,
    },
    category: String,
    imageUrl: String,
    description: String,
    accessibilityFeatures: [String],
    rsvpEnabled: {
      type: Boolean,
      default: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);