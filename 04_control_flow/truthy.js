//falsy value
//false , 0, -0 , BigInt 0n , "" ,null ,undefined , NaN 

//truthy value
//"0" , 'false' ," " ,[] ,{} ,function() {}

//object 
const emptyObj = {}

if(Object.keys(emptyObj).length ===0 ) {
    console.log("object is empty");
}


// Array
const emptyArray= []
if(emptyArray.length === 0) {
    console.log("Array is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
val2= null ?? 5
val3 = null ?? 5?? 10
val4 = undefined ?? 50

console.log(`${val1}   ${val2}  ${val3}  ${val4}`);

//terniary operator
// condition ? (if true) : else

console.log(4<5 ? "smaller" : "bigger") 

// ===  used to check content and data types also called strict check