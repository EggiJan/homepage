var express = require('express');
var app = express();

var PORT = 8889;
var HOST = 'localhost';

app.use(express.static(__dirname + '/public'));

var server = app.listen(PORT, HOST, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
