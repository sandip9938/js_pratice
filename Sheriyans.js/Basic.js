// **********************1.js**************** //

// where - is used its a basic core concepts and where -- is used its a very important concept 

//*******  2.-word vs keyword *********//

// word=word is not a  js ,its doesnt any meaning in js laguage
// keyword = keyword is a  js,its a meaningfull word in js

// *************3.--variable and constant , let *******************//
// Variables=code me koyi data store karne ke liye jisko use karte he ye he variables ,its a Repetable also , EX-
var name="sajal";
console.log(name);

// Constant=constant code me koyi data store karne ke liye jisko use karte he ye he constants.its not repeatble, EX-
const name1 ="sandip"
console.log(name1)

// Let = its exactly same types in variables but now also used let not used a variables.
let age;
console.log(age);


// 4.--the diffrence 
// 5.--window Object
// 6.--browser context api
// 7.--stack
// 8.--heap memory
// 9.--excution context
// 10.-- lexical scope
// ******************************11.-hoisting********************** //
// Hoisting= variables and function are Hoisted which means their declartion is moved on top of code. EX-
function hoist() {
    console.log("Hoisting");
    }
    hoist();
//  undefined= its have existance
// non-defined = its not existnce



// ************12.-types in js***********************//
// its a two types 
//1. primitive type and 2.non primitive type

// primitives data= When its value copy but, actually real value not copied its types dtattypes are primitive dtattypes.Here only pass the reference value.

// Number= Ex-
let Number=5
console.log(Number);

// string= Ex-
let String='hello';
console.log(String);

// boolean= Ex-
let Boolean=true;
console.log(Boolean);

// undefined= Ex-
let Undefined;
console.log(Undefined);

// null= Ex-
let Null=null;
console.log(Null);

// Symbol= Ex-
let Symbol=Symbol('my symbol');
console.log(Symbol);

// BigInt= Ex-
let BigInt=BigInt(30000000000000000000000)
console.log(BigInt)


// Non-primitives datatypes = When its value copy but, Here  actually real value  copied ,its types dtattypes are Non-primitive dtattypes.

// Object= Ex-
let Object={name:'john'};
console.log(Object);

// Array= Ex-
let Array=[1,2,3];
console.log(Array);

// Function= Ex-
let Function=function(){return 'Hello World!'}
console.log(Function);

// Date= Ex-
let Date=new Date();
console.log(Date);

// RegExp= Ex-
let RegExp=/^[a-z]+$/i;
console.log(RegExp);

// Error= Ex-
let Error=new Error("My error message");
console.log(Error);

// Promise= Ex-
let Promise=new Promise((resolve)=>{setTimeout(()=>{resolve('Resolved')},100)}).then((value)=>
console.log(value));

// WeakMap= Ex-
let WeakMap=new WeakMap();
console.log(WeakMap);

// WeakSet= Ex-
let WeakSet=new WeakSet();
console.log(WeakSet);

// Proxy= Ex-
let Proxy=new Proxy({},{});
// Reflect= Ex-
let Reflect=Reflect.getPrototypeOf({});
console.log(Reflect);

// Math= Ex-
let Math=Math.abs(-5);
// JSON= Ex-
let JSON=JSON.stringify([1,2,3]);











// 13.--how to copy reference values


//************** */ 14.--conditionals  15.-if else else-if*************** //
// if = when you use either its topic or others topic its called if condition, Ex-
let x=true;
if (x) {
    console.log("I am true")}else{
        console.log("I am false")}


//else-if =  when you use both of them its called else if condition, Ex-
let y=false;
if (y) {
    console.log("I am true")}else if(!y){
        console.log("I am false")}
        else{
            console.log("I am neither true nor false")}
        


//switch = When you choose in multiple option ,when it excute correct option after code is stop in this type condition called switch statment. Ex-
let key = 123
switch (key) {
    case one:12
        
        break;
        case ontwo:123
        
        break;
        case one:11
        
        break;
        case one:10
        
        break;
        case one:11
        
        break;

    default: 15
        break;
}

//continue= its only use corect option print but after other option already continue
for(i=0; i<10; i++){
    if(i==5){
        continue;}
        console.log("The number is " + i);}












// 16.-- truthy vs falsy
// 17.--switch


//********************* */ 18.--Loops**************** //
// loops= its repeatedly run .


// for loop= it repeatly run the code inside of the curly braces until the condition becomes false and then stops running the code in the , it runs once and then repeats the same code again until a condition becomes true or false.it repeatly run the code in bracket with different value of variable which we define before that bracket .it repeatly run the code in bracket and increase the value of variable by one each time until reach to max limit that we. 

