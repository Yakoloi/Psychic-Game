
var letterArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var mysteryLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
console.log ('initial mysteryLetter ' + mysteryLetter);

function reset () {
  mysteryLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
  document.getElementById('lguess').innerHTML = "";
  console.log ('new mysterLetter ' + mysteryLetter)
}


var wins = 0;
var lives = 10;
var losses = 0;

document.getElementById('wintab').innerHTML = "Wins: " + wins;
document.getElementById('lives').innerHTML = "Lives: " + lives;
document.getElementById('losstab').innerHTML = "Losses: " + losses;


document.onkeyup = function(event) {
  var playerGuess = event.key;

  if (playerGuess === mysteryLetter) {
    wins++; reset();
  } else {
    lives--;
  }

  if (lives === 0){
    losses++; lives = 10; reset();
  }

  console.log(losses);

  document.getElementById('lguess').innerHTML +=playerGuess;
  document.getElementById('wintab').innerHTML = "Wins: " + wins;
  document.getElementById('lives').innerHTML = "Lives: " + lives;
  document.getElementById('losstab').innerHTML = "Losses: " + losses;

}
