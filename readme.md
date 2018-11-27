# Nominator App

* mern-nominator (main project created with the stack Mongodb Express React and Node)
* rails-nominator (test project to prototype backend with sql and rails active record)

Web App to plan meals on base of food supplies.


## Clone repository

`git clone https://github.com/elizabethmv/nominator.git`

## Start project

* `cd nominator-app/mern-nominator`
* `npm run dev-install`
* `npm run dev`

localhost:3000 url frontend
localhost:5000/api url backend api

## Option 1 database

## Start a local mongodb database

* `mongod` start mongodb database server on port 27017

## Option 2 database

## Start a local mongodb database

* Uncomment line 2 on file keys.js mern-nominator/config/keys.js

`// mongoURI: "mongodb://cesarcatano:password1@ds135433.mlab.com:35433/mern-shopping-list-app"`

* and comment line 3 on file keys.js mern-nominator/config/keys.js

`mongoURI: "mongodb://localhost:27017/mern-shopping-list-app"`

