// for

for (let index = 0; index < 15; index++) {
    const element = index
    if(element == 5) {
        console.log(` 5 detected`);
        break;
    }
    console.log(element);
    
}
for (let index = 0; index < 15; index++) {
    const element = index
    if(element == 5) {
        console.log(` 5 detected`);
        continue;
    }
    console.log(element);
    
}

// break : used to come out from loop
// continue : skip the statemnts after it and start checking again

let myArray = ["flash","superman","batman","nagraj"]

// for(let a= 0 ; a < myArray.length ; a++) {
//     console.log(myArray[a]);
// }