// Object literals.

const user  ={
    username:"akshat",
    loginCount:8,
    signedIn:true,
    getUserDetails: function () {
        // console.log(`Got user datails.`);
        // console.log(`Username: ${username}`);  -> Gives error as the username is defined outside function scope.
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());


// Constructor Methods:- 

// const promiseOne = new Promise();
// const date = new Date();

/* Here 'new' keyword is constructor that mmmake new Instances.*/

function User(username,loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetFunction= function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;//  return this is implicitly defined and it return this by default if we don't call it.
    }

// const userOne = User("Akshat",12,true);
// const userTwo = User("Shia",1,false);
// console.log(userOne);

const userOne = new User("Akshat",12,true);
const userTwo = new User("Shia",1,false);
console.log(userOne);
console.log(userTwo);

