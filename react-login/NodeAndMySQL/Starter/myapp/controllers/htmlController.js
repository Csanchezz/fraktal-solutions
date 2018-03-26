var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/person/:id', function (req, res) {
        res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
        console.log(req.params.id);
        console.log(req.query.qstr);
    });

    app.post('/person', urlencodedParser, function (req, res) {
        //res.send('Thank you!');
        res.render('user', { name: req.body.name, lastname: req.body.lastname, book: req.body.favoriteBook, pass: req.body.password});
        console.log(req.body.name);
        console.log(req.body.lastname);
        console.log(req.body.favoriteBook);
        console.log(req.body.password);

    });  
}