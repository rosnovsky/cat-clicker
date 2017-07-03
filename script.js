const cat = document.querySelector('.cat');
let number = 0;

let counter = function() {
    let counterNumber = document.querySelector('.number');
    let counterTimes = document.querySelector('.times');
    console.log(counterTimes.innerHTML);
    number++;
    if (counterNumber.innerHTML == 0) {
        counterTimes.innerHTML = "time";
    }else{
        counterTimes.innerHTML = "times";
    }
    counterNumber.innerHTML = number; 
};

cat.addEventListener('click', function(){
    counter();
});