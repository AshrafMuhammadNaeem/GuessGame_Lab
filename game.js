// program data:
var number = 7;
// create variable to store guess number given in for loop code
var guess;
// create a variable name limit to give user try limit
var limit = 5;
// give the user try of 5 with for loop by creating another variable i to relate with limit.
for ( i = 1; i < limit; i++) {
// prompt user for the guess
   guess = window.prompt("Guess the number and enter the number")


// if correct: let the user know they won
if (number == guess) {
    document.write("wow!, your guess is corrent You WON")
    // if incorrect: let the user know and about remaing tries
} else {                                                     
    alert("Your guess is wrong")
     alert("try again, \nTries remaining " + (limit- i) );
    
}
}

    

