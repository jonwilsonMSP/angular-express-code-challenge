var express = require('express');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var students = require('./routes/students');
var app = express();

//static files
app.use(express.static('public'));

app.use(bodyParser.json());


app.use('/', index);
app.use('/students', students);

var server = app.listen(process.env.PORT || 3000, function() {
  var port =server.address().port;
console.log('Listening on port', port);
});
