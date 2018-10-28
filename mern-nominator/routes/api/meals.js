const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Meal model
const Meal = require('../../models/Meal.js');
const Item = require('../../models/Item.js');

// GET api/meals
router.get('/', (req, res) => {
  Meal.find()
    .sort({ date: -1 })
    .then(meals => res.json(meals));
});

// GET api/meals/:id
router.get('/:id',  (req, res) => {
  Item.find({ meal: mongoose.Types.ObjectId(req.params.id) })
    .then( items => res.json(items))
    .catch( error => res.status(404).json({success: false}));
});

// POST api/meals
router.post('/', (req, res) => {
  const newMeal = new Meal({
    typeMeal: req.body.typeMeal
  });
  newMeal.save().then(meal => res.json(meal))
    .catch( error => console.log(error));
});

// PATCH api/meals/:id
router.patch('/:id', (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  console.log(req.body._id);
  Item.updateOne(
    { "_id" : mongoose.Types.ObjectId(req.body._id) }, 
    { 
      $set: { 
        "fridge" : null,
        "pantry" : null,
        "meal" : mongoose.Types.ObjectId(req.params.id),
      } 
    })
    .then(() => Item.find({ meal: mongoose.Types.ObjectId(req.params.id) }))
    .catch( error => res.status(404).json({success: false}));
});

// DELETE api/meals/:id
router.delete('/:id', (req, res) => {
  Meal.findById(req.params.id)
    .then( meal => meal.remove().then( () => res.json({success: true})))
    .catch( error => res.status(404).json({success: false}));
});

module.exports = router;