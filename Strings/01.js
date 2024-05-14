const name = 'Akshat'
const count = "60"

// console.log(name + count + " Marks");

// console.log(`Hello my name is ${name} and I got ${count} marks!!`);

const game = new String("Valorant")

// for (let index = 0; index < game.length; index++) {
//     console.log(game[index]);
// }

// console.log(game.toUpperCase());
// console.log(game.length);
// console.log(game.__proto__);

// // Check char at that position
// console.log(game.charAt(2));
// console.log(game.charAt(1));

// // Check position of character
// console.log(game.indexOf('t'));
// console.log(game.indexOf('V'));

let str = game.substring(0,4);
console.log(str);  // Last index position element not included

// let anotherStr = game.slice(0,4)
// console.log(anotherStr);   // Same as substring method but without last index parameter so it includes the last index element
let anotherStr1 = game.slice(-8,3)
console.log(anotherStr1);   // We can reverse string using SLICE
