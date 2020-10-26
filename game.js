// program data:
var number = 7;
// create variable to store guess number given in for loop code
var guess;
// create a variable name limit to give user try limit
var limit = 6;
var guesses = [];
var won = false;
// give the user try of 5 with for loop by creating another variable i to relate with limit.
for ( i = 1; i < limit; i++) {
// prompt user for the guess
   guess = window.prompt("Guess the number and enter the number")
// if correct: let the user know they won
if (guess == number) {
    document.write("wow!, your guess is corrent You WON")
    won = true;
    // enter break otherwise loop will run till limit.
    break;
    // if incorrect: let the user know and about remaing tries
} else {   
    guesses[i] = guess;
    
     alert("Your guess is wrong.  \nYou have guessed:" + guesses.toString() , "\nTries remaining " + (limit- i) );
    
} 
}
if (!won) { 
    document.write("sorry. You are out of tries. Game Over.")
    
}

    

