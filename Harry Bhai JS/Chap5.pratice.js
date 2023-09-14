// chap05-01
/* 
let num=[1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,2,12]
let a = prompt("Enter a number ")
a=Number.parseInt(a)
Array.push(a)
console.log(num);
*/




// chap05-02
/*
let num=[1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,2,12]
    let a 
do{
     a = prompt("Enter a number ")
    a=Number.parseInt(a)
    Array.push(a)
    console.log(num);
}while(a!=0)
console.log(num);
*/




// chap05-03
/*
let num=[10,2,3,4,5,60,7,8,9,9,80,7,6,5,4,30,2,2,12]
 let n=num.filter((x)=>{
   return x%10==0
})
console.log(n);
*/





// chap05-04
/*
let num=[1,2,3,4,5,6,7,8,9]
let sqare=num.map((e)=>{
   return e*e
})
console.log(sqare);
*/





// chap05-05
/*
let num=[1,2,3,4,5,6,7,8,9,90]
let sum = num.reduce((h1,h2)=>{
    return h1+h2
})
console.log(sum);
*/