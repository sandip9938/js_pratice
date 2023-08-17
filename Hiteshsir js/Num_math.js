const score =500
const balance = new Number(200.1234567890)


console.log(balance);
// output=[Number: 200.123456789]


console.log(balance.toExponential());
//output=2e+1


console.log(balance.toFixed());
//default is two decimal places


console.log(balance.toLocaleString());
// default locale


console.log(balance.toPrecision());
// default precision is six digits after the decimal point


console.log(balance.toString());
// output=200.123456789


console.log(balance.valueOf());
// output=200.123456789



// ************************MATHS*************************



console.log(Math.floor(Math.random()*100));
// random number between [0,100)