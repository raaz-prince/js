class user {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(this.username) 
    }


    static createId() {
        return `123`
    }
}

const pk = new user("prince")
pk.logMe()
//console.log(pk.createId())   we can't access a static function by the object . We can access it with the help of class name

class teacher extends user {
    constructor(username,email) {
        super(username)
        this.email=email
    }
}

const phone = new teacher("new phone","ph@phone.com")
phone.logMe()
//console.log(phone.createId())