// Example of for loop=
 for(initialization; condition; increment/decrement){
        //     code block to be executed
    statements;}






// while loop= it runs once and then repeats the same code again until a condition becomes true or false .
// Example of while loop= 
while (condition) {
    //   code block to be executed
    statements;}




// do-while loop= it runs once and then repeats the same code again until a condition becomes true or false .
// Example of do-while loop=
do{
    //   code block to be executed
    statements;}while(condition);



// break statement= it stops running the code inside of any kind of loop when that particular condition becomes true or false .its only use correct option print but after other option already break .


// **********************19.--Functions *********************//
// function defination = when the code we are not use immdeatly , but use in fututure times its called function . 2. when you reuse the same code its also called a function . 3. when your code running repeatly a different data its also a function. 
// Example of function =
 function name(){
    //code block to be executed
    console.log("sandip");
 }
 name()

// types of function = 
// 1.) normal functions= they are defined by using keyword "function" followed by giving them names and finally ending with curly braces containing
function greeting(){
    console.log("hello world")}
    greeting();

// Arrow function = its another type of function . Ex-
const sum=(a,b)=>{return a+b}

// arguments defination = its a real values 
sum(20,30)
// parameters = here store the values .




// *********************20.--Arrays *********************//
//Arrays defination = Array is stored a many values in orderly . Group of values store in one place its also called a arrays.
// Array declaration = we can declare an array using var , let keyword .
let array=[];
array[0]=5;
console.log(array[0]);







// 21.--Objects
// 22.--Events
// 23.--DOM Manipulation
// 24.--AJAX
// 25.--JSON
// 26.--Regular Expressions
// 27.--Promises
// 28.--Maps and Sets
// 29.--Web Storage
// 30.--Cookies
// 31.--HTTP Request Methods
// 32.--HTTP Response Status Codes
// 33.--HTTP Headers
// 34.--CORS
// ******************35. push,pop and shift,unshift****************** //

// push = push is used pushed the number or values in array . Ex-
var arr=['a','b'];
arr.push('c');
console.log(arr);

// pop = pop is used pop or remove neumber or values in array. Ex-
var arr=['a','b']
arr.pop()
console.log(arr);

// unshift = unshift is used to add new numbers or values at first position  in array . Ex-
var arr=['a','b'];
arr.unshift(['d', 'e'])
console.log(arr);

// shift = shift is used to remove numbers or values from first position in array . Ex-
var arr=['a','b'];
arr.shift();
console.log(arr);

// Array prototypes list =
// concat = concat is used to combine two arrays into one single array . Ex-
var arr1=['a','b'],
arr2=['c','d']
arr1.concat(arr2)

// slice = slice is used to copy a part of an array into another array . Ex-
var arr1=['a','b'],
arr2=arr1.slice(1),
arr3=arr1.slice(-1),
arr4=arr1.slice(),
arr5=arr1.slice(null)
console.log(arr2,arr3,arr4,arr5);


// splice = splice is used to delete a part of an array and insert other elements into that deleted part of an array . Ex-
// splice = splice is used to delete or remove elements from an array . Ex-
var arr1=['a','b'],
arr2=arr1.splice(1),
arr3=arr1.splice(-1),
arr4=arr1.splice(),
arr5=arr1.splice(null);
console.log(arr2,arr3,arr4,arr5);


// indexOf = indexOf is used to find the location of element in array . Ex-
var arr1=['a','b'],
index1=arr1.indexOf('a'),
index2=arr1.indexOf('b')
console.log(index1,index2);



// lastIndexOf = lastIndexOf is used to find the location of last occurence of element in array . Ex-
var arr1=['a','b'],
index1=arr1.lastIndexOf('a'),
index2=arr1.lastIndexOf('b')
console.log(index1,index2);


// every = every is used to check if all elements in array satisfy condition specified by callback function . Ex-
// every = every is used to check whether all elements in array pass test condition . Ex-
var arr1=['a','b'],
result1=arr1.every((element)=>{return (element==='a' || element === 'b');});
console.log(result1);


// some = some is used to check whether any elements in array pass test condition . Ex-
var arr1=['a','b'],
result1=arr1.some((element))=>{return (element==='a' || element === 'b');};
console.log(result1);


// forEach = forEach is used to execute function on each element present in array . Ex-
var arr1=['a','b']
arr1.forEach((element)=>{});


// map = map is used to create a new array with the results of calling a provided function on every element in the calling array .  map is used to create a new array with the results of calling a provided function on every element in the calling array .map is used to create a new array with results returned by calling function once per element in original array . map is used to create a new array with results returned by callback function executed on each element of source array . Ex-











