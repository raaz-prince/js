class user {
    constructor(username,password, email) {
        this.username = username
        this.password = password
        this.email=email
    }

    encryptPassword() {
        return  ` ${this.password}abc`
    }
}

const pk = new user("prince","123","pk@gmail.com")
console.log(pk.encryptPassword())

//behind the scene

function User(username, email, password) {
    this.username= username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.changeUserName = function() {
    return this.username.toUpperCase()
}

const dk = new User("pri","krp@gmail.com","jlklkjf")
console.log(dk.changeUserName())