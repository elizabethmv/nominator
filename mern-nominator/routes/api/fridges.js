const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Fridge model
const Fridge = require('../../models/Fridge.js');
const Item = require('../../models/Item.js');

// GET api/fridges
router.get('/', (req, res) => {
  Fridge.find()
    // .populate('Item')
    .sort({ date: -1 })
    .then(fridges => res.json(fridges));
});

// GET api/fridges/:id
router.get('/:id',  (req, res) => {
  Item.find({ fridge: mongoose.Types.ObjectId(req.params.id) })
    .then( items => res.json(items))
    .catch( error => res.status(404).json({success: false}));

  // Fridge.findById(req.params.id)
  //   .then( fridge => res.json(fridge))
  //   .catch( error => res.status(404).json({success: false}));
});

// POST api/fridges
router.post('/:id', (req, res) => {
  const newFridge = new Fridge({

  });
  newFridge.save().then(fridge => res.json(fridge));
});

// PATCH api/fridges/:id
router.patch('/:id', (req, res) => {
  console.log(req.params.id);
  // Item.
  Fridge.findById(req.params.id)
    .then( fridge => console.log( req.body.item._id).then( () => res.json({success: true})) )
    .catch( error => res.status(404).json({success: false}));
});

// DELETE api/fridges/:id
router.delete('/:id', (req, res) => {
  Fridge.findById(req.params.id)
    .then( fridge => fridge.remove().then( () => res.json({success: true})))
    .catch( error => res.status(404).json({success: false}));
});

module.exports = router;