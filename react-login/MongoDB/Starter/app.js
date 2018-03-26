var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://csanchezz:passwordtest@ds121099.mlab.com:21099/addressbook');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var cyny = Person({
    firstname: 'Cyny',
    lastname: 'Ferrence',
    address: 'US California'
})

//Saving a new user = Cyny
cyny.save(function (err) {
    if (err) throw err;

    console.log('person saved!');
});

var harmony = Person({
    firstname: 'Harmony',
    lastname: 'Sánchez',
    address: 'UK London'
})

//Saving a new user = Harmony
harmony.save(function (err) {
    if (err) throw err;

    console.log('person saved!');
});




var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);

    //get users
    Person.find({}, function (err, users) {
        if (err) throw err;

        //show all users
        console.log(users);
    });


	next();
});

htmlController(app);

apiController(app);

app.listen(port);