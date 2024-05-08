// Primitive -> String , number , boolean , null , undefined , Symbol , BigInt

const ID = Symbol('123')
const anotherID = Symbol('123')

console.log(ID);
console.log(anotherID);

console.log(ID == anotherID);
console.log(ID === anotherID);