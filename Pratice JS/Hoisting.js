// Hoisting 
console.log(i);
hlo()
function hlo(){
    console.log("hello");
}
var i=10
// access 'i' before initialization when use var


// let i=10
//Cannot access 'i' before initialization when use let



// const i=10
//Cannot access 'i' before initialization when use const





// DEFINATION OF HOISTING :
/*
- In Javascript, function declarations are hoisted to the top of their scope before any code is executed in that scope (this includes variable and constant definitions).

- The hoisting is a process where the interpreter moves all declarations to the top of their scope before code execution, and this also applies for function definitions as

- The JavaScript engine first evaluates the function and then hoists it to its top, so that we can call this function before defining it in our code .


- In JavaScript, function declarations are hoisted to the top of their scope before code execution begins and all variables declared in that block will be available for use


- The JavaScript engine first evaluates all the variable declarations and function definitions before executing any code, so that they are available to be used in the program later on


- The JavaScript engine first evaluates the function and then hoists it to its top, before any other code is executed in that scope or file. This means


- The JavaScript engine first evaluates the function declaration and then assigns it to a variable, which is why we can access this function before its definition in the code


  */

















