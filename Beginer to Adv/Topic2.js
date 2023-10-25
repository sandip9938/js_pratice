// ---------------Var , Let and Const---------------------
/*
`var`, `let`, and `const` are all used to declare variables in JavaScript, but they differ in terms of scope, hoisting, and mutability. Here's a brief explanation of the differences:

1. **`var`**:
   - Function-scoped: Variables declared with `var` are function-scoped, meaning they are only accessible within the function they are declared in.
   - Hoisting: Variables declared with `var` are hoisted to the top of their containing function or global scope, which means you can use them before they are declared.
   - Reassignment: You can reassign and redeclare a variable declared with `var`.
   - Example:
     ```javascript
     function example() {
       if (true) {
         var x = 10;
       }
       console.log(x); // Outputs 10 (accessible outside the if block)
     }
     ```

2. **`let`**:
   - Block-scoped: Variables declared with `let` are block-scoped, meaning they are only accessible within the block (e.g., if statement or loop) they are declared in.
   - Hoisting: Variables declared with `let` are hoisted to the top of their block but are in a "temporal dead zone" until they are actually declared.
   - Reassignment: You can reassign a variable declared with `let`, but you can't redeclare it in the same scope.
   - Example:
     ```javascript
     if (true) {
       let y = 20;
       console.log(y); // Outputs 20 (accessible within the if block)
     }
     ```

3. **`const`**:
   - Block-scoped: Variables declared with `const` are also block-scoped, like `let`.
   - Hoisting: Variables declared with `const` are hoisted to the top of their block but are also in the "temporal dead zone" until they are actually declared.
   - Immutability: Variables declared with `const` cannot be redeclared or reassigned after their initial value is assigned. However, if the variable is an object or an array, its properties or elements can be modified.
   - Example:
     ```javascript
     const z = 30;
     // z = 40; // This will cause an error because reassignment is not allowed
     ```

In modern JavaScript, it's recommended to use `let` and `const` over `var` because they provide better control over variable scoping and help prevent common issues associated with hoisting and unintended variable reassignments. Use `let` when you need to reassign a variable, and use `const` for variables that should not be reassigned. 
*/