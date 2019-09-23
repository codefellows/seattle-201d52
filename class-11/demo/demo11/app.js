// Do we use a semi colon? I'm not sure.
'use strict'

// Globals
var goatImagesTag = document.getElementById('goatImages');
var goatLeft = document.getElementById('goatLeft');
var goatRight = document.getElementById('goatRight');

// null is nothing. 
var leftGoatIndex = null;
var rightGoatIndex = null;

var goatVote = 0;

// Constructor Function
/**
 * image X
 * clicked number X
 * views number X
 * name X
 * push it to all images
 */

 // constructor function of goat
 function Goat(name, image){
  this.name = name;
  this.image = image;
  this.clicked = 0;
  this.views = 0;

  // Do all the logic 
  Goat.allImages.push(this);
}

// create a random function
// to randomly select from our array of images
// return a random number based off of the Goat.allImages array
// function declaration (below)
function randomGoat(){
  // generate a random number between 0-1. 1 is exclusive
  var randomNumber = Math.floor(Math.random() * Goat.allImages.length)
  return randomNumber;
}

// and render them to the screen
// then create a render function
function renderGoats(){  

  // Confirm they are not the same.
  do{
    // give us random goat images
    leftGoatIndex = randomGoat(); // 1
    rightGoatIndex = randomGoat(); // 1
    // keep running if there are duplicates 
  } while(leftGoatIndex === rightGoatIndex)

  // Add one to the views of the object
  Goat.allImages[leftGoatIndex].views++;
  Goat.allImages[rightGoatIndex].views++;


  // set the source of the image tags to the specific goat of our array
  goatLeft.src = Goat.allImages[leftGoatIndex].image;
  goatRight.src = Goat.allImages[rightGoatIndex].image;
}

// function declaration:
// function handleClickOnGoat(){}

// function expression
var handleClickOnGoat = function(event){ 
  var goatClicked = event.target.id;
  // we clicked on a goat!
  if(goatClicked === 'goatLeft' || goatClicked === 'goatRight'){

    goatVote++;
    // need to incrament goat clicked by one
    if(goatClicked === 'goatLeft'){
      // do logic to incrament the number
      Goat.allImages[leftGoatIndex].clicked++;
    } else if(goatClicked === 'goatRight'){
      Goat.allImages[rightGoatIndex].clicked++;
    }
  } else{
    alert('you didn\'t select an image');
  }

  console.log(Goat.allImages[leftGoatIndex]);
  console.log(Goat.allImages[rightGoatIndex]);

  // check the goat votes
  if(goatVote === 5){
    // remove
    goatImagesTag.removeEventListener('click', handleClickOnGoat);
    console.log("you completed the voting")
    // output to the browser the results
    // "Sassy Goat received 4 votes with 5 views"
    for(var i=0; i < Goat.allImages.length; i++)
    {
      var goat = Goat.allImages[i];
      console.log(`${goat.name} received ${goat.clicked} votes with ${goat.views} views`);
    }
  } else{
    renderGoats();
  }

}


 // Create the array for the goats!
 Goat.allImages = [];

 new Goat('Cruisin\' Goat', '/images/cruisin-goat.jpg');
 new Goat('Float your goat', '/images/float-your-goat.jpg');
 new Goat('Goat Away', '/images/goat-away.jpg');
 new Goat('Kissing Goats!', '/images/kissing-goat.jpg');
 new Goat('Sassy Goat', '/images/sassy-goat.jpg');
 new Goat('Swater Goat', '/images/sweater-goat.jpg');

 console.log(Goat.allImages);
 renderGoats();

 // TODO: Will need an event listener
 goatImagesTag.addEventListener('click', handleClickOnGoat);