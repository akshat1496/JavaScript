class user{
    constructor(email,password){
        this.email = email;
        this.password=password;
    }

    get email(){
        return this._email;
    }

    set email(value){
        this._email = value;
    }


    get password(){
        // return this.password.toUpperCase();
        // return this._password.toUpperCase();
        return `${this._password}akshat`;
    }


    set password(value){
        // this.password=value.toUpperCase();
        this._password=value.toUpperCase();
    }
}

const akshat = new user("akshat1496@gmail.com","123");
console.log(akshat.password);
console.log(akshat.email);
const akshat1 = new user("akshat1496@gmail.com","abc");
console.log(akshat1.password);
console.log(akshat1.email);

