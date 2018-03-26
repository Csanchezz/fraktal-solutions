function Greetr(){
	this.greetings = "hello worlddddd!";
	this.greet = function(){
		console.log(this.greetings);
	}
}

module.exports = Greetr;