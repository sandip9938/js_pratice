// Memory is 2 types 
// 1.Stack(primitive)
// 2.Heap(non-primitive)


let myName="sandip"
//stack memory allocation
console.log("my name in stack",myName); //output sandip

function test(){
    let myname = "sanket";
    console.log('my name inside function',myname);// output undefined
    // Heap memory 
    return;
    }
test()