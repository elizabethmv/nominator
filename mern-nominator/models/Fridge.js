const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FridgeSchema = new Schema({
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Fridge',FridgeSchema);