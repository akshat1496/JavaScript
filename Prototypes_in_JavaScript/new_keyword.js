const newHero = ["hulk","spiderman"];

// Javascript has prototype as default behaviour.

function multiplyBy5(num){
    return num*5; 
}

multiplyBy5.power=2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username , score) {
    this.username = username;
    this.score = score;

}

// Adding our own Prototype function 

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`Your price is ${this.score}`);;
}


const chai = new createUser('chai',30)
const tea =  createUser('tea',30) // Using ew is Important when making new Instances

chai.printMe();
// tea.printMe();
chai.increment();
chai.printMe();
