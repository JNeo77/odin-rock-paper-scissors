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
  const human = prompt('Enter "rock", "paper", or "scissors".');
  return human.toLowerCase();
}

/* Playing a game */
function playGame () {
  let humanScore = 0;
  let computerScore = 0;
  
  alert("Welcome to Rock, Paper, Scissors!");

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    function playRound (humanChoice, computerChoice) {
      if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
          (humanChoice === 'scissors' && computerChoice === 'paper') ||
          (humanChoice === 'paper' && computerChoice === 'rock')) {
        humanScore += 1;
        console.log(`You win - ${humanChoice} beats ${computerChoice}!`);
      } else if (humanChoice === computerChoice) {
        console.log(`It's a tie!`);
      } else {
        computerScore += 1;
        console.log(`Computer wins - ${computerChoice} beats ${humanChoice}`);
      };
    }
  }
  
  alert(`Final score - You: ${humanScore} Compter: ${computerScore}`);
}

playGame();