function multipli5(num) {
    return num*5
}
multipli5.power = 2
console.log(multipli5(5));
console.log(multipli5.power);
console.log(multipli5.prototype);



function createuser(user,score) {
    this.user=user
    this.score=score;
}
createuser.prototype.increment=function() {
   this.score++
}
createuser.prototype.printMe=function() {
  console.log(`score is ${this.score}`); 
 }
const chai = new createuser("chai",20)
const tea =new createuser("tea",5)
console.log(createuser());