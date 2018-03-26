function Greetr(){
	this.greeting = "Hi world!";
	this.greet = function(){
		console.log(this.greeting);
	}
}

module.exports = new Greetr();