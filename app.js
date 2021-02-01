
    // Create Dino Constructor
    function Dinosaur(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.image = image;
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


    // Generate Tiles for each Dino in Array
    (async function () {
        // Create Human Object
     let human = {};

     // Use IIFE to get human data from form
     (function getHumanData() {
         human.name = document.getElementById('name').value;
         human.height = document.getElementById('feet').value + document.getElementById('inches').value;
         human.weight = document.getElementById('weight').value;
         human.diet = document.getElementById('diet').value;
         human.image = document.getElementById('./images/human.png')

     })();
     console.log(human);

        // dino instances & dino objects
        const dinos = []; 
        const createDinoArr = await getDinoData();
        createDinoArr.forEach(item => {
            const dinosaurs = new Dinosaur(
                item.species,
                item.weight,
                item.height,
                item.diet,
                item.where,
                item.when,
                item.fact,
                item.image
            );
            dinos.push(dinosaurs);
        });

    dinos.forEach(function (generateData) {
        let grid = document.getElementById('grid');
        let newCard = document.createElement('div');
        let cardTitle = document.createElement('h4');
        cardTitle.innerHTML = generateData.species;
        cardTitle.innerHTML += 
        `<img src="./images/${generateData.species}.png" alt="${generateData.species} image"/>` 
        let cardFact = document.createElement('p');
        cardFact.innerHTML = generateData.fact;
        newCard.classList.add('grid-item');
        grid.appendChild(newCard);
        newCard.appendChild(cardTitle);
        newCard.appendChild(cardFact);
        console.log('working inside');

        const dinoFact = generateData.fact;
        dinoFact[Math.floor(Math.random() * dinoFact.length)];
        console.log(dinoFact[Math.floor(Math.random() * dinoFact.length)]);
    })
    console.log('working 2', dinos);
})();

// Remove form from screen
//document.getElementById('dino-compare').style.display = "none";


// On button click, prepare and display infographic
const button = document.getElementById('btn');
button.addEventListener('click', function(e) {
     
});

