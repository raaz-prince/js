// Nesting in object 


const regularUser = {
    name : "prince",
    email : "some@yahoomail.com",
    fullName : {
        userFullName : {
            firstName : "prince",
            lastName : "kumar"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1 :"a", 2 : "b"} 
const obj2 = {3 :"a", 4 : "b"} 

//const obj3 = {obj1 , obj2} ;
//const obj3= Object.assign({},obj1,obj2) //gurantee combination by using curly braces "{}" used as target

const obj3 = {...obj1 , ...obj2}
console.log(obj3);

console.log(Object.keys(regularUser));
console.log(Object.entries(regularUser)); //get key , value pair