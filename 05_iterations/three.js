// for of

// ["" , "" , ""]  array of strings 
// [{}, {}, {}]    array of objects

const arr = [1,2,3,4,5]

for (const value of arr) {
    console.log(value);
}

const greetings = "Hello! World"
for (const greet of greetings) {
    console.log(`each char is ${greet}`)
}

// Maps  : it doesn't allow duplicates and maintain entry order

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('IN','India')

//console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-' , value)
}