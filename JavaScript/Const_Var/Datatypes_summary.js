// Primitive -> String , number , boolean , null , undefined , Symbol , BigInt

const ID = Symbol('123')
const anotherID = Symbol('123')

console.log(ID);
console.log(anotherID);

console.log(ID == anotherID);
console.log(ID === anotherID);

// Non-Primitive -> Array , Object , Function 

const Array = ['Hi','I','am','array']

let Object={
    name:'John',
    age:10
}

function func1() {
    console.log('Function');
}
console.log(Array[0]);
console.log(Object.name);
func1();