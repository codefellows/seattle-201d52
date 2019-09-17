var headers = ['name', 'size', 'isHot', 'ingredients'];
var coffeeData = document.getElementById('coffeeData');

//Constructor Function 
// define properties and behaviors inside of a template for our objects
function Coffee(coffeeName, coffeeSize, isCoffeeHot, coffeeIngredients){
  // set the values of the parameters to the properties of the object
  this.name = coffeeName;
  this.size = coffeeSize;
  this.isHot = isCoffeeHot;
  // you don't have to have a parmater for every paramter. you can simply jsut set a value as a default:
  this.average = [];
  this.ingredients = coffeeIngredients;
  Coffee.potatos.push(this);
  // creating a method called Drink Coffee
  // this.drinkCoffee = function(){
  //   console.log(`${this.name} is delicous!`);
  // }
}
// prototype allows us to "share" functionality between object

// keep track of all of my coffees i've created so far
// potatos is a form of a prototype (as a property)
Coffee.potatos = [];

// prototypes are created OUTSIDE of the constructor function
// "attaching" a new function called Drink Coffee onto the Coffee Constructor Function as a prototype
Coffee.prototype.drinkCoffee = function(){
  console.log(`${this.name} is delicous!`);
}

Coffee.prototype.render = function(){
  // create a new table row
  var newTR = document.createElement('tr');
  // populate the data with tds
  for(var i =0; i < headers.length; i++ ){
    var newTD = document.createElement('td');
    newTD.textContent = this[headers[i]]; 
    newTR.appendChild(newTD);
  }
  coffeeData.appendChild(newTR);
  // detect when we are at the end
  // attach the TD onto the TR
  // Attach the TR onto the Table
}

var vanillaArray = ['coconut milk', 'vanilla', 'espresso', 'foam'];

// new is an instantiation of our new coffee object
// simply instantiate the object without saving it to a vairable
new Coffee('Vanilla Latte', 16, true, vanillaArray);

// we can store the object into a variable
var regular = new Coffee('black coffee',12, true, ['coffee', 'sugar'] );
var macchiato = new Coffee('Caramel Macchiato', 32, false, ['vanilla', 'espresso', 'caramel']);

// Create our initial headers for our table to display the data
function createHeader(){
  var createTR = document.createElement('tr');
  for(var i=0; i < headers.length; i++){
    var createTH = document.createElement('th');
    createTH.textContent = headers[i];
    createTR.appendChild(createTH);
  }
  coffeeData.appendChild(createTR);

}

function generateData()
{
  createHeader();
  for(var i=0; i < Coffee.potatos.length; i++){
    Coffee.potatos[i].render();

  }

  // create a footer
  // footer should have the nested for loop
  // for each hour of the day, calculate that time total for each store
}

generateData();
// console.log(Coffee.potatos);

// var vanillaLatte = {
//   name: 'Vanilla Latte',
//   size: 16,
//   isHot: true,
//   ingredients: ['coconut milk', 'espresso', 'vanilla', 'foam'],
//   // method of Drink Coffee
//   drinkCoffee: function(){
//     console.log(`${this.name} has the ingredients of ${this.ingredients}`);
//   }
// }

// var blackCoffee = {
//   name: 'Regular Black Coffee',
//   size: 12,
//   isHot: true,
//   ingredients: ['coffee', 'cream', 'sugar'],
//   drinkCoffee: function(){
//     console.log(`${this.name} has the ingredients of ${this.ingredients}`);
//   }
// }

// vanillaLatte.drinkCoffee();
// blackCoffee.drinkCoffee();
