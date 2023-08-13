// Object literal 

const user ={
    name: 'John',
    age : 30,
    isMarried: true, // boolean value
    getusrdetails:function () {
        console.log(this);
    }
}
console.log(user);

// const promiseOne= new Promise()
// const date =new Date()

console.log(user.constructor);