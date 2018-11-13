const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item.js');
const Meal = require('../../models/Meal.js');

// GET api/items
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// GET api/items/:id
router.get('/:id',  (req, res) => {
  Item.findById(req.params.id)
    .then( item => res.json(item))
    .catch( error => res.status(404).json({success: false}));
});

// POST api/items
router.post('/', async (req, res) => {
  
  const { name, fridge, pantry, meal, ingredients } = req.body;
  
  if(!ingredients){
    const newItem = new Item({ name, fridge, pantry, meal});
    await newItem.save();
    if (meal) {
      const updateMeal = await Meal.findById(meal);
      updateMeal.items.push(newItem)
      await updateMeal.save()
    }
    res.status(201).json(newItem);
  }
  else if( ingredients ){
    const items = Promise.all(ingredients.map( async ingredient => {
      const newItem = new Item({ 'name':ingredient, 'fridge':null, 'pantry':null, 'meal':null })
      await newItem.save();
      console.log(newItem);
      return newItem;
    })).then( data =>{ 
      console.log(3,items);
      res.status(201).json(data)
    });
    
    
  }

});

// DELETE api/items/:id
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then( item => item.remove().then( () => res.json({success: true})))
    .catch( error => res.status(404).json({success: false}));
});

module.exports = router;