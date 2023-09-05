// const promiseOne = new Promise(function(resolve, reject){
//    //Do an async task
//    //Network call, Db calls , Cryptography
//    setTimeout(function(){
//     console.log("Async task is completed");
//     resolve()
//    },2000)
// });

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2 done");
//         resolve()
//     },3000)
// }).then(function(){
//     console.log("Promise2 is consumed");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai code", pass: "chai453", email: "code@example.com"})
//     },2000);
// });

// promiseThree.then(function(user){
//     console.log(user);
// });


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
       let error = 0;
       if(!error){
        resolve({email: "jatt@example.com", name: "Kapil chaudhary"})
       }else{
        reject("ERROR: something went wrong")
       }
    },6000)

});

promiseFour.then((user) =>{
    console.log(user);
    return user.email
}).then((email) =>{
  console.log(email);
}).catch(function(err){
    console.log(err);
}).finally(() =>console.log("Promise either resolve or Rejected"))