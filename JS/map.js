const myNum = [1,2,3,4,5,6,7,8,9,10];
//  let Arr = [];
// let newNumb = myNum.forEach((num) => {
//     if(num){
//         Arr.push(num + 10);
//     }
// });
// console.log(Arr);

/***************** MAP function *****************/
// let newNums = myNum.map((num) => num + 10);
// console.log(newNums);

const newNums = myNum
                .map((num) => num * 10)
                .map((num) => num + 2)
                // .filter((num) => num >= 40);
                console.log(newNums);


const coding = ["Python", "Javascript", "java", "Ruby", "C++"];

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values);

/************** FILTER ******************/
const myNums = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10];

// const newNums = myNums.filter((num) => num >= 5);
// console.log(newNums);

// const newNums = myNums.filter((num) => {
//   return num > 5;
// });

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

/*********************************************/
//case1. find the name from given Array
//case2. get back only active user
//case3. sort users by descending order

const users = [
  {
    name: "Ajay",
    age: 21,
    isActive: true,
  },
  {
    name: "Ankit",
    age: 22,
    isActive: true,
  },
  {
    name: "Aman",
    age: 22,
    isActive: false,
  },
  {
    name: "Ritik",
    age: 20,
    isActive: true,
  },
  {
    name: "Fraz",
    age: 34,
    isActive: false,
  },
];

// solution1 level 1
const names = [];
// for (let i = 0; i < users.length; i++) {
//   names.push(users[i].name);
// }
// console.log(names);

// solution 2 level 2
// users.forEach((user) => {
//   names.push(user.name);
// });
// console.log(names);

// //solution 1 level 2
// for (let i = 0; i < users.length; i++) {
//   if (users[i].isActive) {
//     names.push(users[i].name);
//   }
// }
// console.log(names);

//solution 2 level 2
// users.forEach((user) => {
//   if (user.isActive) {
//     return names.push(user.name);
//   }
// });
// console.log(names);

//SORT()
// users.sort((user1, user2) => (user1.age > user2 ? -1 : 1));
// console.log(users);

//solution 3 Pro Method chaining
const name1 = users
  .filter((user) => user.isActive)
  .sort((user1, user2) => (user1.age > user2.age ? 1 : -1))
  .map((user) => user.name);
console.log(name1);

/*************************************************************** */

