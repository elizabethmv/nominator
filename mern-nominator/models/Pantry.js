const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PantrySchema = new Schema({
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pantry',PantrySchema);