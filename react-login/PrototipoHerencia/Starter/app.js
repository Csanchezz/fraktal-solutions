// Your Javascript Code Goes Here 
function Person(name, lastname){
	
	this.name = name;
	this.lastname = lastname;
	this.compname = name + " " +lastname;

	
}

Person.prototype.greet = function(){
	console.log("Hello, " + this.compname);
}


var cs = new Person("Carlos", "Sanchez");
cs.greet();

var sm = new Person("Sofia", "Melendez");
sm.greet();

