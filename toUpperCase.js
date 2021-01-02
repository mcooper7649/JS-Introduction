// ## toUpperCase Challenge

// Objection | Send an alert that says "Hello, NAME" but their name needs to be capitalized on the first character but not the rest.

var guestName = prompt("What is your name?");
var firstChar = guestName.slice(0,1)
firstChar = firstChar.toUpperCase();
var endName = guestName.slice(1, )
endName = endName.toLowerCase();

alert("Hello, " + firstChar + endName + ", welcome to our hotel. Please enjoy your stay.")