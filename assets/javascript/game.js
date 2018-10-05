//variables
var wins = 1;
var losses = 0;
var guessesRemaining = 10;
var lettersUsed = [];

// alphabet array
var alphabet =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];

// random computer choice from array
var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];

// key press function and alert if user chooses key other than A-Z
document.onkeyup = function(event) {
  var userChoice = event.key;
  var regexp = /[a-z]/gi;
    if (!regexp.test(userChoice)){
      alert("Please choose a letter. Numbers and symbols will not work!");
    }
    
    // user lose alert and game reset when remaining guesses equals zero
    if (guessesRemaining <= 0) {
      losses++;
      document.getElementById("losses").innerHTML = losses++;
      alert("You lost!");
      guessesRemaining = 10;
      lettersUsed = [];
      document.getElementById("letterUsed").innerHTML = letterUsed;
      document.getElementById("guessesRemaining").innerHTML = 10;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
    }

    // user win alert and game reset when game is won
    if (computerChoice === userChoice) {

      alert("You won!");
      document.getElementById("wins").innerHTML = wins++;
      lettersUsed = [];
      document.getElementById("lettersUsed").innerHTML = lettersUsed;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
      guessesRemaining = 10;
      document.getElementById("guessesRemaining").innerHTML = 10;
    } else {
      document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
      lettersUsed.push(userChoice);
      document.getElementById("lettersUsed").innerHTML = lettersUsed;
    }
}