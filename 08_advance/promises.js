const promiseOne = new Promise(function(resolve, reject) {
    //do async task
    //db calls , cryptographt , network
    setTimeout(() => {
        console.log('Async task is completed');
        resolve()
    }, 1000);
})

promiseOne.then((result) => {
    console.log("promise consumed");
})


new Promise(function(resolve,reject) {
    resolve()
}).then(()=>{
    console.log("promise executed");
})

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({username : "Prince kumar" , email : "krprince@gmail.com"})
    }, 1000);
})

promiseThree.then((result)=>{
    console.log(result.username)    //passing value to then
})


const promiseFour = new Promise((resolve,reject) => {
    setTimeout(()=>{
        let error = false
        if(!error) {
            resolve({username : "prince" , password : " Pirates_of_carribean"})
        }
        else {
            reject("something went wrong")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
})
 .catch((message)=>{
    console.log(message)
 }).finally(()=>{
    console.log("doesn't care about resolve and reject")
 })

 const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(() => {
        let error = false
        if(!error) {
            resolve({username : "javascript", password : "123"})
        }
        else {
            reject('ERROR : js went wrong')
        }
    }, 1000);
 })

 async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    }
    catch(error) {
        console.log(error)
    }
    
 }

 consumePromiseFive()

 //async function always return promise if we made it return a value , then it wrap the data into promise and then return it

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data)
//     }
//     catch (error) {
//         console.log("E : error");
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    return response.json()
}).then(data => console.log(data))
.catch((error) => {
    console.log(TypeError)
})

// fetch api  => 
// micro task queue or priority queue  : that's why its contain added to call stack first


// every response that comes from network request goes into resolve() array that includes error codes also

// if request doesn't caleed then that error goes into rejection() array