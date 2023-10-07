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
// console.log(a);
// console.log(b);
// console.log(c);

function one() 
{
  const userName = "prince" 

  function two() {
    const website = "youTube"
    console.log(userName)
  }

  //console.log(website);   //can't be accessed bcz it is not its scope as  child  can access parent's variable but parentt can't access child's variable

  two()
}


one()

console.log(add(9));
function add(num) {
  return num +1;
}



  //this is called expression sometime

  // console.log(sum(5)) can't access before initialization
    const sum = function(num) {
  return num +1;
}

console.log(sum(5))



