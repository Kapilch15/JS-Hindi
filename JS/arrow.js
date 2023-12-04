const user = {
    username: "Kapil",
    price: 599,
    book:  "WEB 3.0",
    welcomeMsg: function () {
        console.log(`${this.username} , welcome to Library`);
        console.log(this);
    }
}

// user.welcomeMsg();
// user.username = "Sameer";
// user.welcomeMsg();

// console.log(this);

// function chaiCode () {
//     let username = "Kapil"
//     console.log(this.username);      //Here we cannot access variable with 'this' keyword
// }

// chaiCode();

//FUNCTION DECLARATION : (arrow function)
// const chaiCode = () =>{
//     let username = "Kapil";
//     console.log(this.username);
// }
// chaiCode();

//  const addTwo = (num1, num2) => {
//     return num1 + num2;
//  }
//  console.log(addTwo(13,7));

 //Implicit function
//  const addTwo = (num1, num2) => num1 + num2;
//  console.log(addTwo(34, 409));


const addTwo = (num1, num2) =>( { username: "UserName"})
console.log(addTwo(20, 20));
