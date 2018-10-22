const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  typeMeal: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Meal', MealSchema);