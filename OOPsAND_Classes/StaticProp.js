class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // Using "static" do not give access to Each instances only give this property to specific Instances.
        return `123`;
    }
}

const UserOne = new User("Akshat");
// console.log(UserOne.createId());

class Teacher extends User{
    constructor(username ,email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("IPhone 15" , "Iphone@apple.com");
iphone.logMe();
console.log(iphone.createId());