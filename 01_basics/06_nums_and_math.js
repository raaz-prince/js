const score = 100
//console.log(score);

const balance = new Number(400);
//console.log(balance);

//console.log(balance.toString().length)

//console.log(balance.toFixed(2)); //used to give precision value

const num = 112.4565
//console.log(num.toPrecision(6))

const number = 15486255
//console.log(number.toLocaleString('en-IN')) //used to get value in desired standard

//console.log(Number.MAX_VALUE)

// ++++++++++++++++ MATHs ++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-5));
// console.log(Math.round(5.8));
// console.log(Math.ceil(5.3));
// console.log(Math.floor(5.3));
// console.log(Math.min(4,4,6,2,2,1));
// console.log(Math.max(5,6,87,65));

//random funtion  => gives value between 0 and 1 

console.log(Math.random());

console.log((Math.random()*10) + 1);

const min= 10 
const max = 20

console.log(Math.floor(Math.random()*(max-min + 1 )) + min)  
// (max - min + 1) + min  this is used to get the value between two given ranges