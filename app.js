// Create Dino Constructor
function Dinosaur (species, weight, height, diet, where, when, fact, image) {
  this.species = species
  this.weight = weight
  this.height = height
  this.diet = diet
  this.where = where
  this.when = when
  this.fact = fact
  this.image = image
}

// fetch Dino data from JSON
const getDinoData = async () => {
  // eslint-disable-next-line no-undef
  const fetchedData = await fetch('./dino.json')
  const data = await fetchedData.json()
  return data.Dinos // return "Dinos" is taken from JSON file as a path to the info of Dinos.
}

// On button click, prepare and display infographic
const button = document.getElementById('btn')
button.addEventListener('click', function (e) {
  // Generate Tiles for each Dino in Array
  (async function () {
    // Create Human Object
    const human = {};

    // Use IIFE to get human data from form
    (function getHumanData () {
      human.name = document.getElementById('name').value
      const feet = document.getElementById('feet').value
      const inches = document.getElementById('inches').value
      human.height = parseFloat(feet * 12) + parseFloat(inches) // 1 foot = 12 inches
      human.weight = document.getElementById('weight').value
      human.diet = document.getElementById('diet').value
    })()

    // dino instances & dino objects
    const dinos = []
    const createDinoArr = await getDinoData()
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
      )
      dinos.push(dinosaurs)
    })

    dinos.forEach(function (generateData, index) {
      const grid = document.getElementById('grid')
      if (index === 4) {
        const humanCard = document.createElement('div')
        humanCard.classList.add('grid-item')
        const humanTile = document.createElement('h3')
        humanTile.innerHTML = human.name
        grid.appendChild(humanCard)
        humanCard.appendChild(humanTile)

        humanTile.innerHTML +=
                    '<img src="./images/human.png"/>'
      }
      const newCard = document.createElement('div')
      const cardTitle = document.createElement('h3')
      cardTitle.innerHTML = generateData.species
      cardTitle.innerHTML +=
                `<img src="/images/${generateData.species}.png" alt="${generateData.species} image"/>`
      const cardFact = document.createElement('p')
      cardFact.innerHTML = generateData.fact
      newCard.classList.add('grid-item')
      grid.appendChild(newCard)
      newCard.appendChild(cardTitle)
      newCard.appendChild(cardFact)

      // Create Dino Compare Method 1
      function compareHeight () {
        if (human.height < generateData.height) {
          return `${human.name} is ${generateData.height - human.height} inch shorter than ${generateData.species}`
        } else if (human.height > generateData.height) {
          return `${human.name} is ${human.height - generateData.height} inch taller than ${generateData.species}`
        }
      };

      // Create Dino Compare Method 2
      function compareWeight () {
        if (human.weight > generateData.weight) {
          return `${human.weight} is ${human.weight - generateData.weight} lb heavier than ${generateData.species}`
        } else if (human.weight < generateData.weight) {
          return `${human.name} is ${generateData.weight - human.weight} lb lighter than ${generateData.species}`
        }
      };

      // Create Dino Compare Method 3
      function compareDiet () {
        if (human.diet !== generateData.diet) {
          return `${human.name} and ${generateData.species} have the same diet`
        } else {
          return `${generateData.species} has ${generateData.diet} diet whereas ${human.name} has ${human.diet} diet`
        }
      };

      const pigeon = dinos[7].species

      if (generateData.species === pigeon) {
        document.createTextNode(generateData.fact)
      } else {
        const randomNumber = Math.floor(Math.random() * 6)
        let randomFact
        switch (randomNumber) {
          case 0:
            randomFact = compareDiet()
            break
          case 1:
            randomFact = compareWeight()
            break
          case 2:
            randomFact = compareHeight()
            break
          case 3:
            randomFact = generateData.fact
            break
          case 4:
            randomFact = `${generateData.species} lived in ${generateData.where} during ${generateData.when}`
            break
          case 5:
            randomFact = `${generateData.species} used to live in ${generateData.where}.`
            break
          default:
            randomFact = ' '
        }
        cardFact.innerHTML = randomFact
      }
    })
    // Remove form from screen
    document.getElementById('dino-compare').style.display = 'none'
  })()
})
