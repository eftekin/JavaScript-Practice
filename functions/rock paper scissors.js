const getUserChoice = (userInput) => {
  var userInput = "scissors";
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    userInput = userInput.toLowerCase();
    return userInput;
  } else {
    console.log("Something went wrong.");
  }
};

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "game was a tie.";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "the computer won.";
    } else {
      return "the user won.";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "the computer won.";
    } else {
      return "the user won.";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "the computer won.";
    } else {
      return "the user won.";
    }
  }
}

function playGame() {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
