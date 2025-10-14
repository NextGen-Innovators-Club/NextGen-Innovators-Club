require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
const mongoose = require('mongoose');

app.use(cors({
  origin: ["https://nextgeninnovators.onrender.com", "http://localhost:5173"],
  methods: ["GET", "POST"],
  credentials: true
}));

const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');

// Routes
app.use('/api/users', userRoutes);
app.use('/api/event', eventRoutes);

// MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
