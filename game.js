// program data:
var number = window.prompt("Enter a random number");
// prompt user for the guess
var guess = window.prompt("Guess the number and enter the number")
// if correct: let the user know they won
if (number == guess) {
    document.write("wow!, your guess is corrent You WON")
    // if incorrect: let the user know
} else {                                                     
    alert("Your guess is wrong")
    document.write("Wrong Guess")
}
