class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptpassword(){
        return`${this.password}abc`
    }
}

const chai = new user ("chai","chai@gmail","jnhfufhujgh")
//creating an object of class 'user' with username as "chai", email id as "
console.log(chai.encryptpassword());