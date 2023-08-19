function name(){
console.log('hii');
}
name()
// 

function addteonum(num1,num2){
    return num1+num2;
    
}
console.log(addteonum(12,23));

// 

function user(username){
    if(username === undefined){
        console.log("please enter valid usename plese");
        return
    }
   return `${username} just loged in now !`
    

}
console.log(user());

