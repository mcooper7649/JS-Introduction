// ## Functions Challenge 1 Using Karel the Robot
// ---

// 1) Using a 5x5 grid
// 2) Move karel 4 spaces forward
// 3) Move karel 4 space up

// * [Karel-the-Robot](https://stanford.edu/~cpiech/karel/ide.html)
// * Solution in functions.js


function main(){
    //your code here
    goHome();
    
 }
 
 
 function goHome(){
    move();
    move();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    move();
    }



    // ## Functions Challenge 2 Using Karel the Robot
    // ---
    // 1) Using a 5x5 grid
    // 2) Have Karel putBeeper(); in a diagnal pattern across the diagram using the lest repeitistion of code as possible.

    function main(){
        //your code here
        putBeeper();
        runKarel();
        
        
     }
     
     function beepPut(){
        
        move();
        turnLeft();
        move();
        putBeeper();
        turnRight();
        }
        
     
     function runKarel(){
        beepPut();
        beepPut();
        beepPut();
        beepPut();
        }

