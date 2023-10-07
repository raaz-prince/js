// this refers to current context
const user = {
    username : "prince",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
    }

}

// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()

//console.log(this) //gives empty object

 // ++++++++++++++++++++++Arrow function ++++++++++++++

 const pri = () => {
    let username = "princee"
    console.log(this)
 }

 //pri()

//  const addTwo =(num1,num2) => {
//     return num1 + num2 
//  }

const addTwo =(num1,num2) => num1 + num2  //implicit return
 //if we use curly braces then we have to write "return" keyword and if we don't use curly braces then we can simply do  implicit return 
 console.log(addTwo(2,9));