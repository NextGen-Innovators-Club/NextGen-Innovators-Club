const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  eventName: { type: String, required: true },
  registeredAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', eventSchema);
