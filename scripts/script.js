/* jshint esversion: 6 */

let cats = [
    {   id: 1, name: "Dice", picture: "dice.jpg", counter: 0  },
    {   id: 2, name: "Trish", picture: "trish.jpg", counter: 0  },
    {   id: 3, name: "Bubbles", picture: "bubbles.jpg", counter: 0  },
    {   id: 4, name: "Charlie", picture: "kittens.jpg", counter: 0  }
    ];


// Listing cats' names on the left side of the screen.

let listCatNames = function () {
    for(let i = 0; i<cats.length; i++){
        let catNameDiv = document.createElement('div');
        catNameDiv.className = `catName`;
        catNameDiv.id = cats[i].id;
        
        let name = document.createElement('h3');
        name.innerHTML = cats[i].name;
        catNameDiv.appendChild(name);

        let html = document.querySelector(".catsNames");
        html.appendChild(catNameDiv);   
    }
};

// Building cat list
listCatNames();

// Making each cat's name clickable
let listOfCats = document.querySelectorAll('.catName');
listOfCats.forEach(cat => {
    cat.addEventListener('click', displayCat);
});

    // Displaying cat's picture on the right when this cat's name is clicked
    function displayCat() {
    let catsPics = document.querySelector(".catsPics");
    catsPics.innerHTML = "";
    let name = document.createElement('h3');
    

    let currentCat = lookupCat(this.id);

    name.innerHTML = `${currentCat.name}: <span class="counter">${currentCat.counter}</span> <span class="times">times</span>`;
    catsPics.appendChild(name);

    let catImage = document.createElement('img');
    catImage.setAttribute('src', `images/${currentCat.picture}`);
    catImage.setAttribute('alt', `A picture of ${currentCat.name}`);
    catImage.setAttribute('class', 'cat');
    catImage.setAttribute('id', currentCat.id);
    catsPics.appendChild(catImage);
    let html = document.querySelector(".catsPics");

    html.addEventListener('click', updateClicksNumber, true);
    }

function lookupCat(catKey){
        for (var i=0; i < cats.length; i++) {
            if (cats[i].id == catKey) {
                return cats[i];
            }
        }
    }


function updateClicksNumber(){
        //looking up current cat
        let catKey = this.querySelector('img').id;
        let currentCat = lookupCat(catKey);

        //setting counter to cat's counter
        let currentCounter = currentCat.counter;
        currentCounter++;

        let counterNumber = this.querySelector('.counter');
        let counterTimes = this.querySelector('.times');
        if (counterNumber.innerHTML == "0") {
            counterTimes.innerHTML = "time";
        }else{
            counterTimes.innerHTML = "times";
        }

        counterNumber.innerHTML = currentCounter;
        currentCat.counter = currentCounter;
    }