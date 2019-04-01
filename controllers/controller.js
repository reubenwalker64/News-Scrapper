//convert to MongoDB
let axios = require('axios'); // HTTP Request
let cheerio = require('cheerio'); // Web Scrapper
let mongoose = require('mongoose'); // MongoDB ORM
let db = require("../models"); // Require all models


/*var express = require("express");
var router = express.Router();*/

// Import the model (burgers.js) to use its database functions.
var index = require("../models/index.js");
var article require("../models/article.js");
var article require("../models/comment.js");
//get help with "/" addresses!!!

// Create all our routes and set up logic within those routes where required.
router.get("/article", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      index: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//EDIT BELOW ???
router.post("/index", function(req, res) {
  console.log(req.body.name);

  if(req.body.name !== "") {
    index.create(req.body.name, function(){
      res.redirect("/index");
    });
  }
});

//EDIT BELOW ???
router.put("/index/:id", function(req, res) {
  console.log(req.params.id);

  index.update(req.params.id, function(result){
    console.log(result);
    res.redirect('/index');
  });
});

// Export routes for server.js to use.
module.exports = router;
