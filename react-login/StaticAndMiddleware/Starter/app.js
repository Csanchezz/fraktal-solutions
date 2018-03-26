var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static( __dirname + '/public'));

app.get('/', function(req, res) {
    var newLocal = '<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>';

    res.send(newLocal);
});

app.get('/person/:id', function(req, res) {
	res.send('<html><head></head><body><h1>Person: ' + req.param.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);