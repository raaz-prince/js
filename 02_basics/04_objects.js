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

//console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1 :"a", 2 : "b"} 
const obj2 = {3 :"a", 4 : "b"} 

//const obj3 = {obj1 , obj2} ;
//const obj3= Object.assign({},obj1,obj2) //gurantee combination by using curly braces "{}" used as target

const obj3 = {...obj1 , ...obj2}
//console.log(obj3);

//console.log(Object.keys(regularUser));
//console.log(Object.entries(regularUser)); //get key , value pair



const  course = {
    coursename : "js in sanskrit",
    price : "999",
    courseInstructor : "prince"
}

//course.courseInstructor may be written as below syntax when we have to use it more no. of times
const {courseInstructor : instructor} = course ;  // value destructuring

//console.log(courseInstructor);
console.log(instructor);

// API : Application Program Interface 


/*  These data are in json format of object type
{
     "name" : "prince",
     "coursename" : "js in hindi",
     "prince" : "free"
 } */
   

 // array type api handling
[
    {},
    {},
    {}
]