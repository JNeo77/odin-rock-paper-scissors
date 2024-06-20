const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const choiceDisplay = document.querySelector('#choice-display');
const playerScore = document.querySelector('#player-score');
const compScore = document.querySelector('#computer-score');
const winner = document.querySelector('#winner');
const scoreBoard = document.querySelector('#score-board');
const resetButton = document.createElement('button');

resetButton.textContent = 'Reset';

/* Get the Computer's Choice */
function getComputerChoice () {
  const randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;   
  }
}

/* Playing a game */
let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice) {
  const computerChoice = getComputerChoice();
  if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'rock')) {
    humanScore += 1;
    choiceDisplay.textContent = `You chose - ${humanChoice}. Computer chose - ${computerChoice}. You win!`;
  } else if (humanChoice === computerChoice) {
    choiceDisplay.textContent = `You chose - ${humanChoice}. Computer chose - ${computerChoice}. It's a tie!`;
  } else {
    computerScore += 1;
    choiceDisplay.textContent = `You chose - ${humanChoice}. Computer chose - ${computerChoice}. Computer wins!`;
  };
  
  playerScore.textContent = humanScore;
  compScore.textContent = computerScore;

  if (humanScore === 5) {
    winner.textContent = 'You win the game!';
    scoreBoard.appendChild(resetButton);
  } else if (computerScore === 5) {
    winner.textContent = 'Computer wins the game!';
    scoreBoard.appendChild(resetButton);
  }
}

resetButton.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  playerScore.textContent = humanScore;
  compScore.textContent = computerScore;
  winner.textContent = '';
  choiceDisplay.textContent = '';
  scoreBoard.removeChild(resetButton);
});

rockBtn.addEventListener('click', () => {
  playRound('rock');
});

paperBtn.addEventListener('click', () => {
  playRound('paper');
});

scissorsBtn.addEventListener('click', () => {
  playRound('scissors');
});