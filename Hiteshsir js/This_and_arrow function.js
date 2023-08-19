// Arrow function
const sum = (a, b) => a + b; // arrow functions are anonymous and cannot be named. They have their own this value
console.log(sum(12, 23));
// 35
console.log(sum);
// sum is a reference to the anonymous function

// This keyword in arrow functions
const person = {
  name: "John",
  age: 40,
  // this refers to object itself
  greet() {
    console.log(`Hi! I am ${this.name}`);
  },
};
const anotherPerson = Object.create(person);
anotherPerson.greet();
/*
        Hi! I am undefined */

//  Arrow function and regular function are not allow this keyword 

// arrow function with implicit return statement
let getFullName = (firstName) => firstName + ' Doe';
console.log(getFullName());
// arrow function without explicit return statement
let fullName;
fullName = () => 'Sandip';
console.log(fullName());


const add=(num1,num2)=>(num1+num2)
console.log(add(12,56));