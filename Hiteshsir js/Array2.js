const alpha=[11,22,33,44,55,66,77,88,99]
// console.log(alpha);
const num=[1,2,3,4,5,6,7,8,9,0]
num.push(alpha)
// console.log(num);

const allnum = alpha.concat(num)
// console.log(allnum);

const allnum2 =[...alpha,...num]
console.log(allnum2);