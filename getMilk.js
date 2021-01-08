//Basic Function with Input and Output

// Declare Function with name and pass Input "Money"
// Pass Instructions for the function bewteen {}
// Using Math take money and figure out how many bottles of milk you can buy if the milk is 1.5
// return Money modulo bottle price of 1.5
// assign the function to a variable named change

function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var numberOfBottles = Math.floor(money / 1.5);
    console.log("buy " + numberOfBottles + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money % 1.5;  //returns the remainder of the bottles of milk ie; change;
  }

  var change =  getMilk(5);   