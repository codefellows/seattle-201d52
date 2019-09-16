// Object Literal

// properties are attributes or defining features of an object
var cat = {
  name : 'Belle',
  age : 15,
  isSmart : true,
  walk: function(){
    console.log(`${this.name} is walking`);
  }
};

console.log(cat);
cat.walk();

// to showcase functionality and behavior...we do so by using methods
// our METHOD below is called 'fetch'

function sayHello(){
  console.log('hello, world');
}

var allToyMice = ['thing 1', 'thing 2', 'c3po', 'stormtroop'];
// A "contextual this" is the current object we are talking about. 
var kitty = 
{
  name: "Josie",
  // properties here
  age: 8,
  isFat: true,
  nicknames: ["JosieCat", "Princess", "Kitty"],
  // nested objects here
  catTree:
  {
   color: 'tan',
   size: 'large' 
  },
  // methods here
  fetch: function(toy)
  {
    sayHello();
    console.log(`${this.name} has fetched the ${toy}`);
  },
  render: function(){
    var catData = document.getElementById('catData');

    // call an external function and get me a random number
    var randomNumber = random(allToyMice.length);

    // create for me a p tag and append it onto the the CatData tag
    var thePtagForcat = document.createElement('p');
    thePtagForcat.textContent = this.name;
    catData.appendChild(thePtagForcat);

    // create for me another p tag and set the value to a specific item in the array
    var outputToy = document.createElement('p');
    outputToy.textContent = allToyMice[randomNumber];
    catData.appendChild(outputToy);

    // output all of the toys possible onto the DOM
    var catToys = document.getElementById('catToys');
    for(var i=0; i <allToyMice.length; i++){
      var newTag = document.createElement('li');
      newTag.textContent = allToyMice[i];
      catToys.appendChild(newTag);
    }

  }
}

function random(number){ // lab <-- min/max
  // Math.random returns to us a "random" number between 0 and 1
  return Math.floor(Math.random() * number);
}

kitty.fetch('toy mouse');
console.log(kitty.catTree);

//dot notation
console.log('dot notation:', kitty.name)

console.log('bracket notation of age: ', kitty['age']);
console.log(kitty["catTree"]["color"]);
console.log(kitty.catTree.color);

kitty.color = "gray & white";

kitty.catTree.age = 3;
console.log(kitty.catTree);

kitty["candy"] = 'delicious';

console.log(kitty);


// DOM Manipulation
var parent = document.getElementById('header');

var potato = document.createElement('h1');
potato.textContent = "Hello Shelby!";
parent.appendChild(potato);



kitty.render();