//create an array of Artist
var Artist = [
  "thescript",
  "jasonmraz",
  "taylorswift",
  "avicii",
  "sigma",
  "maroonfive"
];

//pick a random word from the Artist array

var rand = Artist[Math.floor(Math.random() * Artist.length)];

//sets up the answerArray to show how many letters there are
//using _'s

var answerArray = [];
for (var i = 0; i < rand.length; i++) {
  answerArray[i] = "_";
}

//create a variable to hold the number of remainingLetters to be guessed
var remainingLetters = rand.length;

// ********* THE MAIN GAME LOOP ******************

// while there are letters left to be guessed
while (remainingLetters > 0) {
  //show the player their progress
  alert(answerArray.join(" "));

  //get a guess from the player
  var guess = prompt("Guess a letter or click cancel to stop playing.");

  //if the guess is blank
  if (guess == null) {
    //exit the game loop
    break;
    //if the guess is more than one letter or no letters
  } else if (guess.length !== 1) {
    //alert the player to guess a single letter
    alert("Please enter a single letter only.");
    //valid guess
  } else {
    //update the game state with the guess
    for (var j = 0; j < rand.length; j++) {
      //if the letter they guessed is in the word
      //at that point or index
      if (rand[j] == guess) {
        //update the answer array with the letter they guessed
        //at that point or index
        answerArray[j] = guess;
        //subtract one from remaining letters
        remainingLetters--;
      }
    }
  }
  //***************END OF GAME LOOP*********************
}
//let player know the word
alert(answerArray.join(" "));
//Congratulate the player
alert("Well done! The answer was " + rand);
