'use strict'; 

class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    greet() {
        console.log('hello, ' + this.name + ' ' + this.lastname);
    }
}

var kim = new Person('Kim', 'Sennior');
kim.greet();

var lei = new Person('Lei', 'Ahbru');
lei.greet();

console.log(kim.__proto__);
console.log(lei.__proto__);
console.log(kim.__proto__ === lei.__proto__);

