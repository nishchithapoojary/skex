const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Route to get all food items
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add more routes for CRUD operations as needed (e.g., create, update, delete)

module.exports = router;
