const num = [1,2,34,5,7];

// const int = num.reduce  (   
//                                 function (accumulator , currentValue) {
//                                     console.log(`acc :- ${accumulator} and curr val :- ${currentValue}`);
//                                     return accumulator+currentValue;
//                                 } , /*Accumulator value is given here*/ 0 
//                         );

const int = num.reduce((acc , currVal) => {return acc+currVal} , 0);

console.log(int);