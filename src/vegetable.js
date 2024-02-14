// Import Mongoose
const mongoose = require('mongoose');

// Define the Vegetable schema
const vegetableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  readyToEat: {
    type: Boolean,
    default: false
  }
});

// Create the Vegetable model
const Vegetable = mongoose.model('Vegetable', vegetableSchema);

// Export the Vegetable model
module.exports = Vegetable;
