var gameState = {
  wins: 0,
  tries: 7
};

var gameVariables = {
  currentGuessWord: "",
  currentMaskedWord: "",
  usedLetterArray: []
};

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
    if (gameVariables.usedLetterArray.includes(keyPressed)) {
      alert("You have guessed this letter before, try something else.");
    } else {
      // run this function with "keyPressed" the keypressed
      validateGuess(keyPressed);
    }
  }
  //updates the gameState.gameVariables.usedLetterArray
  document.getElementById("usedLetters").innerHTML =
    gameVariables.usedLetterArray;
};

function tryCounter() {
  // When activated, increment counter by 1
  gameState.tries--;
  // if user made 7 guesses
  if (gameState.tries === 0) {
    // reset game
    setNewGuess();
    alert("You've broke the game");
  }
  // updates the try counter
  document.getElementById("tryCounter").innerHTML = gameState.tries.toString();
}

function getNewArtist() {
  var artist_array = [
    {
      name: "Jason Mraz",
      image: "mraz.jpg",
      music: "mraz.mp3"
    },
    {
      name: "Linkin Park",
      image: "park.jpg",
      music: "park.mp3"
    },
    {
      name: "Taylor Swift",
      image: "swift.jpg",
      music: "swift.mp3"
    },
    {
      name: "Avicii",
      image: "avicii.jpg",
      music: "avicii.mp3"
    },
    {
      name: "The Beatles",
      image: "beatles.jpg",
      music: "beatles.mp3"
    },
    {
      name: "Westlife",
      image: "westlife.jpg",
      music: "westlife.mp3"
    },
    {
      name: "Sigma",
      image: "sigma.jpg",
      music: "sigma.mp3"
    },
    {
      name: "BackStreet Boys",
      image: "boys.jpg",
      music: "boys.mp3"
    }
  ];

  // randomizes the answers in "artist" array
  gameVariables.currentGuessWord =
    artist_array.name[Math.floor(Math.random() * artist_array.name.length)];
  // This replace function uses Regex (Regular Expression) - https://en.wikipedia.org/wiki/Regular_expression
  gameVariables.currentMaskedWord = gameVariables.currentGuessWord.replace(
    /[a-zA-Z]/g,
    "_"
  );
  // printing out the try counter and unknown artist
  document.getElementById("guessWord").innerHTML =
    gameVariables.currentMaskedWord;
  document.getElementById("tryCounter").innerHTML = gameState.tries.toString();
}

function setNewGuess() {
  // reset try counter to 0
  gameState.tries = 7;
  // reset the gameState.gameVariables.usedLetterArray
  gameVariables.usedLetterArray = [];
  // possible answers
  getNewArtist();
  // var artist = [
  //   "Taylor Swift",
  //   "Jason Mraz",
  //   "Avicii",
  //   "The Beatles",
  //   "Sigma",
  //   "WestLife",
  //   "Backstreet Boys"
  // ];

  // // This replace function uses Regex (Regular Expression) - https://en.wikipedia.org/wiki/Regular_expression
  // gameVariables.currentMaskedWord = gameVariables.currentGuessWord.replace(
  //   /[a-zA-Z]/g,
  //   "_"
  // );
  // // printing out the try counter and unknown artist
  // document.getElementById("guessWord").innerHTML =
  //   gameVariables.currentMaskedWord;
  // document.getElementById("tryCounter").innerHTML = gameState.tries.toString();
}

function validateGuess(keyPressed) {
  // when key is pressed, it makes sure that it is either a lower or uppercase
  if (
    gameVariables.currentGuessWord.includes(keyPressed.toLowerCase()) ||
    gameVariables.currentGuessWord.includes(keyPressed.toUpperCase())
  ) {
    // checks keypressed against every single character of the word
    for (var i = 0; i < gameVariables.currentGuessWord.length; i++) {
      // replace "_" with keypressed if "i" is found to be the same
      if (gameVariables.currentGuessWord[i].toLowerCase() == keyPressed) {
        // replaces gameVariables.currentMaskedWord with that letter
        gameVariables.currentMaskedWord = replaceAt(
          gameVariables.currentMaskedWord,
          i,
          gameVariables.currentGuessWord[i]
        );
      }
    }
    // updates the guessWord
    document.getElementById("guessWord").innerHTML =
      gameVariables.currentMaskedWord;
    //runs gameState.win function
    win();
  } else {
    // if the key does not matches any letter in the phrase, it pushes that keypressed to the gameState.gameVariables.usedLetterArray
    gameVariables.usedLetterArray.push(keyPressed);
    // runs try counter
    tryCounter();
  }
}

function win() {
  // if gameVariables.currentMaskedWord does not have "_" then alert done
  // does not have is dictated by "!"
  if (!gameVariables.currentMaskedWord.includes("_")) {
    alert("done");
    setNewGuess();
    gameState.wins++;
  }
  document.getElementById("win").innerHTML = gameState.wins.toString();
}

//how does it work (https://www.w3schools.com/jsref/jsref_substring.asp)
function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}
