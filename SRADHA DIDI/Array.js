//-----Array-------
/*
 * Collection Of element.
----Types of Array in js-----
1) Sparse array: An array that contains empty slots or undefined values between elements.
2) Dense array: An array with no empty slots and all the elements are filled up.
3) Multidimensional arrays: an array containing other arrays as its elements.
4) Nested arrays: an array that contains another array inside it.
5) Associative arrays: also known as hashes, dictionaries, objects, etc., which contain key-value pairs instead of index-element
5) Associative arrays (also known as hashes): an array where each key is associated with a value, not just an index number.
5) Associative arrays/Objects: key-value pairs, where each value is associated to a unique key.
6) Typed arrays: specialized arrays for storing different types of data like Int8Array, Uint8Array etc.
7) Complex numbers: stores complex numbers using two properties real and imaginary.



 */
let marks = [12, 23, 34, 45, 56, 67, 78, 89, 90];
console.log(marks.length);
//accessing last element of array
console.log(marks[marks.length - 1]);
//accessing first element of array
console.log(marks[0]);

//----------Loop over A Array---------
let sum = 0;
for (var i = 0; i < marks.length; i++) {
  sum += i;
}

let avg = sum / marks.length;

console.log(`Avarage marks of the calss ${avg}`);

//---------------Array Methods-----------------
//push() method adds new item at end of the array
marks.push(100);
console.log("Updated Marks", marks);
//pop() method removes the last element from the array
marks.pop();
console.log("Updated Marks after pop", marks);
//shift() method remove the first element of the array
marks.shift();
console.log("Updated Marks after shift", marks);
//unshift() method add the element at beginning of the array
marks.unshift(90);
console.log("Updated Marks after unshift", marks);
//slice() method extract part of the array into a new array object
let sliceMarks = marks.slice(1, 3);
console.log("Slice Marks", sliceMarks);
//splice() method change content of array
marks.splice(1, 2, "90", "80");
console.log("Spliced Marks", marks);
//sort() method sort the array in ascending order
marks.sort((a, b) => a - b);
console.log("Sorted Marks", marks);
//reverse() method reverse the array
marks.reverse();
console.log("Reversed Marks", marks);
