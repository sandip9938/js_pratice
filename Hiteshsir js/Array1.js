// Array 
const myarray=[1,2,3,4,5,6,]
console.log(myarray[5]);

//undefined and null
let a; // undefined
a=null;//null



const myarray2 =new Array(12,23,45,67,89,90)
console.log("first element of array is",myarray2 [0])
myarray2.pop(2)
console.log(myarray2.push(15));
console.log(myarray2);

const arr = new Array();
// Array is a Object 
console.log('arr',typeof (arr))


// Slice Splice Join Concat Reverse Sort Etc...
// slice
const myarray3 = myarray.slice(1,3)
console.log(myarray3);

// Splice
const myarray4 = myarray.splice(1,3)
console.log(myarray4);

console.log(myarray);