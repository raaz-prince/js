const coding = ["js","java","cpp","c","rust"]

// coding.forEach(function (item) {
//     console.log(item);
// })



// coding.forEach( (item) => {
//     console.log(item);
// })



// function printme(item) {
//     console.log(item);
// }

// coding.forEach(printme)


coding.forEach( (item,index,arr) => {
    console.log(item,index,arr)
})
//getting three paramter (value,index,array)



// Array  of Objects and its iteraton
const myCoding = [
    {
        languageName : "java",
        languageFileName :"java"
    },
    {
        languageName : "javacript",
        languageFileName :"js"
    },
    {
        languageName : "python",
        languageFileName :"py"
    },
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
})