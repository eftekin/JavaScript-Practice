const readline = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generate random number between 1-10
const randomNumber = Math.ceil(Math.random() * 10);

// Show random number for testing
console.log("Random number:", randomNumber);

// Ask for user input
readline.question("Guess a number between 1-10: ", (input) => {
  const userGuess = parseInt(input);

  if (userGuess && userGuess >= 1 && userGuess <= 10) {
    if (userGuess === randomNumber) {
      console.log("Congratulations! You won! 🎉");
    } else {
      console.log(`Wrong! The number was ${randomNumber} 😔`);
    }
  } else {
    console.log("Please enter a valid number between 1-10!");
  }

  readline.close();
});
