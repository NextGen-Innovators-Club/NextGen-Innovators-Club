require('dotenv').config();
const Event = require('../models/Event');
const axios = require('axios');

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const SENDER_EMAIL = process.env.SENDER_EMAIL;

exports.registerStudent = async (req, res) => {
  try {
    const { name, email, eventName } = req.body;

    if (!name || !email || !eventName) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email address.' });
    }

    const existing = await Event.findOne({ email, eventName });
    if (existing) {
      return res.status(400).json({ success: false, message: 'You are already registered for this event.' });
    }

    const registration = new Event({ name, email, eventName });
    await registration.save();

    //  Brevo
    await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { email: SENDER_EMAIL },
        to: [{ email, name }],
        subject: `Registration Confirmed: ${eventName}`,
        htmlContent: `
          <p>We have received your registeration for <strong>${eventName}</strong>.</p>
          <p>Thank you for registering! We look forward to seeing you at the event.</p>
          <p>Please stay tuned for future updates.</p>
          <br>
          <p>Best Regards,</p>
          <p>The Nextgen Innovation Team</p>
        `
      },
      {
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json',
          accept: 'application/json',
        }
      }
    );

    return res.status(200).json({ success: true, message: 'Registration successful and email sent!' });
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message || error);
    return res.status(500).json({ success: false, message: 'Failed to register student.' });
  }
};
