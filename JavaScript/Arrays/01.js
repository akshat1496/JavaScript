// JavaScript arrays are resizable and can contain a mix of different data types.
//JavaScript array-copy operations create shallow(Referenced) copies.


// const MyArray = [0 , 1 , 2 ,'True']
// const myHeroes =  ['Superman' ,"Batman"]
// console.log("MyArray 1st element",MyArray[0]);
// console.log("MyArray 3rd element",MyArray[3]);
// console.log("MyHeroes 1st element",myHeroes[0]);

const MyArray2 = new Array(1,2,3,4);
// console.log("MyArray2 1st Elelment - ",MyArray2[0]);

// ARRAY METHODS

// console.log(MyArray2);
// MyArray2.push(10);
// console.log(MyArray2);
// MyArray2.pop();
// MyArray2.unshift(9); //  UNSHIFT ADD ELEMENT AT START
// console.log(MyArray2);
// MyArray2.shift();   // SHIFT REMOVE ELEMENT FROM START
// console.log(MyArray2);
// MyArray2.shift();
// console.log(MyArray2);

// console.log("0 hai :- ",MyArray2.includes(0));
// console.log("1 hai :- ",MyArray2.includes(1));

// console.log("1 is at index ",MyArray2.indexOf(1));
// console.log("0 is at index ",MyArray2.indexOf(0));

// const newArr =  MyArray2.join();
// console.log(MyArray2);
// console.log(newArr);
// console.log("Type of Join :- ",typeof newArr);

// ********   SLICE AND SPLICE DIFFERENCE *************

// slice() : It does not change the array (Do not manipulate Array);

// splice() : It changes the  original array by removing the indexes and making new array and indexing (It manipulate Array);

// const Arr = new Array(1,2,3,4,5);
// console.log("Before Slice Array :- ",Arr);
// console.log("Slice from 1 to 3(3rd Index is not included):- ", Arr.slice(1,3));
// console.log("After Slice Array(Or Before Splice) :- ",Arr);


// // console.log("Before Splice Array :- ",Arr);
// console.log("Splice from 1 to 3(3rd Index is included):- ", Arr.splice(1,3));
// console.log("After Splice Array :- ",Arr);


