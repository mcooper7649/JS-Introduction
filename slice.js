// ## Slice Challenge
// ---

// Implement Twitter Character counter again but this time slice any characters after 140 and return the original message minus the slice.


var userInput = prompt("Tell us your thoughts..(140 Character max)");
var message = userInput.slice(0, 140);


alert("You have written " + message)