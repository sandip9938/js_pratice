//-------Promises--------
const PromiseOne=new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Aynce task is complete");
        
    },1000)
})
PromiseOne.then(function () {
    console.log("Promise consumed");
})