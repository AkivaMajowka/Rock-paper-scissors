function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay(){
  let rNumber;
  rNumber = getRandomInt(3)
  return (rNumber == 0) ? "scissors" :
         (rNumber == 1) ? "paper"
         : "rock"
}

function playRound(playerSelection, computerSelection) {
  let result;
  if ( ((playerSelection == "scissors") && (computerSelection == "paper")) ||
        ((playerSelection == "rock") && (computerSelection == "scissors")) ||
        ((playerSelection == "paper") && (computerSelection == "rock")) )
        {result = `User win! ${playerSelection} is stronger then ${computerSelection}!`}

  elseif (playerSelection == computerSelection); {
          result = "no winner"
      } 
      return result;
}

let playerSelection = "scissors";
let computerSelection = "paper";

playRound(playerSelection, computerSelection);
