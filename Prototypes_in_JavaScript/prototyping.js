// let  myName = 'Akshat        ';
// let  myChabbel = 'chai         ';
// console.log(myName.length);


// Finding True Length without using Trim.
let myHeroes = ['thor','spidy'];

// Array , string , function all are inherited from Object so all prototypes of objects runs in these

// Prototype of Object is Null


Object.prototype.akshat = function(){
    console.log(`Akshat is present here.`);
}

let heroPower ={
    thor:'hammer',
    spidy:'web',
    getSpidyPower: function () {
        console.log(`Spidy power is ${this.this.spidy}`);
    }
}

heroPower.akshat();
myHeroes.akshat();

// Using Prototyping inheritance 

const user = {
    name : "amsn",
    email: "najd@gmail.com"
}

const teacher = {
    name:'dj',
    subject:'dsa'
}

const TAStaff={
    isAvailable: true
}

// teacher.__proto__ = user;
// // Now teacher has all properties of User
// console.log(teacher.email);

// Modern way to do this is 
Object.setPrototypeOf(teacher,user);
console.log(teacher.email);