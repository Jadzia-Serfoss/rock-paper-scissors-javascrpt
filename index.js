const playerDisplay = document.querySelector('.player-display');
const computerDisplay = document.querySelector('.computer-display');
const resultDisplay = document.querySelector('.result');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');

let playerScore = '0';
let computerScore = '0';

const choices = ['Rock', 'Paper', 'Scissors'];

function game(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const getResult = (playerChoice, computerChoice) => 

  playerChoice === computerChoice ? "It's a tie!" :
  (playerChoice === 'Rock' && computerChoice === 'Scissors') || 
  (playerChoice === 'Paper' && computerChoice === 'Rock') || 
  (playerChoice === 'Scissors' && computerChoice === 'Paper') 
  ? "YOU WIN!" : "You lose...";

  const result = getResult(playerChoice, computerChoice);
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  if (result === "YOU WIN!") {
    playerScore++;
  } else if (result === "You lose...") {
    computerScore++;
  };

  playerScoreDisplay.textContent = `${playerScore}`;
  computerScoreDisplay.textContent = `${computerScore}`;

  if (result === "It's a tie!") {
    resultDisplay.style.color = "rgb(38, 8, 0)";
  } else if (result === "You lose...") {
    resultDisplay.style.color = "rgb(38, 8, 0)";
  } else if (result === "YOU WIN!") {
    resultDisplay.style.color = "rgb(247, 255, 3)";
    resultDisplay.style.fontSize = "50px";
  };
}
