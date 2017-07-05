/* jshint esversion: 6 */

let cats = [{   id: 1, name: "Dice", picture: "dice.jpg", counter: 1  },
            {   id: 2, name: "Trish", picture: "trish.jpg", counter: 1  },
            {   id: 3, name: "Bubbles", picture: "bubbles.jpg", counter: 1  },
            {   id: 4, name: "Charlie", picture: "kittens.jpg", counter: 1  }];

let listCatNames = function () {
    for(let i = 0; i<cats.length; i++){
        let catNameDiv = document.createElement('div');
        catDiv.className = `singleCat`;
        catDiv.id = cats[i].id;
        
        let name = document.createElement('h3');
        name.innerHTML = `${cats[i].name}: <span class="counter">0</span> <span class="times">times</span>`;
        catDiv.appendChild(name);

        let catImage = document.createElement('img');
        catImage.setAttribute('src', `images/${cats[i].picture}`);
        catImage.setAttribute('alt', `A picture of ${cats[i].name}`);
        catImage.setAttribute('class', 'cat');
        catDiv.appendChild(catImage);
        let html = document.querySelector(".catsPics");
        html.appendChild(catDiv);
    }
};

listCats();

 function lookupCat(key){
            for (var i=0; i < cats.length; i++) {
                if (cats[i].id === key) {
                    
                    return cats[i];
                }
            }
        }

let listOfCats = document.querySelectorAll('.singleCat');
listOfCats.forEach(cat => {
    cat.addEventListener('click', updateClicksNumber, true);
});

function updateClicksNumber(){
        let counterNumber = this.querySelector(`.counter`);
        let counterTimes = this.querySelector('.times');
        let id = parseInt(this.id);

        if (counterNumber.innerHTML == 0) {
            counterTimes.innerHTML = "time";
        }else{
            counterTimes.innerHTML = "times";
        }

        let currentCat = lookupCat(id);
        let currentCounter = currentCat.counter;

        counterNumber.innerHTML = currentCounter;
        currentCounter++;
        currentCat.counter = currentCounter; 

    }