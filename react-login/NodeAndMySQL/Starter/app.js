var express = require('express');
var app = express();
var mysql = require('mysql');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "hola3.1416",
        database: "addresses"
    });

    con.query('SELECT people.idpeople, firstname, lastname, address FROM people INNER JOIN people_has_addresses ON people.idpeople = people_has_addresses.people_idpeople INNER JOIN addresses ON people_has_addresses.addresses_idaddresses = addresses.idaddresses',
        function (err, rows) {
            if (err) throw err;
            console.log(rows[0].firstname);
            console.log(rows[0].lastname);
            console.log(rows[0].address);
        }
    );
	next();
});

htmlController(app);

apiController(app);

app.listen(port);