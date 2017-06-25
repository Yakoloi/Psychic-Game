var letterArray = ['a','b','c'];

var mysteryLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
console.log ('mysteryLetter ' + mysteryLetter);

var wins = 0;
var lives = 10;
var losses = 0;

document.getElementById('wintab').innerHTML = "Wins: " + wins;
document.getElementById('lives').innerHTML = "Lives: " + lives;
document.getElementById('losstab').innerHTML = "Losses: " + losses;


document.onkeyup = function(event) {
  var playerGuess = event.key;
  console.log('playerGuess ' + playerGuess)

  if (playerGuess == mysteryLetter){
    wins++;
  } else {
    lives--;
  }

  if (lives === 0){
    losses++; lives = 10;
    document.getElementById('lguess').innerHTML = ""
  }
  console.log(losses);

  document.getElementById('lguess').innerHTML +=playerGuess;
  document.getElementById('wintab').innerHTML = "Wins: " + wins;
  document.getElementById('lives').innerHTML = "Lives: " + lives;
  document.getElementById('losstab').innerHTML = "Losses: " + losses;

}
