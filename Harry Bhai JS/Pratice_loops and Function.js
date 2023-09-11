// Q1 
let marks = {
    sandip:90,
    sanju : 92,
    Ujjal :94,
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The markds of "+Object.keys(marks)[i]+" are " +marks[Object.keys(marks)[i]]);
}


// Q2 
for(let keys in marks){
    console.log(`Students  are ${Object.keys(marks)}`);
}


