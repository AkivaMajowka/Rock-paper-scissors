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

// getting players round play
function UserSelection() {
  let rock = document.querySelector(".rock")
  rock.addEventListener('click', SetPlayerSelection)
  
  let paper = document.querySelector(".paper")
  paper.addEventListener('click', SetPlayerSelection)

  let scissors = document.querySelector(".scissors")
  scissors.addEventListener('click', SetPlayerSelection)
}

function SetPlayerSelection(e) {
   playerSelection =  e.target.innerText
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

function logic() {
  let userPoints = 0;
  let computerPoints = 0;

  window.playerSelection = null;
  let computerSelection = computerPlay();

  for (let i = 1; i < 5; i++) {
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

game()


// botao iniciar mostra o jogo
// elementos DOM sao aplicados a variaveis, 

// rodada comeca com a escolha de jogada do jogador
// escolhe um valor "pedra papel ou tesoura" de forma aleatoria pra o jogo,
// verifica o vencedor //  vencedor eh salvo em sua variavel adicionando um numero
// mostra na tela a escolha do jogador contra a do jogo, e abaixo quem vence a rodada

// um teste eh feito para verificar se um dos jogadores tem cinco pontos 
// se sim, o jogo anuncia ele como vencedor 
// se nao, o jogo prossegue pro proximo passo

// atualiza os pontos apresentados 
// devolve a tela de escolha de jogada
