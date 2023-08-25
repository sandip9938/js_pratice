// js and Node.js 



// Node.js =>  Its not a programming language , JS can Excuted inside the computers also  ,its use backend devloper , its was Asyncronous event driven runtime of js

// V8 Engine 


// JS => Its a prograaming language ,  Browser base language , its use frontend devloper


// Java= JVM

// Javascript = NODE.JS


// NPM => Node Package Manager 




// Syncronous And Asyncronous 

// sync - its work one after one 

// async - it can run in parallel





// sync example 
const addSync = (a, b) =>{
    return a +b; // return is the value that we want to get back from this function
    }
    console.log(addSync(10,2));




    // async example
    const addAsync =(a,b)=>{
        return new Promise((resolve,reject) => {
            if(!Number.isInteger(a)||!Number.isInteger(b)){
                reject('not an integer');
                }else{
                    resolve(a+b);
                    }
                    })};
                
                    console.time();
                    console.log(addAsync(5,'hello'));





// Callback Hell
// Promises
// async/await
// ES6+
// Typescript


