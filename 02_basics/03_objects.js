//singleton
//object.create()  by constructor

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "prince",
    "full name" : "Prince Kumar",
    [mySym]: "mykey1",
    age : 19,
    locaton : "bhagalpur",
    email : "prince@gmail.com" ,
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(jsUser)

