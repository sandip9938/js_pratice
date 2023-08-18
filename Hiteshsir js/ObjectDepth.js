
// Singleton 
const obj = {}
console.log(obj);
// { }
console.log(typeof obj);
// object
// Prototype-based inheritance
function Person() {}; // constructor function
Person.prototype.name;   // property of the prototype (shared by all instances)
let p1= new Person();    // instance of a person, created with 'new' keyword and inherits properties from its prototype
let john = new Person();    // instance, aka 'object'
john.__proto__ === Person.prototype;// true


