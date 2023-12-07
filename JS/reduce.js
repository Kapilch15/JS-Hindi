//REDUCE FUNCTION in JS
const arry1 = [1, 2,3,4,5];

// let intialValue = 0;
// const sumValue = arry1.reduce((accumlator, currentValue) => accumlator + currentValue,
//      intialValue
//  )


// const sumValue = arry1.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)
//  console.log(sumValue);

const shopCart = [
    {
        courseName: "JS Course",
        price: 2999
    },
    {
        courseName: "HTML and CSS advance",
        price: 299
    },
    {
        courseName: "MERN Stack course",
        price: 4999
    }
];

let payment = shopCart.reduce((acc, item) => 
    acc + item.price, 0
)
// console.log(payment);