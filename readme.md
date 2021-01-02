# Javascript Module Introduction
---

## JS-Introduction
---
Brendan Eich first created LiveScript which evolved into JavaScript. ECMA script is the European Computer Manufactureres Associates (ECMA) that was a way to Standardize JavaScript as many different versions began to come out. You will hear the terms "ES6" or "ES7" and this a reference to the version of ECMA.

Think of JavaScript like  script in a play, it tells the code what to do and when.

Java and JavaScript have zero relation.

There are two times of programming languages, Interpreted and Compiled.

1. Compiled languages, such as Java, C/C++, and Swift need to be ran into a compiler before they can be ran. 
2. Interpreted Languages, such as JavaScript, Python, Ruby need to be read line by line and used to be slower than compiled lanauges. Orignally JavaScript was only ran on browser type clients.

> However, modern JavaScript is utilized in frameworks from the frontend to the backend. A benefit of JavaScript it is supported natively by all the major browsers. You can even write code in other languages then compile it into JavaScript these days. It's the language that powers the web. Latest Research shows JavaScript the #1 utilized language.

# JavaScript Browser Tips, Tools and Basics
---

## Tips
---

* Want to type multiple lines of code into the console? Hold SHIFT
* [MDN-JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript) - Use the search function to find the relevant command. 

## Basic Commands
---

* `alert("Hello");`  - Basic Alert Command  
> alert = function  
> Hello = Mesage 
> ; = end

* `typeof(45);` - Type of Returns the DataType. Type of Returns number in this example. 

* `prompt("What is your name?");` - Similiar to Alert Command Except it takes User input data

* `var myName = Michael` - Sets a Variable. In this example Michael is saved to myName and when myName is called will return Michael.
> var = Keyword
> myName = Name
> Michael = value

## Chrome/Brave Developer Tools
---
* Developer Tools > Console is a in Browser Tool that lets you run JavaScript Code locally.
* Developer Tools > Sources > Snippets is a good place to write local code in the browser but not directly into the console, you can also save it for later date.
    - Save your Snippet then hit the CMD + Enter to Run it

## Data Types
---
1. Strings | Text
2. Numbers | Numbers
3. Boolean | True or False

## Strings
---

Concatenation = Joining two strings together
``alert("hello" + " World");``  - Basic Concatenation 

## Strings Challenge 1
---

Set var1 to be a message | Hello
Set var2 to be a name | "Mike"
On a single line of code create a popup or alert that combines or concatenates these two variables into a single string.

see concatenation.js for solution.

## Variables
---

* A variable stores data for later use. Variables are not static and the data can be changed. 
`var myName = Michael` = If you type this then enter "myName" into console, Michael will be returned.
`myName = Mike C` = If you want to change a pre-established variable no need to declare var before the variable name.

1) Variables cannot start with numbers
2) Variables cannot contain spaces
3) Only letters numbers or symbols can be variables (no -).
4) Use camelCase - first word lowercase every word after is capitalized.

## JavaScript Challenge 1
---

Write an Alert that calls the name of the Variable without typing any strings.

```
var myName = "Jack Bauer"
var yourName = prompt("What is your Name?");
alert("My Name is " + myName + ", welcome to my course " + yourName + "!");
```
> Line 1 sets an instructor name variable
> Line 2 Prompts for yourName and stores it.
> Line 3 Alert window welcome introduction using both variables

## Javascript Variables Challenge 2
---

Swap Variable Values without
1) Redeclaring A or B
2) Typing a Number
3) Reassigning A or B

See veriables.js for solution

```
function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:



    
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}
```


## Length Property
---
``var example = "mike"``

``example.length ``
- Returns the number of characters in the variable example (Which is 4)

## Length Challenge

1. Prompt user to type a twitter like message
2. Return the amount of Characters remaining of a max total 140 characters.

See lengthProperthy.js for solution.

## Slice Property
---

Slice lets you slice or removing part of the data.

Example
var name = "Mike"
name.slice(0,1)  - this is only the character at the 0 position. 

Returns the letter "M"

var name = "Mike"
name.slice(1,3)  - this is only the character at the 0 position. 

Returns the letter "ik" would be returned.

## Slice Challenge
---

Implement Twitter Character counter again but this time slice any characters after 140 and return the original message minus the slice.


See sliceProperty.js for solution.








## Notable Links
---

[MDN-JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)