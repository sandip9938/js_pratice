// Array 
// it is a collection of item in one place .
let arr=[1,2,3,4,5,6,7,8,9]
console.log(arr)

// Array method list :
/*
- push() - add new element to the end of array and return length after adding this value
- pop()- remove last element from an array ,return removed element or undefined if no elements are present on that index
- shift() - removes first element form an array and returns that removed element
- unshift() - adds elements at beginning of an array

*/


console.log(arr.length);
console.log(arr.push(56));
console.log(arr);
console.log(arr.pop(2));
console.log(arr);



// Some Array Element 
const fruits = ['apple', 'banana','mango']; //array declaration
fruits[0];   // apple
fruits[-1];    // mango
fruits['name']='pineapple';     //add key/value pair
delete fruits;       // delete whole object from memory

console.log(fruits);


