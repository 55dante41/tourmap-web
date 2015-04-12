var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/home', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/stylesheets/bootstrap.min.css', function(req, res) {
  res.sendFile(__dirname + '/public/stylesheets/bootstrap.min.css');
});
app.get('/scripts/bootstrap.min.js', function(req, res) {
  res.sendFile(__dirname + '/public/scripts/bootstrap.min.js');
});
app.get('/scripts/knockout-3.3.0.js', function(req, res) {
  res.sendFile(__dirname + '/public/scripts/knockout-3.3.0.js');
});
app.get('/scripts/mapBuilder.js', function(req, res) {
  res.sendFile(__dirname + '/public/scripts/mapBuilder.js');
});
app.get('/scripts/models.js', function(req, res) {
  res.sendFile(__dirname + '/public/scripts/models.js');
});
app.get('/scripts/services.js', function(req, res) {
  res.sendFile(__dirname + '/public/scripts/services.js');
});
app.get('/scripts/viewmodels.js', function(req, res) {
  res.sendFile(__dirname + '/public/scripts/viewmodels.js');
});


var server = app.listen(2020, function() {
  console.log('server started successfully');
});
