// Basic loop  are :- 

// 1) FOR loop 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// 2) DO-WHILE loop
// do {
    
// } while (condition);

// 3) WHILE loop
// while (condition) {
    
// }

// SOME HGHER LOOPS

// 1) FOROFF     2) FORIN  3) FOR-EACH
const arr = [1,2,3,4,56,6];

// for (const index of arr) {
//     // console.log(arr[index]);
    
//     // Index directly gives value

//     console.log(index);
// }


// for (const index in arr) {
//     if (Object.hasOwnProperty.call(arr, index)) {
//         const element = arr[index];
//         console.log(element);
//     }
// }



// MAPS 

// Map is a key-value pair and remembers the  original insertion order of the keys.
// Only stores  the unique keys name

const map = new Map()
map.set('IN',  'INDIA');
map.set('USA',  'AMERICA');
map.set('CH',  'CHINA');

// USING FOR LOOP(FOR- OF) ON MAP ****(For-in loop ka use nhi kr skte )
// for (const key of map) {
  
//    console.log(key);
// }
// for (const [key,value] of map) {
  
//    console.log(`${key} ~ ${value}`);
// }



// THIS METHOD OF KEY AND VALUE DOESNOT WORK WITH OBJECTS 

const myObj = {
    name: 'Rahul',
    class:3,
    roll: 1
}

// for (const [key,value] of myObj) {
  
//     console.log(`${key} ~ ${value}`);
//  }

// HERE FOR ITERATION OF OBJECT WE USE FORIN LOOP

// for (const key in myObj) {
//     console.log(key);
// }

// for(const key in myObj){
//     console.log(`${key} is ${myObj[key]}`);
// }


// ARRAYS

const arr1 = [1,2,3,4,33,443];
// for (const key in arr1) {
//     console.log(`key :- ${key} has value :- ${arr1[key]}`);
// }

//  FOR-EACH LOOP

const language = ["js", "ruby" , "java" , "python","cpp"]

// language.forEach( function (item) { 
//     console.log(`Language Shortcut :- ${item}`);
//  } )

// language.forEach( greet = (item)=> {
//     console.log(`Language Shortcut :- ${item }`);
// })

// function printMe(item) {
//     console.log(item);
// }

// language.forEach(printMe) // Function ka sirf reference hi dena hai  . Execute ke liye last me () nhi lagana hai


// language.forEach((item , index , arr)=>{
// console.log(`${item } has index `,index ,`in `,arr);
// })



// OBJECTS INSIDE ARRAY

const myCode = [
{
    langName:"Javascript",
    extension :"js"
},
{
    langName:"Python",
    extension :"py"
},
{
    langName:"C++",
    extension :"cpp"
}
]

myCode.forEach((item)=>{
    console.log(`${item.langName} and ${item.extension}`);
})