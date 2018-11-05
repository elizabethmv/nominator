const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Fridge model
const Fridge = require('../../models/Fridge.js');
const Item = require('../../models/Item.js');
const Meal = require('../../models/Meal.js');

// GET api/fridges
router.get('/', (req, res) => {
  Fridge.find()
    // .populate('Item')
    // .populate('items')
    .sort({ date: -1 })
    .then(fridges => res.json(fridges));
    
});

// GET api/fridges/:id
router.get('/:id',  (req, res) => {
  Item.find({ fridge: mongoose.Types.ObjectId(req.params.id) })
    .then( items => res.json(items))
    .catch( error => res.status(404).json({success: false}));
});

// POST api/fridges
router.post('/:id', (req, res) => {
  const newFridge = new Fridge({
  });
  newFridge.save().then(fridge => res.json(fridge));
});

// PATCH api/fridges/:id
router.patch('/:id', async (req, res) => {
  const item = await Item.findById(req.body._id);
  console.log('item', item);

  if (item.meal) {
    const lastMealID = item.meal;
    console.log('lastMealID', lastMealID);
    const lastUpdatedMeal = await Meal.findById(lastMealID);
    let items = lastUpdatedMeal.items;
    let updatedItems = items.filter(  mealItem => {
      return String(mealItem._id) !== String(item._id);
    });
    await lastUpdatedMeal.updateOne( { items:  updatedItems } );
    await lastUpdatedMeal.save();
  }

  await item.updateOne({
    "fridge":mongoose.Types.ObjectId(req.params.id),
    "pantry" : null,
    "meal" : null
  });

  return res.json(item);
});

// DELETE api/fridges/:id
router.delete('/:id', (req, res) => {
  Fridge.findById(req.params.id)
    .then( fridge => fridge.remove().then( () => res.json({success: true})))
    .catch( error => res.status(404).json({success: false}));
});

module.exports = router;