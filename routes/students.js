var router = require('express').Router();

var studentList = {'names': [
  "Andrew Kolander",
  "Anthony Maki",
  "Brian Anderson",
  "Brian Verduzco",
  "Connor O'Gara",
  "Cormac Strahan",
  "Donovan Goertzen",
  "Hillary Manning",
  "Jon Wilson",
  "Justin Doty",
  "Katie Vogel",
  "Kyle Quamme",
  "Liz Kerber",
  "Megan Martinson",
  "Richard Camara",
  "Ryan Mattson",
  "Sahasha Reese",
  "Tracy Vincent",
  "Trent Johnson"
]};

router.get('/', function(request, response){
  response.send(studentList);
});

module.exports = router;
