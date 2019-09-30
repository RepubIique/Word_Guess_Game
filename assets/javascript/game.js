var choice = [
  "Send me your location",
  "Yesterday all my troubles seemed so far away",
  "Let's make a break for the dawn",
  "Just a small town girl",
  "I still haven't found what I'm looking for",
  "I believed in nothing till I believed in you",
  "Nah nah nah nah nah nah nah, nah nah nah nah, hey Jude",
  "Is this the real life? Is this just fantasy?",
  "I'm living in that twenty-first century"
];
var rand = Math.floor(Math.random() * choice.length);
var answers = choice[rand];
var display = [answers];
var word = "";
var setup = function() {
  for (var i = 0; i < answers.length; i++) {
    display[i] = " _";
    word = word + display[i];
  }
  document.getElementById("choice").innerHTML = word;
  word = "";
};

// window.onload = function() {
//     setup();
//   };
