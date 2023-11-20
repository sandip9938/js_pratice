// Loops and 
/*
------------Loops--------------
* For Loop
(Condition;upadate;increment)
for (let i = 0; i < 5; i++) {
    console.log(i);
    }
  
* While loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
    }

* Dowhile loop
let i = 0;
do {
    console.log(i);
    i++
    } while (i < 5)


* For-of loop (Its carry Strings and Array values.)
const arr = [1,2,3];
for (const element of arr){
    console.log(element);
    }


* For-in Loop (Its use for Object.)
const obj = {name: 'John', age: 30};
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
        }
        }





 */
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("Other");

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

console.log("Other");
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

console.log("Other");

const arr = [1, 2, 3];
for (const element of arr) {
  console.log(element);
}

console.log("Other");

const obj = { name: "John", age: 30 };
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key}: ${obj[key]}`);
  }
}


// Print all Even Number 0 to 100
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
        }
}

// ------------------Strings----------------------
/**
 * String is Cnseqence of charcters used to represent text.
 _________Protopyes of String______________
 * Ceate string (let str="Sandip")
 * String Length (str.length)
 * String Indics(str[0],str[1],str[2])
 * e.t.c.....
 */

 let str="sandippanda"
 console.log(str.charAt(4)); // get character at index 4
 console.log(str.length);
 console.log(str.indexOf('p')); // find first occurrence of 'p'
 console.log(str.lastIndexOf('a')); // find last occurrence of 'a'
 console.log(str.toLowerCase()); // convert to lowercase
 console.log(str.toUpperCase()); // convert to uppercase
 console.log(str.concat(" is my best friend")); // concatenation
 console.log(str.slice(6,9)); // slice from 6th position till 9th position
 console.log(str.substring(7,8)); // substring from 7th position till 8th position
 console.log(str.split("pp")); // split the string by 'pp' and return array
 console.log(str.replace(/nd/g,"d")); // replace 'nd' with 'd' globally
 console.log(str.startsWith("san")); // check whether it starts with 'san' or not
 console.log(str.endsWith("da")); // check whether it ends with 'da' or not
