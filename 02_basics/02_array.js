const marvel_heros = ["thor", "Ironman" , "spiderman"]
const dc_heros = ["superman","flash","batman"]


// array can take any data eg. it can take arrays 
//marvel_heros.push(dc_heros)
 //console.log(marvel_heros);

 const heros = marvel_heros.concat(dc_heros)
 //concat return new array after concating
 //console.log(heros);

 const all_heros = [...marvel_heros, ...dc_heros]  //this is spread operator
 //console.log(all_heros);   

 const another_array = [1,2,3,[4,5,6],7,[5 ,[8,9]]]
 console.log(another_array.flat(Infinity));  

 //flat : used to spread automatically give depth as parameter 

 console.log(Array.isArray("prince"));
 console.log(Array.from("prince")); //converting string in array
console.log(Array.from({name : "prince"}));

let score1 = 100;
let score2 = 200;
let score3 =300;

console.log(Array.of(score1,score2,score3));