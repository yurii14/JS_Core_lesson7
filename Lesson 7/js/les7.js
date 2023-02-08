'use strict'

// Завдання 1

let person = {
    firstName: 'Ivan',
    secondName: 'Ivanov',
    showData() {
        console.log(`${this.firstName} ${this.secondName}`)
    }
}

let newPerson = Object.assign({}, person);

newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';

person.showData();
newPerson.showData();


// Завдання 2

let MyMath = {
    a: 5,
    b:2,
    sum() {
        return (this.a + this.b);
    },
    multiplication() {
        return (this.a * this.b);
    },
    division() {
        return (this.a / this.b);
    },
    subtraction() {
        return (this.a - this.b);
    },
}
console.log(MyMath.sum());
console.log(MyMath.multiplication());
console.log(MyMath.division());
console.log(MyMath.subtraction());


