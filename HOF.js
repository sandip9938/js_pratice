

const oarr=[1,2,3,4]
const tarr=[2,3,4,5]

const tharr=[...oarr,...tarr]
console.log(tharr);



// clousre 
let score=10
function name() {
    let score = 0
    console.log(score); 
    // Inner scope 
}
name()
console.log(score);
// Outer scope 

