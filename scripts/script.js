/* Score variables */
let humanScore = 0;
let computerScore = 0;

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

/* Get the Human Choice via Prompt */
function getHumanChoice () {
  alert("Welcome to Rock, Paper, Scissors!");
  const humanChoice = prompt('Enter "rock", "paper", or "scissors".');
  return humanChoice.toLowerCase();
}


