var array = [];
var currentGuessWord = "";
var currentMaskedWord = "";

document.onkeyup = event => {
  var x = event.key;
  if (x !== "") {
    if (array.includes(x)) {
      alert("You have guessed this letter before, try something else.");
    } else {
      validateGuess(x);
    }
  }
  document.getElementById("usedLetters").innerHTML = array;
};

function setNewGuess() {
  var artist = [
    "Yesterday all my troubles seemed so far away",
    "Just a small town girl",
    "I still haven't found what I'm looking for",
    "Nah nah nah nah nah nah nah, nah nah nah nah, hey Jude",
    "Is this the real life? Is this just fantasy?",
    "I don't want to miss a thing",
    "Take my hand, we'll make it, I swear",
    "You've been thunderstruck",
    "Sing us a song you're the piano man",
    "Hello darkness my old friend",
    "Can you feel the love tonight?"
  ];
  currentGuessWord = artist[Math.floor(Math.random() * artist.length)];
  // This replace function uses Regex (Regular Expression) - https://en.wikipedia.org/wiki/Regular_expression
  currentMaskedWord = currentGuessWord.replace(/[a-zA-Z]/g, "_");
  document.getElementById("guessWord").innerHTML = currentMaskedWord;
  array = [];
}

function validateGuess(x) {
  if (
    currentGuessWord.includes(x.toLowerCase()) ||
    currentGuessWord.includes(x.toUpperCase())
  ) {
    for (var i = 0; i < currentGuessWord.length; i++) {
      if (currentGuessWord[i].toLowerCase() == x) {
        currentMaskedWord = replaceAt(
          currentMaskedWord,
          i,
          currentGuessWord[i]
        );
      }
    }

    document.getElementById("guessWord").innerHTML = currentMaskedWord;
  } else {
    array.push(x);
  }
}

//how does it work (https://www.w3schools.com/jsref/jsref_substring.asp)
function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}
