var rand = 0;
var word = "";
var songs = [
  "Send me your location",
  "Yesterday all my troubles seemed so far away",
  "Let's make a break for the dawn",
  "Just a small town girl",
  "I still haven't found what I'm looking for",
  "I believed in nothing till I believed in you",
  "Nah nah nah nah nah nah nah, nah nah nah nah, hey Jude",
  "Is this the real life? Is this just fantasy?",
  "I'm living in that twenty-first century",
  "Have you ever seen the rain?",
  "She's got eyes of the bluest skys",
  "So close, no matter how far",
  "I don't want to miss a thing",
  "Take my hand, we'll make it, I swear",
  "That's me in the corner",
  "A mulatto, an albino, a mosquito, my libido",
  "You've been thunderstruck",
  "Another one bites the dust",
  "Eye of the tiger",
  "B-B-B-Bennie and the Jets",
  "Sing us a song you're the piano man",
  "Hello darkness my old friend",
  "Somewhere over the rainbow blue birds fly",
  "Don't worry about a thing",
  "Imagine there's no heaven",
  "Can you feel the love tonight?"
];

function song() {
  rand = Math.floor(Math.random() * songs.length);
  word = songs[rand];
}
