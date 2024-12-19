// basic formate to execute the function immediately after making it.

// (function func1() {
//     console.log(`func1`);
// })();

// executing 2 IIFE continuously
((name)=>{
    console.log(`func2 ${name}`);
})('Akshat');
(function func(name) {
    console.log(`Welccome ${name}`);
})('Akshat');
