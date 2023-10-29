class user {
    constructor(username) {
        this.username = username
    }

    logme() {
        console.log(this.username)
    }
}

class teacher extends user {
    constructor(username,email,password) {
        super(username)
        this.email=email
        this.password= password
    }
}

const tc = new teacher("pri","ra@gmail.com","587")
const pc = new user("kri")
tc.logme()
console.log(pc instanceof teacher)