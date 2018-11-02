const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  // name: { type: String, required: true },
  typeMeal: { type: String, required: true },
  items: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Meal', MealSchema);