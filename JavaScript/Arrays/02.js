const arr1  = [1,2,10,3];
const arr2 = [9,8,98];

// *************  PUSH *********
// arr1.push(arr2)
// console.log("Direct Pushing :-  ",arr1);
// console.log(arr1[4][1]);

// ******* CONCATENATE **********
// const arr3 = arr1.concat(arr2); 
// console.log(arr3);

// ***** SPREAD OPERATOR  (DO SAME THING AS CONCATANATE )**********
// const arr3 = [...arr1, ...arr2 ]
// console.log(arr3);

// ********* FLAT FUNCTION *******
// const arr4 = [1,1,12,21,[21,1222,123,76,[4,554,6,6,4,[10]]]]
// console.log(arr4.flat(Infinity));

// ****** CHAECKING AND MAKING OF ARRAY *****************
// console.log(Array.isArray("Akdkajda"));
// console.log(Array.from("Akdk"));
// console.log(Array.from({name : "akshat"}));

let score1 = 100 , score2 = 200 , score3 = 300;
console.log(Array.of(score1,score2,score3));

