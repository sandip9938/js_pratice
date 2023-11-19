// Defination of Comments
//--------------Noraml English use to understanding its called Comments. Its help to understanding for Devlopers.-----------Single line comment define by '//'----- Multiple line comment define by '/* */'------

//****** Opreator in js ******
/*

1.Arithmatic Opreator
(+,-,*,/,%,Increment(++)(a++ Postincrement)(++a Preincrement),Decrement(--)(a-- Postincrement)(--a Preincrement),Exponention(**))


2.Assignment Oreator
(+=,-=,)


3.Comparison opreator
(<,>,>=,<=,==,===,!=,!==)


4.Logical Opreator
(&&,||,!)

 */

//Condition

//If Else
let age = 20;
if (age > 18) {
    console.log("You are eligible for voting");
} else {
    console.log("Sorry you can't vote yet")
}


//Switch case
let day = new Date().getDay();
switch (day) {
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;
}


//Ternary Opreator
let x = 10;
x < 5 ? console.log('less than 5') : console.log('not less than 5');