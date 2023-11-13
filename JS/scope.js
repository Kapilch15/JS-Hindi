function one() {
    const username = "kapil here";

    function two() {
      const company = "CREED";
    //   console.log(username);
    }
    //  console.log(company);

    two();
}

one();

/************************ HOISTING  ****************************** */
//Hoisting 
// console.log(username);
//  let username;

 //function hoisting
//  addition();
//  add();


//  function addition(){
//    console.log("Learn hoisting");
//  }

//  const add = function () {
//     console.log("Learn hoisting");
//  }

// arrow function (hoisting)
add();

var add = () =>{
    const num = 10;
    console.log(num);
}

console.log(num);