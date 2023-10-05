// Array 
// in java script it allows to put data of more than one data types in array 

const myArr = [1,2, "prince",true]
const heros = ["shaktiman" , "nagraj", "dogra"]

const myArr2 = new Array("prince","kumar",1,3,6,false);
// console.log(myArr[2]);
// console.log(myArr2[5]);

// Array Methods

 myArr.push(4)
myArr.push(5)
// //console.log(myArr);
 myArr.pop()  // delete from last
// //console.log(myArr);

// //unshift : use to add at first
 myArr.unshift(9)
// console.log(myArr);

myArr.shift()  //remove from first index
// console.log(myArr);

//console.log(myArr.includes(9)); // use to find presence
//console.log(myArr.indexOf(9)); //get index

const newArray = myArr.join() // add the elements of an array to a string

//console.log(newArray);

// Slice : returns a section of an array and doesn't include last index

const my1 = myArr.slice(1,3)
console.log("A - original array :- "+myArr);
console.log("After slice : "+my1);

//splice : delete the elements from the array including the last index 
console.log("B original : "+ myArr);
const my2 = myArr.splice(1,2)

console.log("after splice : "+my2);
console.log("C  Original Array : "+myArr);

