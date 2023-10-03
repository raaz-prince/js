//dates always stored in millisecond 
//starts from january 1 , 1970

let myDate = new Date()
// console.log(myDate.toString());
 console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// month starts from 0 index in javascript
// 0 for january

//let myCreateDate = new Date(2023  ,0, 14)
let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreateDate.getTime())

let newDate = new Date()
console.log(newDate.getMonth()+ 1)

console.log(newDate.toLocaleString(`default`,{
    weekday : "short"   
}));