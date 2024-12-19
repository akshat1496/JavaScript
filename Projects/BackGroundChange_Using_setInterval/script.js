const random_color = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];   
    }
    return color;
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)

let intervalId;
function startChangingColor() {
    if(!intervalId){intervalId = setInterval(changeBgColor ,500);}

    function changeBgColor(){ 
    document.body.style.backgroundColor = random_color();
   } 
}
function stopChangingColor() {
    clearInterval(intervalId);
    intervalId = null;
}