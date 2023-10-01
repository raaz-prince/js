let score = "33";

console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score);

console.log(typeof valueInNumber);

let sc = "33abc";
console.log(typeof sc);

let value = Number(sc);

console.log(typeof value);

console.log(value); // it's output is NaN which means not a number

/* 
"33" => 33
"33abc" => NaN
true =>1 ; false => 0;
*/

let is = 1
let booleanIs = Boolean(is);
console.log(booleanIs);
console.log(typeof booleanIs);