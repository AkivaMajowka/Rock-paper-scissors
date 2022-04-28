//Gets random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Gets a string contaning a random play(rock, scissors or paper)
function computerPlay() {
  let randomNumber;
  randomNumber = getRandomInt(3);
  return randomNumber == 0 ? "scissors" : randomNumber == 1 ? "paper" : "rock";
}

//Checks who is the winnner between user and computer
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "user";
  }
  if (playerSelection == computerSelection) {
    return "tie";
  }
  return "computer";
}

function game() {
  let userPoints = 0;
  let computerPoints = 0;

  for (let i = 1; i < 5; i++) {
    let playerSelection = prompt("Whats your play?", " ").toLowerCase();
    let computerSelection = computerPlay();
    let winner = playRound(playerSelection, computerSelection);

    if (winner == "user") {
      console.log('you won this round!')
      userPoints++;
    } else if (winner == "computer") {
      console.log('you lost this round!')
      computerPoints++;
    } else if (winner == 'tie'){
      console.log("We have a tie!");
      continue;
    } else {
      console.log("Please choose Rock, Paper or Scissors");
      i--
    }
    console.log(`computer: ${computerPoints}, you: ${userPoints}`);
  }

    let gameWinner;

    if (userPoints > computerPoints) {
      gameWinner = "You won, congradulations!";
    } else if (computerPoints > userPoints) {
      gameWinner = "The Computer won, best of luck next time";
    } else {
      gameWinner = "The game finished as a tie!";
    }
    console.log(gameWinner);
  
}

console.log(document.querySelector(".display-text")?.textContent)

