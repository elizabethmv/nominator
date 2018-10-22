const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');

const items = require('./routes/api/items.js');
const fridges = require('./routes/api/fridges.js');
const pantries = require('./routes/api/pantries.js');
const meals = require('./routes/api/meals.js');
// app test
const app = express();
 
// bodyParser middleware
app.use(bodyParser.json());

// db config
const db = require('./config/keys.js').mongoURI;

// connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('mongodb connected...'))
  .catch(error => console.log(error));

// use ports  
app.use('/api/items', items);
app.use('/api/fridges', fridges);
app.use('/api/pantries', pantries);
app.use('/api/meals', meals);


// server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port =  process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
