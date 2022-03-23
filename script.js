//Gets random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Gets a string contaning a random play(rock, scissors or paper)
function computerPlay() {
  let rNumber;
  rNumber = getRandomInt(3);
  return rNumber == 0 ? "scissors" : rNumber == 1 ? "paper" : "rock";
}

//Checks who is the winnner between user and computer
function playRound(playerSelection, computerSelection) {
  let result;

  if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    result = "user";
  } else if (playerSelection == computerSelection) {
    result = "tie";
  } else {
    result = "computer";
  }
  return result;
}

function game() {
  let userPoints = 0;
  let computerPoints = 0;

  for (let i = 1; i < 5; i++) {
    let playerSelection = prompt("Whats your play?", " ").toLowerCase;
    let computerSelection = computerPlay();
    let winner = playRound(playerSelection, computerSelection);

    winner == "user"
      ? userPoints++
      : winner == "computer"
      ? computerPoints++
      : console.log("We have a tie!");
    console.log(`computer: ${computerPoints}, you: ${userPoints}`);
  }

  let gameWinner =
    userPoints > computerPoints
      ? "You won, congradulations!"
      : computerPoints > userPoints
      ? "The Computer won, best of luck next time"
      : "The game finished as a tie!";
  console.log(gameWinner);
}

game();
