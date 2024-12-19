// Date is started from 01 Jan 1970.

// let mydate =  new Date();
// console.log(mydate);
// console.log("String:-",mydate.toString());
// console.log("Date String :-",mydate.toDateString());
// console.log("ISO String :- ",mydate.toISOString());
// console.log("JSON :- ",mydate.toJSON());
// console.log("Locale Date String :- ",mydate.toLocaleDateString());
// console.log("Time String :- ",mydate.toTimeString());

// let hours = new Date.hours();
// console.log(hours);

// ********** Different Forms of Date Input *********

// let myDate = new Date (2023 , 0 ,23);
// let myDate = new Date (2023 , 0 ,23,5,3); //(yy , mm , dd , hour , minute , seconds)
// let myDate = new Date ("2023-01-14")
// console.log(myDate.toLocaleString());

let timestamp = Date.now(); // give time in milliseccond from 1 jan 1970
// console.log(timestamp);
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // Time in Seconds

let myDate = new Date();
// console.log(myDate);
// console.log("Month :- ",myDate.getMonth()+1);
// console.log("Day :- ",new Date().getDate());
// console.log(`${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}:${myDate.getMilliseconds()}`);

console.log(myDate.toLocaleString('default',{
    weekday:"long",
    
}));