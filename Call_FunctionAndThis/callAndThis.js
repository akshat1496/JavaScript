function setUserName(username){
    this.username = username ;''
    console.log("Called");
}

// function  createUser(username,email,password){
//     setUserName(username);
//     this.email=email;
//     this.password=password;
// }

// Above function does not set UserName because the value stored in this is removed once the function is removed from call stack.
// Therefore we use "Call" and "this" to setUserName

function  createUser(username,email,password){
    setUserName.call(this,username);  // Here 'this' is given to store the username in the context of createUser.Here 'this' content is not lost.
    this.email=email;
    this.password=password;
}

const UserOne = new createUser('Akshat','akshat@google.com','123');
console.log(UserOne);