// 'This'    is used only inside the Object Not inside any function

const user = {
    username : 'AKshat',
    id : 223,

    welcome: function() {
        console.log(`Welcome ${this.username} your ID id ${this.id}`);
        console.log(this);  // This contains the data inside the local Scope 
    }
}


// user.welcome();
// user.username="Golou"
// user.id=8784
// user.welcome()
// console.log(this); // In Global access It contains empty value unless it is used to call something
// console.log(typeof this); // In Global access It contains empty value unless it is used to call something

// ******** ARROW FUNCTION **************   

const func1 = ()=>{
    // console.log(this); 
}
func1();

// const add = (num1 ,num2)=>{
//     return num1+num2;
// }

// const add = (num1 ,num2)=>     num1+num2;

const add = (num1 ,num2)=> (num1+num2);


console.log(add(2,3));