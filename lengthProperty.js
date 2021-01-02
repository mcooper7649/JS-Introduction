// ## Length Challenge

// 1. Prompt user to type a twitter like message
// 2. Return the amount of Characters remaining of a max total 140 characters.

// See lengthProperthy.js for solution.
var userInput = prompt("Tell us your thoughts..(140 Character max)");
var message = userInput.length;
var remaining = 140 - message;

alert("You have written " + message + " characters, you have " + remaining + " characters remaining." )

