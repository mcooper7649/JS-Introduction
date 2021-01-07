//Basic Function with Input and Output

// Declare Function with name and pass Input "Money"
// Pass Instructions for the function bewteen {}
// Using Math take money and figure out how many bottles of milk you can buy if the milk is 1.5
// return Money modulo bottle price of 1.5
// assign the function to a variable named change

function getMilk(money, costPerBottle) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return calcChange(money, 1.5);  //returns the remainder of the bottles of milk ie; change;
  }

  function calcBottles(startingMoney, costPerBottle){  // This function takes the input variables money, 1.5 from the getMilk function
    var numOfBottles = Math.floor(startingMoney / costPerBottle);  // calculates and floors the number of bottles we can buy
    return numOfBottles  //returns
  }

  function calcChange(startingAmount, costPerBottle){
    var change  = startingAmount % costPerBottle;
    return change;
  }

  console.log("Hello master, here is your " + getMilk(10, 3) + " change.");