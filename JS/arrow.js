const user = {
    username: "Ankit",
    price: 899,
    course: "Web development",
    welcomeMessage: function (){
        console.log(`${this.username} ,Welcome to the course`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Manish";
// user.welcomeMessage();

// console.log(this);

/************************arrow function ******** */
const register = () =>{
    let name = "Manu";
    console.log(this.name);
}

// register();

const addTwo =(num1, num2) =>{
   return num1 + num2;
}
console.log(addTwo(45, 50));

addTwo();

//implicit Arrow function
const add =(num1, num2) => num1 + num2;
 console.log(addTwo(45, 50));
 