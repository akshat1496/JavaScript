class user{
    constructor (username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const UserOne = new Teacher("akshat","akshat1496@gmail.com","123");
UserOne.addCourses();
UserOne.logMe();

const UserTwo = new user("sjsa","sjdb@googlo.com","1233");
UserTwo.logMe();

// console.log(UserOne instanceof user);        ```user is under Teacher``` 
// console.log(UserOne instanceof Teacher);
// console.log(UserTwo instanceof user);
// console.log(UserTwo instanceof Teacher);

