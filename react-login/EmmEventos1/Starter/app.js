var Emitter = require('./emitter');

var emtr = new Emitter();


emtr.on('greet', function(){
	console.log("Who say Hi?");
});


emtr.on('greet', function(){
	console.log("I wasn't");
});

console.log("This happens with your code")
emtr.emit('greet')

