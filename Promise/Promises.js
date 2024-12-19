//************** */ PromiseOne *************

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // Database call , cryptography works , network works 
    setTimeout(function(){
        console.log('Async task is complete.');
        resolve();
    },1000)
})

// "then" will run the function If the promise is resolved or(resolved function() is run)

promiseOne.then(function(){
    console.log('Promised consumed. or(Promise is resolved)');
})


//************** */ PromiseTwo *************

new Promise(function(resolve,reject){
    setTimeout(function () {
        console.log("Async task 2.");
        resolve();
        },2000)
        }).then(function () {
            console.log("Async 2 resolved.");
            })
            
            
//************** */ PromiseThree *************

const PromiseThree = new Promise(function(resolve,reject) {
    setTimeout(function () {
        resolve({username:"akshat",email:"akshat@gmail.com"});
        },3000)
        })
        
        PromiseThree.then(function (user) {
            console.log(user);
            console.log(user.username);
            })
            
            
//************** */ PromiseFour *************

const PromiseFour  = new Promise(function (resolve,reject) {
    setTimeout(function(){
        let error = true;
        error=false;
        if(!error){
            resolve({username:"Akshat", password:"123"})
            }
            else{
                reject('ERROR: Something went wrong.');
        }
        },4000)
        });
        
        // WRONG METHOD :-
        
        // const username = PromiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// })

PromiseFour
.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The Promise id either resolved or rejected");
    });
    
//************** */ PromiseFive *************

const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Aksht1496", password:"12444"});
        }
        else{
            reject("ERROR: JS went wrong.");
        }
    },5000)
})

// Resolve and reject using Async and await

async function consumePromiseFive(){
    
    // const response =  await PromiseFive;
    // console.log(response); 

    // If there is no error then we have no problem
    //For error  handling we use try and  catch method

    try {
        const response = await PromiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users"); // Since fetching take some time that's why we use await.

//         const data = await response.json(); // Same here we use await.

//         console.log(data);   
//     } catch (error) {
//         console.log("E: ",error);
//     }
// };

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users").
then((response)=>{
    return response.json();
})
.then((data /* data = response.json() */)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})