let score = "33";

// console.log(typeof score);
// console.log(typeof(score));


let valueInNumber = Number(score);

//console.log(typeof valueInNumber);

let sc = "33abc";
//console.log(typeof sc);

let value = Number(sc);

//console.log(typeof value);

//console.log(value); // it's output is NaN which means not a number

/* 
"33" => 33
"33abc" => NaN
true =>1 ; false => 0;
*/

let is = 1
let booleanIs = Boolean(is);
//console.log(booleanIs);
//console.log(typeof booleanIs);

//********************* OPERATIONS************** */

console.log(2+2)
console.log(1+"2")
console.log(1+"2")
console.log("1"+2+2)  //122

console.log(1+2+"2")   //32
//if string is at first then all are treated as string and if string is present at last then the conversion is done before string

console.log((3+4) *3 %7)

