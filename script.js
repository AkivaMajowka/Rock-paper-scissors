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
  if ((playerPlay === 'rock' && systemPlay === 'scissors') ||
     (playerPlay === 'scissors' && systemPlay === 'paper') ||
     (playerPlay === 'paper' && systemPlay === 'rock')) {
      return 'player'      
     } else if (playerPlay === systemPlay){
       return 'tie'
     } else {
       return 'system'
     }
}

function playRound(e) {
  let playerPlay =  e.target.innerText
  let systemPlay = computerPlay()
  let displayUserSelection = document.querySelector(".user-selection-display")
  let displaySystemSelection = document.querySelector(".system-selection-display")
  let displayRoundWinner = document.querySelector('.round-winner')
  let displayPlayerPoints = document.querySelector(".user-points")
  let displaySystemPoints = document.querySelector(".system-points")
  
  let winner = roundWinner(playerPlay, systemPlay)

  //displays players and systems play
  displayUserSelection.innerText = playerPlay
  displaySystemSelection.innerText = systemPlay

  if (winner === 'player') {
    displayRoundWinner.innerText = 'You Won!'
    playerPoints++
    displayPlayerPoints.innerText = playerPoints
  } else if (winner === 'system') {
    displayRoundWinner.innerText = 'Computer Won!'
    systemPoints++
    displaySystemPoints.innerText = systemPoints
  } else {
    displayRoundWinner.innerText = 'Its a tie!!'
  }

  let gameWinner;
  if (playerPoints === 5) {
    alert('you won the game!')
    displayUserSelection.innerText = ''
    displaySystemSelection.innerText = ''
    displayRoundWinner.innerText = ''
    playerPoints = 0
    systemPoints = 0
    displayPlayerPoints.innerText = 0
    displaySystemPoints.innerText = 0
  } else if (systemPoints === 5) {
      alert('computer won the game!')
      displayUserSelection.innerText = ''
      displaySystemSelection.innerText = ''
      displayRoundWinner.innerText = ''
      playerPoints = 0
      systemPoints = 0
      displayPlayerPoints.innerText = 0
      displaySystemPoints.innerText = 0
  }
}

let playerPoints = 0;
let systemPoints = 0;

let rockButton = document.querySelector(".rock")
rockButton.addEventListener('click', playRound)
  
let paperButton = document.querySelector(".paper")
paperButton.addEventListener('click', playRound)

let scissorsButton = document.querySelector(".scissors")
scissorsButton.addEventListener('click', playRound)

// jogador aperta um dos 3 botoes que roda uma funcao que faz os seguintes passos:

// playRound()
// usa o valor do botao apertado para escolher a jogada do jogador
// escolhe uma jogada de forma aleatoria pra o jogo
// verifica o vencedor, vencedor eh salvo em sua variavel adicionando um numero
// mostra na tela a escolha do jogador contra a do jogo, e abaixo quem vence a rodada

// um teste eh feito para verificar se um dos jogadores tem cinco pontos 
// se sim, o jogo anuncia ele como vencedor 
// se nao, o jogo prossegue pro proximo passo

// atualiza os pontos apresentados 
