# Dinosaur project 
The goal of this project was to build an infographic with already provided data(html and css). 
3x3 grid of tiles is generated (9 in total) with the human in the center tile. Each title contains the species, an image, and a fact. For the human tile, there is only name displayed rather than species and no fact. When the user clicks to generate the infographic from the form, the grid will appear and the form will be hidden. The facts displayed are random per dinosaur with an opportunity of displaying at least 6 different types of facts (3 are from the methods created). One of the titles is for a pigeon in which the tile displays, “All birds are considered dinosaurs.”

## How it works

![ezgif com-video-to-gif-14](https://user-images.githubusercontent.com/71527795/106823709-577fc780-6679-11eb-968e-e3477d6e93d3.gif)


### Object Oriented Javascript 

Steps I followed:

* Dinosaur constructor was created with arguments that are going to be used later on to compare Dinosaurs and human
* Since information was stored in json file, I fetched the data to app.js
* In order to get data from the form, I have created IIFE.
* Since we are comparing Dinosaur with human, I have created 3 compare methods with an if else statement where I added a few more facts. 
* Button event listener was created for data to be shown on click and display to be visible and form deleted. 
