const axios = require('axios');
const User = require('../models/User');

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const SENDER_EMAIL = process.env.SENDER_EMAIL;

exports.joinUser = async (req, res) => {
  const { name, email, year, interest, motivation } = req.body;

  try {
    const newUser = new User({ name, email, year, interest, motivation });
    await newUser.save();

    await axios.post('https://api.brevo.com/v3/smtp/email', {
      sender: { email: SENDER_EMAIL },
      to: [{ email, name }],
      subject: 'Welcome to Nextgen Innovation!',
      htmlContent: `
        <h2>Hello ${name}!</h2>
        <p>Thank you for subscribing to <strong>Nextgen Innovation</strong>.</p>
        <p>You’re now on our list to receive exclusive event invites, and updates about all our exciting activities. We can’t wait to see you at our upcoming events! Welcome to the community!</p>
        <br>
        <p>Best Regards,</p>
        <p>The Nextgen Innovation Team</p>
      `
    }, {
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    });

    res.status(200).json({ message: 'Thank you for joining us!' });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to add user or send email' });
  }
};
