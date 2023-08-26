for(let i=0; i<5; i++){
    setTimeout(() =>{
        console.log(i);
    },2000)
}

for(var m=0; m<5; m++){
    setTimeout(() =>{
        console.log(m);
    },2000)
}

/****************scope in JS **********************/

//var can be used in function (function scope)
// var username = "rakesh";
// function login(){
//     console.log("Jhon doe");
// }
// console.log(username);


//block scope
let user = "Rakesh";
if(true){
  let user = "Jhon dowe";
}

console.log(user);