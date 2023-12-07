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