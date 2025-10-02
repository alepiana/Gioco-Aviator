// function that extract a number between min & max 
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Starting round
function startGame() {
  const target = getRandomNumber(1, 100); // Random number between 1 & 100
  console.log("Numero estratto (target):", target);

  // Possible future logic for time bar or button
}

// Let the game begins
startGame();
