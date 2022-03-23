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
    result = `User win! ${playerSelection} is stronger then ${computerSelection}!`;
  } else if (playerSelection == computerSelection) {
    result = "no winner";
  } else {
    result = `Computer win! ${computerSelection} is stronger then ${playerSelection}!`;
  }
  return result;
}

//testing with hard data
let playerSelection = "scissors";
let computerSelection = "paper";

let gameResult = playRound(playerSelection, computerSelection);
console.log(gameResult)