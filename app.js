
    // Create Dino Constructor
    function Dinosaur(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.image = "./images" + '.png';
    }

    //fetch Dino data from JSON 
    const getDinoData = async() => {
        const fetchedData = await fetch("./dino.json");
        const data = await fetchedData.json();
        return data.Dinos; //return "Dinos" is taken from JSON file as a path to the info of Dinos.
    };

    // dino instances & dino objects
    const dinos = []; 

    window.onload = async () => {
        const createDinoArr = await getDinoData();
        console.log(createDinoArr);
        console.log(dinos);
        createDinoArr.forEach(item => {
            const dinosaurs = new Dinosaur(
                item.species,
                item.weight,
                item.height,
                item.diet,
                item.where,
                item.when,
                item.fact
            );
            dinos.push(dinosaurs);
        });
    }
    console.log(dinos);

    // Create Human Object
    const human = {};


    // Use IIFE to get human data from form

    const getHumanData = (function myFunction() {
    return Array.from(document.querySelector('#dino-compare')).reduce((acc, input) => ({
        ...acc,[input.id]: input.value } ), {})
    })();

/*

var button = document.getElementById('btn');

const hellp = (function myFunction() {
    return Array.from(document.querySelector('#dino-compare')).reduce((acc, input) => ({
        ...acc,[input.id]: input.value } ), {});
    })();

button.addEventListener('click', hellp);

*/
        
    // Create Dino Compare Method 1
    Dinosaur.prototype.compareHeight = function () {
        if(human.height < this.height){
            return `${human.name} is ${this.height - human.height} inch shorter than ${this.species}`;
            
        } else if(human.height > this.height) {
            return `${human.name} is ${this.height - human.height} inch taller than ${this.species}`;
        }
        console.log(human.name);
        console.log(this.height);
    };

    // Create Dino Compare Method 2
    Dinosaur.prototype.compareWeight = function () {
        if(human.weight > this.weight){
            return `${human.name} is ${human.weight - this.weight} lb heavier than ${this.species}`;
            
        } else if(human.weight < this.weight) {
            return `${human.name} is ${this.weight - human.weight} lb lighter than ${this.species}`;
        }
        console.log(human.name);
        console.log(this.height);
    };

    
    // Create Dino Compare Method 3
    Dinosaur.prototype.compareDiet = function () {
        if(human.diet === this.diet){
            return `${human.name} and ${this.species} have the same diet`;
            
        } else {
            return `${this.species} has ${this.diet} whereas ${human.name} has ${human.diet}`;
        }
    };

    //random fact 
    Dinosaur.prototype.randomFact = function() {
        return this.fact[Math.floor(math.random() * this.fact.length - 1)];
    };

    // Generate Tiles for each Dino in Array
    (function () {
        console.log('working 1')

    dinos.forEach(function (generateData) {
        let grid = document.getElementById('grid');
        let newCard = document.createElement('div');
        let cardTitle = document.createElement('h3');
        let cardImg = document.createElement('img');
        let cardFact = document.createElement('p');
        newCard.classList.add('grid-item');
        grid.appendChild(newCard);
        newCard.appendChild(cardTitle);
        newCard.appendChild(cardImg);
        console.log('working inside');
        console.log(generateData);
    })
    console.log('working 2')
})();

let numbers = [1, 4, 6, 3, 78, 90];
numbers.forEach(function(number) {
    console.log(number);
})

        // Remove form from screen


// On button click, prepare and display infographic


/*
function generateTitles () {
        const humanData = getHumanData();
        const dinoData = Dinosaur;
        const grid = document.getElementById('grid');

        const output = dinoData.slice(0,4).concat(humanData).concat(dinoData.slice(4,8));

        const newCard = document.createElement('div');
        newCard.className = "grid-item";
        const cardTitle = document.createElement('h4');
        const cardImg = document.createElement('img');
        const cardFact = document.createElement('p');

        newCard.appendChild(cardTitle);
        newCard.appendChild(cardImg);
        newCard.appendChild(cardFact); 

        // Add tiles to DOM

        document.getElementById('grid').appendChild(newCard);

    output.forEach(function(data) { 
        const compareDiet = data.compareDiet();
        const compareWeight = data.compareWeight();
        const compareHeight = data.compareHeight();
        const randomFact = data.randomFact();

        grid.innerHTML = cardTitle, cardImg, cardFact;
    })}
*/


    /*
    function generateTitle() {
        let grid = document.getElementById('grid');
        for (let i=0; i <= grid.length; i++) {
            let newCard = document.createElement('div');
            grid.appendChild(newCard);
            newCard.className = "grid-item";
            let cardTitle = document.createElement('h4');
            let cardImg = document.createElement('img');
            let cardFact = document.createElement('p');
            newCard.appendChild(cardTitle);
            newCard.appendChild(cardImg);
            newCard.appendChild(cardFact);
        }
    }
    generateTitle()
    */