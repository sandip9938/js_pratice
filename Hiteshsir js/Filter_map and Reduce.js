// *****Filter***** 


const num=[1,2,3,4,5,6,7,8,9,10]

const values= num.filter((num)=>num>=2)



// or 



const values1=num.filter((num)=>{
    return num>=2
})








// ****foreach**** 


const newv=[]

 num.forEach((number)=>{
    if(number>=2){
        newv.push(number)
    }
 })
 console.log(newv);


//  ******map***** 






// or 





const newv1=[]

 num.forEach((number)=>{
    if(number + 10){
        newv1.push(number)
    }
 })
 console.log(newv1);







// chinning 

 
// its use multiple times Map,filter 



// *****reduce****


const mytnum= num.reduce((acc,curvival)=>{
    console.log(`acc is ${acc} and curvival is ${curvival}`);
    return acc+= curvival;

},0)

console.log(mytnum);