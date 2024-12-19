// Object using Constructor

const User = new Object();
User.id = "ahdja"
User.name = "Akshat"
User.age = 37

// console.log(User);

const anotherUser ={
    email :"dhja@gmail.com",
    fullname : {
        username :{
                firstname : "jdjs",
                lastname : "ahd"
        }
    }
}
// console.log("A -",anotherUser);
// console.log("B -",anotherUser.fullname);
// console.log("C -",anotherUser.fullname.username);
// console.log("D -",anotherUser.fullname.username.firstname);

// **** MERGING TWO OBJECTS VALUES   **********

const obj1  = { 1 : 'a' , 2 : 'b'}
const obj2  = { 3 : 'c' , 4 : 'd'}
const obj3  = { 5 : 'e' , 6 : 'f'}

//  Code - Object.assign(target , source1 , source2 , source3 , ......);

// const merged_obj = Object.assign({},obj1,obj2,obj3);//{} -> the empty array where the merged object are stored
// console.log(merged_obj);
// console.log(obj1);
// const merged_obj1=  Object.assign(obj1,obj2,obj3);// Here Merged Object is stored in Object1 itself
// console.log(merged_obj1);
// console.log(obj1);

// MOSTLY USED TODAY IS ->
const merged_obj2 = {...obj1,...obj2,...obj3};
// console.log(merged_obj2);

const users = 
[
    {
        id: 1,
        gmail:"1243@gmail.com"
    },
    {
        id: 2,
        gmail:"1dhid3@gmail.com"
    },
    {
        id: 3,
        gmail:"1dpwj93@gmail.com"
    },
]

// console.log(`Welcome ${users[0].gmail} , your Id number is ${users[0].id} `);
// console.log(`Welcome ${users[1].gmail} , your Id number is ${users[1].id} `);
// console.log(`Welcome ${users[2].gmail} , your Id number is ${users[2].id} `);

// console.log(Object.keys(users[0]));
// console.log("Keys name in User",Object.keys(User));
// console.log("keys value in User",Object.values(User));
// console.log("Entries in User ",Object.entries(User));

// CHECK PROPERTY AVAILABLE OR NOT
console.log("Is id property available in User",User.hasOwnProperty("id"));
console.log("Is ID property available in User",User.hasOwnProperty("ID"));
