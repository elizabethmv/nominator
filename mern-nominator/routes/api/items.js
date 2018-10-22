const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item.js');

// GET api/items
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

// GET api/items/:id
router.get('/:id',  (req, res) => {
  Item.findById(req.params.id)
    .then( item => res.json(item))
    .catch( error => res.status(404).json({success: false}));
});

// POST api/items
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    fridge: req.body.fridge,
    pantry: req.body.pantry,
    meal: req.body.meal,
  });
  newItem.save().then(item => res.json(item));
});

// DELETE api/items/:id
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then( item => item.remove().then( () => res.json({success: true})))
    .catch( error => res.status(404).json({success: false}));
});

module.exports = router;