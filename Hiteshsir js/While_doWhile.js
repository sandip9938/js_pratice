for (let index = 0; index < 15; index++) {
    const element = index;
    console.log(element); 
}

// Number Table 

for(let i=1;i<=10;i++){
    console.log(`outer loopp value: ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`inner loop value is : ${j}`);
        console.log(i+'*'+j+'='+i*j);
    } 
}



// Table of numbers from one to ten in a single line using loops and conditionals
const tableOfNumbersOneToTen = () => {
    let result = '';
    // Write your code here...
    return result;
    };
    console.log('Table of Numbers From One To Ten');
    console.table([
        [ '1',  2,   3],
        ['4',    5 ,6 ],
        [7,'8','9']]);
        console.log('\n\n')

// break statement
for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log(`detected is 5`);
        break
    }
    console.log(`Value of i is ${index} `);
}

// continue statement 

for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log(`detected is 5`);
        continue
    }
    console.log(`Value of i is ${index} `);
}

// **************** while **********

let i =0
while (i=10) {
    console.log(`value of index is ${i}`);
}

