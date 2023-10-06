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
console.log(p);