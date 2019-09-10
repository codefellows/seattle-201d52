'use strict'

console.log('hello');

// var answer = confirm('Are you ready?');

// var guess = prompt("type something in");

// if(guess === 'Amanda'){
//   console.log('you typed in Amanda');
// } else{
//   console.log('you typed in something else');
// }

var myBool = true;
var anotherBool = false;
var thirdBool = true;


if(myBool && thirdBool){
  console.log("myBool & thirdBool are true");
} else if(myBool || anotherBool)
{
  console.log("one of these conditions is true");
} else if(!thirdBool)
{
  console.log('thirdBool is NOT true')
}
else{
  console.log('none of the above is true');
}

if (( !myBool ) && (thirdBool ))
{
  console.log("both are true");
} else if(anotherBool === false)
{
  console.log("anotherBool is false");
}


var color = prompt('what is your favorite color?');

// RED === red
// ReD === red
// rEd === red
switch(color.toLowerCase()){
  case 'red':
    console.log('You picked red');
    break;
  case 'blue':
    console.log('you picked blue');
    break;
  case 'orange':
    console.log('you picked orange');
    break;
  default:
    console.log('you picked something different');
}

