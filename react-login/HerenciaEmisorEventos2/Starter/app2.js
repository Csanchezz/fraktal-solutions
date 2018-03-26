var util = require('util');

function Person() {
    this.name = 'John';
    this.lastname = 'Doetz';
}

Person.prototype.greet = function () {
    console.log('Hello ' + this.name + ' ' + this.lastname + ' your badge number is ' + this.badgenumber);
}

function Policeman() {
    Person.call(this);
    this.badgenumber = '1234';
}

//Heritance from Person to Policeman
util.inherits(Policeman, Person);
//new object
var officer = new Policeman();

officer.greet();
officer.greet.call({ name: "Carlos", lastname: "Sanchez", badgenumber: "1919"})

