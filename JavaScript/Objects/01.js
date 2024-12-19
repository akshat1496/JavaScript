// Object banane ka 2 tarika - Literal and Constructor 

// Constructor se Singleton Object banta hai .Literal se nhi 
// Singleton matlab Apne tare ka Ek hi Object Hota hai

// OBJECT LITERALS

const mySymbol = Symbol('Key')
const User = {
//  key         : Key-value
    name        : "akshat",
    [mySymbol]  : "Key-value",//How to Define Symbol
    "FileName"  : "bin",
    age         : 18,
    location    : "dkjkds",
    isLoggedIn  : false
}
// console.log(User.name);
// console.log(User["name"]);
// console.log(User.FileName);
// console.log(User["FileName"]);
// console.log(User[mySymbol]);
// console.log(User.mySymbol); // Wrong way to access Symbol

// // ****** FREEZE FUNCTION *********
// Object.freeze(User) //The values are fixed & can't be changed
User.name = "Solu";
User . age = 23;
// console.log(User);

// ***************** FUNCTION ADDING ********
User.greet = function () {
    console.log(`Hello ${User.name} , your age is ${this.age}`); // We can use 'THIS' when in function of object
}

// console.log(User.greet);
console.log(User.greet());