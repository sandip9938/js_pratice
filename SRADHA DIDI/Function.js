// --------------Functions--------------
/*
* Block of code that performs a specific task , can be invoked whenever needed.
* its use repeteadly.

-----Function structure------

* function name(){
console.log("hello")
}
name() // call The Fuction


 */
function myFunction() {
  console.log("Welcome");
  //Parameter of function input
}
myFunction("Friend"); // Arguments of function input

function sum(p, s) {
  console.log(p + s); // Local variables or Local scope
  return;
}
sum(67, 45); // Call a sum Function and Its a global scope.
let value = sum(123, 456); // use 'sum' fuction and call
console.log(value);


//------------------Arraow function---------------
/*
* Compact way of writing a fuction.
* Constfunction=(el1,el2){
    //code here......
}
*/
sub = (k, l) => {
  console.log(k - l);
}
sub(2345, 230)

// ForEach loop
let arr = [1, 2, 3, 4, 5];
arr.forEach(function (item) {
  console.log(item);
});

//----Method of Some Array method----

/*    --map--
 * Creates a new array with the result of some opreation. the value its callback returns arre used to from new array.
   */

let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr.map(function (item) {
  return item * 2;
});
console.log(arr2);


/* ----filter----
Creates anew array of elements that give true for a condition / filter.
*/
let arr3 = [1, 2, 3, 4, 5];
let arr4 = arr3.filter((item) => {
  return item % 2 === 0;
});
console.log(arr4);


/*-----reduce-------
It takes an array and returns a single value.
*/
let arr5 = [1, 2, 3, 4, 5];
let totalSum = arr5.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(totalSum);


/*---------find------
Returns the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
*/
let arr6 = [1, 2, 3, 4, 5
];
let findElement = arr6.find((element) => {
  return element === 3;
})
console.log(findElement);


/*---------findIndex------
*/
let arr7 = [1, 2, 3, 4, 5
];
let findIndex = arr7.findIndex((element) => {
  return element === 3;
})
console.log(findIndex);



