let random_num = parseInt(Math.random()*100  + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultPara')

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
   if(isNaN(guess)){
    alert('Please enter a Valid number');
   } 
   else if(guess<1){
    alert('Please enter a number greater than 1');
   } 
   else if(guess>100){
    alert('Please enter a number less than 100');
   } 
   else {
    prevGuess.push(guess);
    if(numGuess === 10){
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${random_num}`);
        endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
    if(guess === random_num){
        displayMessage(`Congratulations!!  Correct guess`)
    }
    else if(guess < random_num){
            displayMessage(`Try higher number.`)
    }
    else if(guess > random_num){
            displayMessage(`Try lower number.`)
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML +=`${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`

}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

function newGame() {
    const start = document.querySelector('#newGame')
    start.addEventListener('click',(e)=>{
        random_num = parseInt(Math.random()*100  + 1);
        prevGuess=[];
        numGuess  = 1;
        guessSlot.innerHTML ='';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
}

function endGame() {
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>'
    startOver.appendChild(p);
    playGame=false;
    newGame();
}