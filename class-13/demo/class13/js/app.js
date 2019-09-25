'use strict';

// get elements from the HTML fieldset
var coffeeForm = document.getElementById('coffeeForm');
var orderUL = document.getElementById('orders');

Coffee.allCoffee = [];

// constructor function
function Coffee(name, size, milk, drink){
  this.name = name;
  this.size = size;
  this.milk = milk;
  this.drink = drink;
  
  Coffee.allCoffee.push(this);

  console.log(this);
  updateStorage();
}

 Coffee.prototype.drink = function() {
  console.log('hello');
}

function updateStorage(){
  // to save the coffee orders into local storage

  // convert our array of objects into a JSON string. 
  var jsonString = JSON.stringify(Coffee.allCoffee);
  localStorage.setItem('coffee', jsonString);
}

// create a function that GETS the data from local storage
// sets our global array to the data from local storage. 
function getCoffeeOrders(){
  // retrieve the data from local storage
  var data = localStorage.getItem('coffee');
  var parsedData = JSON.parse(data);
  console.log("parsed data", parsedData);

  // set the global Coffee.allcoffee array to the data we retrieved from local storage
  Coffee.allCoffee = parsedData;
  // convert the data to usable javaScript
  console.log(Coffee.allCoffee);
  renderOrders();
}


function getCoffeeOrdersAlternative(){
  var data = localStorage.getItem('coffee');
  var parsedData = JSON.parse(data);

  // parsed data is our JS object array
  for(var i=0; i < parsedData.length; i++){
    new Coffee(parsedData[i].name, parsedData[i].size, parsedData[i].milk, parsedData[i].drink);
  }
  console.log(Coffee.allCoffee);

  renderOrders();
}

// we need an event listener on our submit order button. we can't submit the info without it. 

// function declaration
function handleCoffeeOrder(event){
  event.preventDefault();

  var coffee = event.target;
  // store our values from our form
  var name = coffee.name.value;
  var size = coffee.size.value;
  var milk = coffee.milk.value;
  var drink = coffee.drinkType.value;

  // instantiate the object
  new Coffee(name, size, milk, drink );

  renderOrders();
}

function renderOrders(){
  orderUL.textContent= "";
  for(var i=0; i < Coffee.allCoffee.length; i++){
    // create a list item
    var orderLI = document.createElement('li');
    var orderP = document.createElement('p');
    var output = `${Coffee.allCoffee[i].name} orderd a ${Coffee.allCoffee[i].size} oz ${Coffee.allCoffee[i].drink} with ${Coffee.allCoffee[i].milk} milk`;

    // added text to the p tag
    orderP.textContent = output;
    // attached the p tag to the LI
    orderLI.appendChild(orderP);
    // append the li to the ul
    orderUL.appendChild(orderLI);

  }
}

getCoffeeOrdersAlternative();
coffeeForm.addEventListener('submit', handleCoffeeOrder)