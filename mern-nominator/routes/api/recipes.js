const express = require('express');
const router = express.Router();
const request = require('request');

// GET api/recipes
router.post('/', (req, res) => {
  const array = req.body.map( item => item.name);
  const items = array.join();
  const amount = array.length;
  const uri = `http://www.recipepuppy.com/api/?i=${items}&p=${amount}`;
  console.log(uri);
  request({
    uri: uri,
  }).pipe(res);
});

module.exports = router;