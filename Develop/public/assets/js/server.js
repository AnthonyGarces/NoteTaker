//Dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");

//Setting up express app
var app = express();
var PORT = process.env.PORT || 3000;

//Sets up Express so that it can parse data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Routes

//route path for the homepage
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
});

//route path for the notes page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"))
});

//look at this some more
app.get("/api/notes", function(req, res) {
    var dir = fs.readdir("/develop/db/db.json");
    return dir;
})

//
app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    console.log(newNote)
})

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});