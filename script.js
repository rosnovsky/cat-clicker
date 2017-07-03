const cat = document.querySelector('.cat');
let number = 0;

let counter = function() {
    let counterNumber = document.querySelector('.number');
    number++;
    counterNumber.innerHTML = number;
};

cat.addEventListener('click', function(){
    counter();
});