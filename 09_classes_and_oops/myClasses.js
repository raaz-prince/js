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