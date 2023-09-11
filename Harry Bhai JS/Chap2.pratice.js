// Chap02=01
let a = prompt("What is your Age");
if (10 < a && a < 20) {
  console.log(` Your Age is ${a} lies bte'n 10 to 20`);
}
// Here prompt nut run so pls use the boser inspection option.

// Chap02=02
let day = prompt("Please give day name");
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("today is Wednesday");
    break;

  default:
    alert("Wrong input");
}
// Here prompt nut run so pls use the boser inspection option.




// Chap02=03
let num = prompt("Please give num");
num=Number.parseInt(num)
if(num%2==0 && num%3==0){
    console.log(`${num} is divisible by both 2 and 3`)   }else{alert('Not divisible')
}
// Here prompt nut run so pls use the boser inspection option.


