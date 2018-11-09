const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Pantry model
const Pantry = require('../../models/Pantry.js');
const Item = require('../../models/Item.js');
const Meal = require('../../models/Meal.js');

// GET api/pantries
router.get('/', (req, res) => {
  Pantry.find()
    .sort({ date: -1 })
    .then(pantries => res.json(pantries))
});

// GET api/pantries/:id
router.get('/:id',  (req, res) => {
  Item.find({ pantry: mongoose.Types.ObjectId(req.params.id) })
    .then( items => res.json(items))
    .catch( error => res.status(404).json({success: false}));
});

// POST api/pantries
router.post('/', (req, res) => {
  const newPantry = new Pantry({
  });
  newPantry.save().then(pantry => res.json(pantry));
});

// PATCH api/pantries/:id
router.patch('/:id', async (req, res) => {
  const item = await Item.findById(req.body._id);
  console.log(item, item.meal);

  if (item.meal) {
    const lastMealID = item.meal;
    const lastUpdatedMeal = await Meal.findById(lastMealID);
    let items = lastUpdatedMeal.items;
    let updatedItems = items.filter(  mealItem => {
      return String(mealItem._id) !== String(item._id);
    });
    await lastUpdatedMeal.updateOne( { items:  updatedItems } );
    await lastUpdatedMeal.save();
    console.log(lastUpdatedMeal)
  }

  await item.updateOne({
    "fridge" : null,
    "pantry":mongoose.Types.ObjectId(req.params.id),
    "meal" : null
  });

  return res.json(item);
});

// DELETE api/pantries/:id
router.delete('/:id', (req, res) => {
  Pantry.findById(req.params.id)
    .then( pantry => pantry.remove().then( () => res.json({success: true})))
    .catch( error => res.status(404).json({success: false}));
});

module.exports = router;