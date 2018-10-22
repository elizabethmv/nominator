const express = require('express');
const router = express.Router();

// Pantry model
const Pantry = require('../../models/Pantry.js');

// GET api/pantries
router.get('/', (req, res) => {
  Pantry.find()
    .sort({ date: -1 })
    .then(pantries => res.json(pantries))
});

// GET api/pantries/:id
router.get('/:id',  (req, res) => {
  Pantry.findById(req.params.id)
    .then( pantry => res.json(pantry))
    .catch( error => res.status(404).json({success: false}));
});

// POST api/pantries
router.post('/', (req, res) => {
  const newPantry = new Pantry({

  });
  newPantry.save().then(pantry => res.json(pantry));
});

// DELETE api/pantries/:id
router.delete('/:id', (req, res) => {
  Pantry.findById(req.params.id)
    .then( pantry => pantry.remove().then( () => res.json({success: true})))
    .catch( error => res.status(404).json({success: false}));
});

module.exports = router;