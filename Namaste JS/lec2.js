// What happen when you run js code ? 

// Excution context is created by 2 phasese 
// They are Creation phase
// and then  code Execution Phase.


let n=2
function sqare(num) {
   
    var ans = num*num
    return ans 
}
 let sqare2 = sqare(n)

// Call stack maintains the order of excution of excution Contexts 