// # Primitive data types 

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 10.56
const isLogged = true
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

 const bigNumber = 333357955545656n
console.log(typeof bigNumber)


// Reference (Non Primitive)

//Array  , Object , Functions

const heros = ["shaktiman", "nagraj" , "doga"]
let myObj = {
    name: "Prince",
    age : 19,
}

const myfunction=function() {
    console.log("Hello! World");
}

//typeof is used to get the data type of a variable

console.log(typeof myfunction)
console.log(typeof userEmail); // undefined bcz we haven't define anything yet

console.log(typeof outsidetemp);  //object 

//+++++++++++++++++++++++++++++

//Memory
// Stack (Primitive) and Heap (non - primitive)

let myYouTubeName = "Prince"

let anotherName = myYouTubeName
anotherName="Kumar"

console.log(myYouTubeName)
console.log(anotherName)

let user = {
    email : "krprince006@gmail.com",
    upi : "raj@ybl"
}
console.log(user.email)

let user2 = user
user2.email = "razz.aryan.kr@gmail.com"

console.log(user.email)