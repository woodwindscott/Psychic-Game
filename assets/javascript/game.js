// Setup of initial variables
var wins = 0;
var losses = 0;
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessesLeft = 9;
var computerGuess;

//Create functions to display scores, guesses remaining and guessed letters + computer Guess
function displayWins() {
    var targetWin = document.getElementById("win");
    targetWin.textContent = wins;
}

function displayLosses() {
    var targetLose = document.getElementById("lose");
    targetLose.textContent = losses;
}

function displayGuessesLeft() {
    var targetGuessLeft = document.getElementById("guessLeft");
    targetGuessLeft.textContent = guessesLeft;
}

function resetGuesses() {
    document.getElementById("guessed").innerHTML = "";
}

function newComputerGuess() {
    computerGuess = letters[Math.floor(Math.random() * 26)];
    console.log("New Computer Guess: " + computerGuess);
}

//Computer guess random letter from array
newComputerGuess();

//Event listener
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    var userGuessCode = event.keyCode;

    displayWins();
    displayLosses();

    var targetGuessSoFar = document.getElementById("guessed");
    var newSpan = document.createElement("span");
    newSpan.textContent = userGuess + ", ";
    targetGuessSoFar.appendChild(newSpan);

    //Error checking - make sure they select a letter
    if (userGuessCode >= 65 && userGuessCode <= 90) {
        guessesLeft--;
        displayGuessesLeft();

        //If guessed correctly...
        if (userGuess === computerGuess && guessesLeft >= 0) {
            wins++;
            guessesLeft = 9;
            newComputerGuess();
            displayGuessesLeft();

            alert(userGuess + " is correct!");

            resetGuesses();
            displayWins();

        //No more guesses remaining.  You lose.
        } else if (userGuess !== computerGuess && guessesLeft === 0) {
            losses++;
            guessesLeft = 9;

            alert("The computer guessed " + computerGuess + ". Try again.")

            newComputerGuess();
            resetGuesses();
            displayGuessesLeft();
            displayLosses();
        }
    }
}