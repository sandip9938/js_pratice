// use casses

// 1.check if user with sucvh TimeRanges

// learning topic

// set object()
// includes()
// some()
// reduce()
// find ()
// findIndex ()
// concat()

let user = [
    {
      id: "mandip",
      name: "mandippanda",
      isactive: "true",
      age: 28,
    },
    {
      id: "sandip",
      name: "sandippanda",
      isactive: "true",
      age: 24,
    },
    { id: "sanju",
     name: "sanjupanda",
      isactive: "false",
       age: 21
     },

    { id: "pryal"
    , name: "pandaprayal",
     isactive: "true",
      age: 38
    }
  ];

//   level 0

const isnameExist=(user,name)=>{
    let exist=false
for(let i=0;i<user.length;i++){
   if(user[i].name === name) {
    exist = true
   }
}
return exist
}



// level 1



const isnameExist3=(name,user)=>{
 let users = user.find((user)=>user.name === name)
return users
}

// level 2

const isnameExist2=(name,user)=>{
    let index = user.findIndex((user)=>user.name === name)
return index >0
}

// level 3

const isnameExist1=(name,user)=>{
    let users = user.some((user)=>user.name === name)
return users
}

// 2. Adding element to the array

const arr =[1,2]
const append = (arr,ele)=>{

    // method 1
// return[...arr,ele]

// method 2

// arr.push(ele)
// return arr
}
console.log(arr);
console.log(append(arr,3));
console.log(arr);

// 3. REmove dublicates element in the array

const ary1 =[1,2,3,4,5,6,7]
function uniqearray() {
    const unqelement=[]
  ary.forEach((ele) => {
if(!unqelement.includes(ele) ){
    unqelement.push(ele)
}
  })
  return unqelement
}
console.log(uniqearray(ary1);

// level 1

const ary2 =[1,2,3,4,5,6,7]
function uniqearray(arr) {
      return[...new Set(arr)]
    }
console.log(uniqearray(ary2));
console.log(ary);

// level 2

const ary =[1,2,3,4,5,6,7]
const uniqearray=(arr)=> {
   return ary.reduce((acc,ele)=>{
return acc.includes(ele) ? acc : [...acc,ele]
    },[])

     }
     console.log(uniqearray(ary));

// 4. concting the array

const arymerge = (arr1, arr2) => {
  // method 1

  return [...arr1, ...arr2];

  // method 2

  // arr1.push(...arr2)
  // return arr1

  // method 2

  // return arr1.concat(...arr2)
};
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6, 7];
const result = arymerge(arr1, arr2);
console.log(result, arr1, arr2);
