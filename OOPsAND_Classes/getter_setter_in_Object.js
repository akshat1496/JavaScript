const User = {
    _email: "akshat1496@gmail.com",
    _password:"123",

    get email(){
        return this._email;
    },
    set email(value){
        this._email = value;
    }
}

const userOne = Object.create(User)
console.log(userOne.email);