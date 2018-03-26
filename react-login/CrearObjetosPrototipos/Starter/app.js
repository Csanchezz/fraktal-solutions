var person = {
	name:'',
	lastname:'',
	greet: function() {
		return this.name + " " + this.lastname;
	}
}

var john = Object.create(person);
john.name = 'John';
john.lastname = 'Doe';
console.log(john.greet());

var sofy = Object.create(person);
sofy.name = 'Sofy';
sofy.lastname = 'Melendez';
console.log(sofy.greet());

