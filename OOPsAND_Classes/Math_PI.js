const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);


const Example = {
    name:"UserOneOfExample",
    password:134,
    isAvailable:true,
    orderChai: function(){
        console.log(`chai is ready.`);
    }
}

console.log(Object.getOwnPropertyDescriptor(Example,"name"));

Object.defineProperty(Example,'name',{
    writable:false,
    enumerable:false
    })

// console.log(Object.getOwnPropertyDescriptor(Example,"name"));

for (const [key,value] of Object.entries(Example)) {
    if(typeof value !== 'function'){console.log(`${key} : ${value}`);}
}   

//NOT WORK WITHOUT "Object.entries(Example)"

