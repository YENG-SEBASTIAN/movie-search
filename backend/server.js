require('dotenv').config();
const express = require('express');
const cors = require('cors');  // Import the cors package
const connectDB = require('./DbConfig/db');
const swaggerSetup = require('./swagger/swaggerConfig');
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

// Connect to the database
connectDB();

// Middleware for parsing JSON
app.use(express.json());

app.use(cors());

// Swagger documentation
swaggerSetup(app);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
