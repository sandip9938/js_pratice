// filter()
// map()
// forloop()
// foreach ()
// sort()



// -----usercases
// 1.Write a code to get array of names from given array of users
// 2. get back only active users
// 3.Sort users by age descending

const user = [
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
  { id: "sanju", name: "sanjupanda", isactive: "false", age: 21 },
  { id: "pryal", name: "pandaprayal", isactive: "true", age: 38 },
];

// solution 1 level 1 



const names=[]
// for(i=0;i<user.length;i++){
//     if(user[i].isactive==true){
//         names.push(user[i].name)
//     }

// }
// console.log(names);





// solution 2 level 2



// user.forEach((user) => {
//     names.push(user.name)
// });
// console.log(names);



// solution 3 level 3



// const names1=user.filter((user)=>user.isactive).map((user)=> user.name)

// console.log(names1);




// solution 4 level 4



// user.sort((user1,user2)=>user1.age<user2.age ? -1 : 1)
// console.log(user);








