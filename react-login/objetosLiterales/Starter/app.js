// Your Javascript Code Goes Here
var student = {
	name: 'Charles',
	lastname: 'Dickens',
	greet: function(){
		console.log('Hello, ' + this.name + ' ' + this.lastname);
	},
}


student.greet();