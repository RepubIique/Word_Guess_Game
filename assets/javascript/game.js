var gameState = {
  wins: 0,
  tries: 7
};

var gameVariables = {
  currentGuessObject: {},
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
    winLosePanel(false);
    setNewGuess();
  }
  // updates the try counter
  document.getElementById("tryCounter").innerHTML = gameState.tries.toString();
}

function getNewArtist() {
  var artist_array = [
    {
      name: "Jason Mraz",
      image: "../Word_Guess_Game/assets/images/mraz.jpg",
      music: "mraz.mp3"
    },
    {
      name: "Linkin Park",
      image: "../Word_Guess_Game/assets/images/park.jpg",
      music: "park.mp3"
    },
    {
      name: "Taylor Swift",
      image: "../Word_Guess_Game/assets/images/swift.jpg",
      music: "swift.mp3"
    },
    {
      name: "Avicii",
      image: "../Word_Guess_Game/assets/images/avicii.jpg",
      music: "avicii.mp3"
    },
    {
      name: "The Beatles",
      image: "../Word_Guess_Game/assets/images/beatles.jpg",
      music: "beatles.mp3"
    },
    {
      name: "Westlife",
      image: "../Word_Guess_Game/assets/images/westlife.jpg",
      music: "westlife.mp3"
    },
    {
      name: "Sigma",
      image: "../Word_Guess_Game/assets/images/sigma.jpg",
      music: "sigma.mp3"
    }
  ];

  // randomizes the answers in "artist" array
  gameVariables.currentGuessObject =
    artist_array[Math.floor(Math.random() * artist_array.length)];

  gameVariables.currentGuessWord = gameVariables.currentGuessObject.name;

  // This replace function uses Regex (Regular Expression) - https://en.wikipedia.org/wiki/Regular_expression
  gameVariables.currentMaskedWord = gameVariables.currentGuessObject.name.replace(
    /[a-zA-Z]/g,
    "_"
  );
  // printing out the try counter and unknown artist
  document.getElementById("guessWord").innerHTML =
    gameVariables.currentMaskedWord;
  document.getElementById("tryCounter").innerHTML = gameState.tries.toString();

  // document.getElementById("artistImage").src =
  //   gameVariables.currentGuessObject.image;
}

function setNewGuess() {
  // reset try counter to 0
  gameState.tries = 7;
  // reset the gameVariables.usedLetterArray
  gameVariables.usedLetterArray = [];
  // possible answers
  getNewArtist();
}

function validateGuess(keyPressed) {
  // when key is pressed, it makes sure that it is either a lower or uppercase

  let { currentGuessWord, currentMaskedWord } = gameVariables;

  if (
    currentGuessWord.includes(keyPressed.toLowerCase()) ||
    currentGuessWord.includes(keyPressed.toUpperCase())
  ) {
    // checks keypressed against every single character of the word
    for (var i = 0; i < currentGuessWord.length; i++) {
      // replace "_" with keypressed if "i" is found to be the same
      if (currentGuessWord[i].toLowerCase() == keyPressed) {
        // replaces gameVariables.currentMaskedWord with that letter
        currentMaskedWord = replaceAt(currentMaskedWord, i, keyPressed);
      }
    }
    // updates the guessWord
    document.getElementById("guessWord").innerHTML = currentMaskedWord;

    gameVariables.currentMaskedWord = currentMaskedWord;
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
    gameState.wins++;
    winLosePanel();
    var img = document.createElement("img");
    img.setAttribute("width", "200");
    img.setAttribute("height", "200");
    img.src = gameVariables.currentGuessObject.image;
    document.getElementById("img-singer").appendChild(img);
    setNewGuess();
  }
  document.getElementById("win").innerHTML = gameState.wins.toString();

  return true;
}

function winLosePanel() {
  if (!gameVariables.currentMaskedWord.includes("_")) {
    document.getElementById("winLoseText").innerHTML =
      "Congrats you've guessed it correctly";
  } else {
    document.getElementById("winLoseText").innerHTML = "Too bad try again";
  }
}

//how does it work (https://www.w3schools.com/jsref/jsref_substring.asp)
function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}
