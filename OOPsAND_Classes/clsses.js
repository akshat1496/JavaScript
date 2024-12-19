class User {
    constructor(username ,email,password){
        this.username = username ;
        this.email = email;
        this.password = password;

    }
    encryptPassword(){
        return`${this.password}abshsb`;
    }

    changeUser(){
        return`${this.username.toUpperCase()}`;
    }
}

const UserOne = new User ("akshat","akshat1496@gmail.com",'144');

console.log(UserOne.encryptPassword());
console.log(UserOne.changeUser());


