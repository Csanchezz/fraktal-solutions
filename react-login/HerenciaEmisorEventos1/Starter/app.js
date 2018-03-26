var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = "hello World!";
}
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
    console.log(this.greeting + ": " + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function (data) {
    console.log("some greeteed! : " + data );
});

greeter1.greet("tony");