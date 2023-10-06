/*   SCOPE of a variable
 let - within function or (block)
  const - within function
  var -  global scope
*/
let a = 20
const b = 30
var c = 8

if(true) {
    let a = 40
    const b = 60
    var c = 16
}
console.log(a);
console.log(b);
console.log(c);