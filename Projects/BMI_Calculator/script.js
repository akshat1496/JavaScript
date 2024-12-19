const form = document.querySelector('form')

form.addEventListener( 'submit' , (e) =>{
    e.preventDefault();
   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
    const results  = document.querySelector('#results');

    if (height ==='' ||  height <0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight ==='' ||  weight <0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid height ${weight}`;
    }

    else {
       const bmiValue =  (weight/((height*height)/1000)).toFixed(2);
       if(bmiValue<18.6){
           results.innerHTML = `<span>${bmiValue} Oops you are Under Weight</span>`;
       }
       else if(bmiValue>=18.6 && bmiValue<=24.9){
           results.innerHTML = `<span>${bmiValue} Congratulations you are fit.</span>`;
       }
       else{
           results.innerHTML = `<span>${bmiValue} Oops you are Over Weight start doing exercise.</span>`;
       }
       
    }
})