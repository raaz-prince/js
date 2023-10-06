function sayMyName(){
console.log("P");
console.log("R");
console.log("I");
console.log("N");
console.log("C");
console.log("E");
}

//sayMyName();

function addTwoNumbers(number1, number2)  //function defintiton :-  parameter   and during function call it called arguments
{
    return (number1 + number2)
}

const result = addTwoNumbers(5,6)
//console.log(result)

function loginUserMessage(username) 
{
    if(username != null)
    return `${username} just logged in `
    else 
    return `please enter user name`
}

const p = loginUserMessage()
//console.log(p);

// Rest operator   ...variable name

function calculateCartPrice(...num1) 
{
    return num1;
}

//console.log(calculateCartPrice(100,200,300));

const user = {
    username : "prince",
    price : 200
}

function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user);

handleObject({
    username : "kumar",
    price : 500
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray) 
{
    getArray[1]=200 //change the content of actual array
    return  getArray[1]
}

console.log(returnSecondValue(myNewArray));
//we can also pass array directly to functions instead of passing it through variable name
console.log(myNewArray);