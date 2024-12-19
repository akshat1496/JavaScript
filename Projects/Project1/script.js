const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (button) =>{

    button.addEventListener('click',(e)=>{
        // console.log(e);
        // console.log(e.target);
       body.style.backgroundColor= e.target.id;
       if(e.target.id==="yellow"){
        document.querySelector('h1').style.color = 'black'
        document.querySelector('h2').style.color = 'red'
    }
    else if(e.target.id==="white"){
           document.querySelector('h2').style.color = 'red'
        document.querySelector('h1').style.color = 'black'
    }
    
    else {
           document.querySelectorAll('h1, h2').forEach(element => {
            element.style.color = 'antiquewhite'
           });
        
       }
    })
})