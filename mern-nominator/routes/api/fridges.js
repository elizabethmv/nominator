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

// User.update({
//   username: req.user.username
// }, {
//   $set: { 
//     "personalInfo.fullName": req.body.fullName
//   }
// }, function (err, user) {
//     if (err) throw error
//     console.log(user)
//     console.log("update user complete")
// })

// PATCH api/fridges/:id
router.patch('/:id', (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  console.log(req.body._id);
  Item.updateOne(
    { "_id" : mongoose.Types.ObjectId(req.body._id) }, 
    { 
      $set: { "fridge" : mongoose.Types.ObjectId(req.params.id) } 
    })
    .then(() => Item.find({ fridge: mongoose.Types.ObjectId(req.params.id) }))
    .catch( error => res.status(404).json({success: false}));

  // db.items.updateOne( { "_id" : ObjectId("5bcff10129c619067ef7643e") }, { $set: { "fridge" : ObjectId("5bcce9e5ce791b117ec60f7c") } } )

  // Fridge.findById(req.body.item._id)
  //   .then( fridge => console.log( ).then( () => res.json({success: true})) )
  //   .catch( error => res.status(404).json({success: false}));
});

// DELETE api/fridges/:id
router.delete('/:id', (req, res) => {
  Fridge.findById(req.params.id)
    .then( fridge => fridge.remove().then( () => res.json({success: true})))
    .catch( error => res.status(404).json({success: false}));
});

module.exports = router;