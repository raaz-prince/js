const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//map is used to do some specific task on each element and return to array
//const newNums = myNums.map( ( num) => num+10 )
//console.log(newNums);

const newNums = myNums
.map((num) => num * 10)
.map((num) => num + 1)
.filter( (num) => num>50);

console.log(newNums);

//we can do chaining as many times as we want 
