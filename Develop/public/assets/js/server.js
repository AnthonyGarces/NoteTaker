//Dependencies
var express = require("express");
var path = require("path");
var fs = requise("fs");

//Setting up express app
var app = express();
var PORT = process.env.PORT || 3000;

//Sets up Express so that it can parse data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});