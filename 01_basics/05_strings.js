let name = "Prince"
const repoCount =2
//console.log(a+b+" value")

//in modern days it is done by using backtics (`) called string interpolation 

//Here we are creating a placeholder where we substitues the value of const , literal , etc. in string

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const Name = new String("Prince_Kumar");
console.log(Name.__proto__);
console.log(Name.toUpperCase())

//substring :  doesn't include last index
const newString = Name.substring(0,5);
console.log(newString);

//slice method :   it can take negative value , if we provide negative value it print in reverse order 

const anotherString = Name.slice(0,5);
console.log(anotherString);

// split : it is used to split the string based on some seperator

const raju = "prince-kumar-computer-science";
console.log(raju.split('-'));