class user {
    constructor(email,password){

    
    this.password=password
    this.email = email
}
get password(){
    return this.password.toUpperCase()
}
set password(value){
    this._password=value
}

}
const sandip =new user("sandip[@gmail.com","153487467")
console.log(sandip.password);
console.log(sandip.email);