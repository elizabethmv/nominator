const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Pantry model
const Pantry = require('../../models/Pantry.js');
const Item = require('../../models/Item.js');

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

  // Pantry.findById(req.params.id)
  //   .then( pantry => res.json(pantry))
  //   .catch( error => res.status(404).json({success: false}));
});

// POST api/pantries
router.post('/', (req, res) => {
  const newPantry = new Pantry({

  });
  newPantry.save().then(pantry => res.json(pantry));
});

// PATCH api/pantries/:id
router.patch('/:id', (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  console.log(req.body._id);
  Item.updateOne(
    { "_id" : mongoose.Types.ObjectId(req.body._id) }, 
    { 
      $set: { 
        "fridge" : null,
        "pantry" : mongoose.Types.ObjectId(req.params.id),
        "meal" : null,
      } 
    })
    .then(() => {
      const pantryItems = Item.find({ pantry: mongoose.Types.ObjectId(req.params.id) }).then(items => res.json(items));
      console.log(pantryItems);
      return pantryItems;
    })
    .catch( error => res.status(404).json({success: false}));
});

// DELETE api/pantries/:id
router.delete('/:id', (req, res) => {
  Pantry.findById(req.params.id)
    .then( pantry => pantry.remove().then( () => res.json({success: true})))
    .catch( error => res.status(404).json({success: false}));
});

module.exports = router;