// create variables so that this Array can be stored all the letters not in currentGuessWord
var usedLetterArray = [];
// create variable that can be changed
var currentGuessWord = "";
var currentMaskedWord = "";

var tries = 7;
var wins = 0;

// When a key is pressed
document.onkeyup = event => {
  var keyPressed = event.key;
  // if keyPressed does not equal "nothing" and keypressed matches regex and keypressed is only 1 letter
  if (
    keyPressed !== "" &&
    keyPressed.match(/[a-zA-Z]/g) &&
    keyPressed.length === 1
  ) {
    //if key pressed is used before
    if (usedLetterArray.includes(keyPressed)) {
      alert("You have guessed this letter before, try something else.");
    } else {
      // run this function with "keyPressed" the keypressed
      validateGuess(keyPressed);
    }
  }
  //updates the usedLetterArray
  document.getElementById("usedLetters").innerHTML = usedLetterArray;
};

function tryCounter() {
  // When activated, increment counter by 1
  tries--;
  // if user made 7 guesses
  if (tries === 0) {
    // reset game
    setNewGuess();
    alert("You've broke the game");
  }
  // updates the try counter
  document.getElementById("tryCounter").innerHTML = tries.toString();
}

function setNewGuess() {
  // reset try counter to 0
  tries = 7;
  // reset the usedLetterArray
  usedLetterArray = [];
  // possible answers
  var artist = [
    "Taylor Swift",
    "Jason Mraz",
    "Avicii",
    "The Beatles",
    "Sigma",
    "WestLife",
    "Backstreet Boys"
  ];
  // randomizes the answers in "artist" array
  currentGuessWord = artist[Math.floor(Math.random() * artist.length)];
  // This replace function uses Regex (Regular Expression) - https://en.wikipedia.org/wiki/Regular_expression
  currentMaskedWord = currentGuessWord.replace(/[a-zA-Z]/g, "_");
  // printing out the try counter and unknown artist
  document.getElementById("guessWord").innerHTML = currentMaskedWord;
  document.getElementById("tryCounter").innerHTML = tries.toString();
}

function validateGuess(keyPressed) {
  // when key is pressed, it makes sure that it is either a lower or uppercase
  if (
    currentGuessWord.includes(keyPressed.toLowerCase()) ||
    currentGuessWord.includes(keyPressed.toUpperCase())
  ) {
    // checks keypressed against every single character of the word
    for (var i = 0; i < currentGuessWord.length; i++) {
      // replace "_" with keypressed if "i" is found to be the same
      if (currentGuessWord[i].toLowerCase() == keyPressed) {
        // replaces currentmaskedword with that letter
        currentMaskedWord = replaceAt(
          currentMaskedWord,
          i,
          currentGuessWord[i]
        );
      }
    }
    // updates the guessWord
    document.getElementById("guessWord").innerHTML = currentMaskedWord;
    //runs win function
    win();
  } else {
    // if the key does not matches any letter in the phrase, it pushes that keypressed to the usedLetterArray
    usedLetterArray.push(keyPressed);
    // runs try counter
    tryCounter();
  }
}

function win() {
  // if currentMaskedWord does not have "_" then alert done
  // does not have is dictated by "!"
  if (!currentMaskedWord.includes("_")) {
    alert("done");
    setNewGuess();
    wins++;
  }
  document.getElementById("win").innerHTML = wins.toString();
}

//how does it work (https://www.w3schools.com/jsref/jsref_substring.asp)
function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}
