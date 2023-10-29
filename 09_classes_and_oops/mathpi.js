console.log(Math.PI)
Math.PI = 2196.966
console.log(Math.PI) // we can't change the value because it isn't writeable 
console.log(Object.getOwnPropertyDescriptor(Math,"PI"))

let pri = {
    name : "prince",
    branch : 'cse',
    isNice : true
}

console.log(Object.getOwnPropertyDescriptor(pri,"name"))

// we can change the access by using defineProperty method

Object.defineProperty(pri,'name',{
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(pri,"name"))

console.log(pri.name)
pri.name = "kumar" // the name hasn't changed bcz we make its writable value false
console.log(pri.name)