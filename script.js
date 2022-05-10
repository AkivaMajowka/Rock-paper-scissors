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

function roundWinner(playerPlay, systemPlay) {
  if (
    (playerPlay === "rock" && systemPlay === "scissors") ||
    (playerPlay === "scissors" && systemPlay === "paper") ||
    (playerPlay === "paper" && systemPlay === "rock")
  ) {
    return "player";
  } else if (playerPlay === systemPlay) {
    return "tie";
  } else {
    return "system";
  }
}

function cleanUp() {
  displayPlayerSelection.innerText = "";
  displaySystemSelection.innerText = "";
  displayRoundWinner.innerText = "";
  playerPoints = 0;
  systemPoints = 0;
  displayPlayerPoints.innerText = 0;
  displaySystemPoints.innerText = 0;
}

function playRound(e) {
  let playerPlay = e.target.innerText;
  let systemPlay = computerPlay();
  displayPlayerSelection = document.querySelector(".user-selection-display");
  displaySystemSelection = document.querySelector(
    ".system-selection-display"
  );
  displayRoundWinner = document.querySelector(".round-winner");
  displayPlayerPoints = document.querySelector(".user-points");
  displaySystemPoints = document.querySelector(".system-points");

  let winner = roundWinner(playerPlay, systemPlay);

  //displays players and systems play
  displayPlayerSelection.innerText = playerPlay;
  displaySystemSelection.innerText = systemPlay;

  if (winner === "player") {
    displayRoundWinner.innerText = "You Won!";
    playerPoints++;
    displayPlayerPoints.innerText = playerPoints;
  } else if (winner === "system") {
    displayRoundWinner.innerText = "Computer Won!";
    systemPoints++;
    displaySystemPoints.innerText = systemPoints;
  } else {
    displayRoundWinner.innerText = "Its a tie!!";
  }

  if (playerPoints === 5) {
    alert("you won the game!");
    cleanUp();
  } else if (systemPoints === 5) {
    alert("computer won the game!");
    cleanUp();
  }
}

let playerPoints = 0;
let systemPoints = 0;

let rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", playRound);

let paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", playRound);

let scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", playRound);
