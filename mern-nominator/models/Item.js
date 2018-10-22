const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const  ItemSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  fridge: { type: mongoose.Schema.Types.ObjectId, ref: 'Fridge' },
  pantry: { type: mongoose.Schema.Types.ObjectId, ref: 'Pantry' },
  meal: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal' },
});

module.exports = mongoose.model('Item', ItemSchema);