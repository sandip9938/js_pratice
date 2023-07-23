function setusername(username){
    this.username=username
}
console.log(setusername());


function createuser(username,email,pasword) {
    setusername.call(username)
    this.email=email
    this.pasword = pasword
}
const chai = new createuser("chai","chai@gmail.com")
console.log(chai);