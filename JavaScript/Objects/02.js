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

