var Emitter = require('events');
var eventConfig = require('./config');


var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
	console.log("somebody is saying hello!");	
});

emtr.on(eventConfig.GREET, function(){
	console.log('I am not!');
});

console.log("-----This is happening with your code-----");
emtr.emit(eventConfig.GREET);
