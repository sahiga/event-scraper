var express = require('express');
var app = express();
var scraper = require('scraperjs');

app.use(express.static(__dirname + '/client'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Event scraper listening at http://%s:%s', host, port);
});
