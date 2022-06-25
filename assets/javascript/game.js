//array of themed words
var themedWords = ["brain", "jscript", "gatsby", "damson", "mister"];

//   1. Comp chooses random word from Array
var compWord = themedWords[Math.floor(Math.random() * themedWords.length)];
//   console.log(computerGuess);

//for every index in current random word, pushes underscore to blanksArr and creates array that will EVENTUALLY be displayed.
//   2. User chooses a letter on keyboard that could be in word
document.onkeyup = function (event) {
  console.log(event.key);
  //to check if key pressed is a letter
  if (!(KeyboardEvent.keyCode >= 65 && KeyboardEvent.keyCode <= 90)) {
    alert("Try again - Word only contains letters");
  } else {
    if (compWord.includes(event.key)) {
      guessCountdown--;
      console.log("yes it is in word");
      var index = compWord.indexOf(event.key);
      console.log("index of " + index);
      // next, code how to replace it in the blank array
      blanksArr[index] = event.key;
      document.getElementById("wordToGuess").innerHTML = blanksArr.join(" ");
      guessesRemains.innerHTML = guessCountdown;
    }

    //defines what happens when incorrect answer chosen
    else {
      createBadGuess(event.key);
      guessCountdown--;
      document.getElementById("wrongLettersGuessed").innerHTML =
        badGuess.join(" ");
      guessesRemains.innerHTML = guessCountdown;
    }
    if (!blanksArr.includes("_")) {
      alert("You win!");
      wins++;
      document.getElementById("wins").innerHTML = wins;
      gameReset();
    }
    if (guessCountdown === 0) {
      alert("You lost - try again!");
      gameReset();
    }
  }
};

function createBadGuess(userPick) {
  console.log(compWord);
  badGuess.push(userPick);
  console.log(badGuess);
}

//CREATE RESET GAME FUNCTION
function gameReset() {
  compWord = themedWords[Math.floor(Math.random() * themedWords.length)];
  createBlanksArr();
  document.getElementById("wordToGuess").innerHTML = blanksArr.join(" ");
  guessCountdown = 11;
  badGuess = [];
  document.getElementById("wrongLettersGuessed").innerHTML = badGuess;
}

window.onload = createBlanksArr;

function createBlanksArr() {
  blanksArr = [];
  for (i = 0; i < compWord.length; i++) {
    //   console.log(computerGuess[i]);
    blanksArr.push("_");
  }
}

//create to hold unguessed letters & incorrect user guesses
var blanksArr = [];
var badGuess = [];

//starts off wins with zero
var wins = 0;
var guessCountdown = 10;

//Prints stats on screen by linking ???
// grabs id from front end and saves it as variable winsBox to use in JS
var winsBox = document.getElementById("wins");
//using var winsBox to displays wins variable to front end
winsBox.innerHTML = wins;

var guessesRemains = document.getElementById("guessesLeft");
guessesRemains.innerHTML = guessCountdown;

var priorLetters = document.getElementById("wrongLettersGuessed");
// priorLetters.innerHTML = document.badGuess;

//TODO: print the underscores to screen
var word = document.getElementById("wordToGuess");
// word.innerHTML = blanksArr;
createBlanksArr();
document.getElementById("wordToGuess").innerHTML = blanksArr.join(" ");

//   1. Comp chooses random word from Array
//   2. User chooses a letter on keyboard that could be in word
//   3. Determine if letter is in word
//     a. If letter is in word
//         1. letter will display instead of blank space
//         2. If all letters guessed correctly
//             a. display GAME OVER - YOU WIN!
//             b. 'wins' counter increases by 1
//             c. game restarts
//     b. If letter is NOT in word
//         1. if not in 'wrong letters guessed'
//             a. add letter to 'wrong letters guessed'
//   4.'Guesses left' counter decreases by 1
//   5. If 'Guesses left' got to zero
//     a. display GAVE OVER - YOU LOSE!
//     b. game restarts

// TODO: turn word into array
// TODO: array of underscores

// TODO:Limit # of guesses user has
// TODO:log user keystroke / "document key up"
// TODO:match selection to letters in word
// TODO:MAYBE empty array to push user choice
