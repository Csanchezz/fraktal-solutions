var util = require('util');

var name = "Carlos";

var greeting = util.format("hello, %s", name);

util.log(greeting);
console.log(greeting);