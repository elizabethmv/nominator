const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Meal model
const Meal = require('../../models/Meal.js');
const Item = require('../../models/Item.js');

// GET api/meals
router.get('/', (req, res) => {
  Meal.find()
    .populate('items')
    .sort({ date: -1 })
    .then(meals => {
      res.json(meals);
    });
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
router.patch('/:id', async (req, res) => {
  const item = await Item.findById(req.body._id);

  if (item.meal) {
    const lastMealID = item.meal;
    const lastUpdatedMeal = await Meal.findById(lastMealID);
    let items = lastUpdatedMeal.items;
    let updatedItems = items.filter(  mealItem => {
      return String(mealItem._id) !== String(item._id);
    });
    await lastUpdatedMeal.updateOne( { items:  updatedItems } );
    await lastUpdatedMeal.save();
  } 
  
  await item.updateOne({
    "fridge" : null,
    "pantry" : null,
    "meal":mongoose.Types.ObjectId(req.params.id)
  });
  
  const updatedMeal = await Meal.findById(req.params.id);
  updatedMeal.items.push(item);
  await updatedMeal.save();
  
  let meals = await Meal.find()
                      .populate('items')
                      .sort({ date: -1 })
                      .then(meals => {
                        res.json(meals);
                      });

  return res.json(meals);
});

// DELETE api/meals/:id
router.delete('/:id', (req, res) => {
  Meal.findById(req.params.id)
    .then( meal => meal.remove().then( () => res.json({success: true})))
    .catch( error => res.status(404).json({success: false}));
});

module.exports = router;