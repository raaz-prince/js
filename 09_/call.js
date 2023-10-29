// call is used when we want to set a variable of a function by the help of other function then we have to use call with function name
function setUsername(username) {
this.username = username
}

function createUser(username, email, password) {
    setUsername.call(this,username)

    this.email = email
    this.password = password
}

const us = new createUser("prince","pr@prince.com","razz-prince")

console.log(us)