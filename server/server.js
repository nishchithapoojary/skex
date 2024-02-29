const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routes
app.use('/api/auth', require('./router/authRoutes'));
app.use('/api/food', require('./router/foodRoutes'));
app.use('/api/order', require('./router/orderRoutes'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

