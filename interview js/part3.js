//  Map filter and reduce

// what is map() 
// it takes a function as an argument, which will be applied to every element in the array. It returns another array with each value being the result
const nums=[1,2,3,4,5]
const mulyiplythree = nums.map((nums,i,arr)=>{
    return nums*3
})
console.log(mulyiplythree);


// what is filter() 
//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
const num1=[1,2,3,4,5]
const morthanfour=num1.filter((num1)=>{
    return num1<4
})
console.log(morthanfour);


// what is reduce()
// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
let sumofnumbers=[1,2,3,4,5,6,7,8,9,10]

function reducer (accumulator , currentValue) {
    return accumulator +currentValue ;}
    var result = sumofnumbers .reduce(reducer ); //result will be 1+2+3+4
    console.log(result);



 // polyfill for map()
Array.prototype.myMap= function(cb){
    const newArr=[];
    for (let i=0; i< this.length;i++ ) {
        newArr[i]= cb(this [i],i,this)}
        return newArr; 

}
const nums1=[1,2,3,4,5]
const mulyiplythree1 = nums.myMap((nums1,i,arr)=>{
    return nums1*3
})
console.log(mulyiplythree1);



// polyfill of reduce()
Array.prototype.myReduce=function(cb,intialvalue){
    let accu= intialvalue 
    for (let i = 0; i < this.length; i++) {
        accu=accu?cb(accu,this[i],i,this):this[i];
    }
return accu
}
sumofnumbers=[1,2,3,4,5,6,7,8,9,10]
var result1 = sumofnumbers.myReduce(reducer,0);//result willl be  0+(1+2)+(3+4)
console.log(result1);


// map() vs forEach()
// map()
const arr=[12,34,56,78,90]
 const arrresuklr=arr.map((ar)=>{
    return ar+10
})
console.log(arrresuklr);
console.log(arr);
// foreach 
const forresult=arr.forEach((ar,i)=>{
 arr[i]=ar+10
})
console.log(forresult);
console.log(`its modified array:${arr}`)




// Q1. 
/* Write a JavaScript program to create an object represents you. Properties will contain your name and age */
// Write a JavaScript program to find the largest number in an array using ‘reduce’ method and 'if' condition.

// create a class called Car with the following properties: make , model and year . Create an object from it and assign to variable car1 then print
// write a program to find the largest number in an array using myreduce method and without any external library or built-in methods .
// Write a function that takes in an array and returns the first element that is larger than its neighbors or -1 if there’s no such element.




// problems 
// Write a function that reverses a given string.
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
// Write a function to check if a given string is a palindrome (reads the same forwards and backwards).
function isPalindrome(str) {
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  
// Write a function that prints numbers from 1 to n, but for multiples of 3, print "Fizz," for multiples of 5, print "Buzz," and for multiples of both 3 and 5, print "FizzBuzz."
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
  
// Write a function to find the largest element in an array of numbers.
function findLargestElement(arr) {
    if (arr.length === 0) {
      return null; // Handle empty array case
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  
// Write a function to count the number of words in a given string.
function countWords(str) {
    const words = str.split(/\s+/).filter(word => word !== '');
    return words.length;
  }
  
// Given an array of numbers and a target sum, find two numbers in the array that add up to the target sum.
function countWords(str) {
    const words = str.split(/\s+/).filter(word => word !== '');
    return words.length;
  }
  