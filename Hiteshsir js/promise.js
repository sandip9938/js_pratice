const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise iws consumed");
});
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async resolve 2");
});
const promethree = new Promise(function (resolve, rejec) {
  setTimeout(() => {
    resolve({ username: "sandip", email: "sandippanda577@gmail.com" });
  }, 1000);
});
promethree.then(function (user) {
  console.log(user);
});

const promiosefour = new Promise((resolve, reject) => {
  setTimeout(() => {
    //   let error=false;
    //  let error=true;
    let error = false;
    if (!error) {
      resolve({
        username: "sandip",
        email: "sandippanda577@gmail.com",
        password: "1257953",
      });
    } else {
      reject("ERROR:404 not found");
    }
  }, 1000);
});
promiosefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(()=>{
    console.log('Finally block executed');
  })

  const promiseFive = new Promise(function (resolve,reject) {
    setTimeout(() => {
        //   let error=false;
        //  let error=true;
        let error = false;
        if (!error) {
          resolve({
            username: "js",
            email: "js577@gmail.com",
            password: "126666653",
          });
        } else {
          reject("ERROR: js 404 not found");
        }
      }, 1000);
  })
  promiseFive.then()

  async function getalluser() {
  try {
    const response= await fetch('hstwsujhrkgjbhrbjkb.hdgfgg')
    console.log(response);
    const data=response.json()
    console.log(data);
    
  } catch (error) {
    console.log(error);
  }
  }
  getalluser()