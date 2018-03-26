
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/:nm', function(req, res) {
    res.render('index', {NM: req.params.nm});
});

app.get('/personsdazsd/:id', function(req, res) {
	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

app.post('/person', urlencodedParser, function (req, res) {
    res.send("Thank You, you're in urlencoded parser!");
    console.log(req.body.name);
    console.log(req.body.lastname);

});

app.post('/personjson', jsonParser, function (req, res) {
    res.send("Thank you, you're in jsonParser parser haha!");
    console.log(req.body.name);
    console.log(req.body.lastname);

});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);