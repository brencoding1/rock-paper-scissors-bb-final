let computerChoiceDisplay = document.getElementById("computer-choice");
let playerChoiceDisplay = document.getElementById("player-choice");
let resultDisplay = document.getElementById("result");
let possibleChoices = document.querySelectorAll(".button");

let playerChoice;
let computerChoice;
let result;

let win = "You win!";
let lose = "You lose!";
let draw = "Draw!";

//Event listener

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
  playerChoice = event.target.id;
  playerChoiceDisplay.innerHTML = playerChoice;
  generateComputerChoice();
  getResult();
}));


function generateComputerChoice() {
  let computerPossibleChoices = [
    "Rock", "Paper", "Scissors", "Lizard", "Spock",
  ];
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  computerChoice = computerPossibleChoices[randomNumber];

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice = "Scissors";
  }
  if (randomNumber === 4) {
    computerChoice = "Lizard";
  }
  if (randomNumber === 5) {
    computerChoice = "Spock";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}


function getResult() {

  if (computerChoice === playerChoice) {
    result = draw;
  } else if (computerChoice === "Rock") {
    if (playerChoice === "Paper" || playerChoice === "Spock") {
      result = win;
    } else {
      result = lose;
    }
  } else if (computerChoice === "Paper") {
    if (playerChoice === "Lizard" || playerChoice === "Scissors") {
      result = win;
    } else {
      result = lose;
    }
  } else if (computerChoice === "Scissors") {
    if (playerChoice === "Rock" || playerChoice === "Spock") {
      result = win;
    } else {
      result = lose;
    }
  } else if (computerChoice === "Lizard") {
    if (playerChoice === "Scissors" || playerChoice === "Rock") {
      result = win;
    } else {
      result = lose;
    }
  } else if (computerChoice === "Spock") {
    if (playerChoice === "Lizard" || playerChoice === "Paper") {
      result = win;
    } else {
      result = lose;
    }
  }
    incrementScore();
}


function playerScore() {
  let yourScore = parseInt(document.getElementById("player-score").innerText);
  document.getElementById("player-score").innerText = ++yourScore;
}

function computerScore() {
  let yourScore = parseInt(document.getElementById("computer-score").innerText);
  document.getElementById("computer-score").innerText = ++yourScore;
}

function drawScore() {
  let yourScore = parseInt(document.getElementById("draw-score").innerText);
  document.getElementById("draw-score").innerText = ++yourScore;
}

function incrementScore() {
  if (result === win) {
     playerScore()
  } else if (result === lose) {
     computerScore();
  } else {
     drawScore()
  }
    resultDisplay.innerHTML = result;
}


function toggleResetGame() {
  let reset = document.getElementById("reset-game-popup");
  if (reset.style.display === "block") {
    reset.style.display = "none";
  } else {
    reset.style.display = "block";
  }
}


function resetGame() {
  document.getElementById("player-score").innerText = 0;
  document.getElementById("computer-score").innerText = 0;
  document.getElementById("draw-score").innerText = 0;
  document.getElementById("player-choice").innerText = "";
  document.getElementById("computer-choice").innerText = "";
  document.getElementById("result").innerText = "";
  playerChoice = null;
  computerChoice = null;
  result = null;
}


function toggleRules() {
  let rules = document.getElementById("rules");
  if (rules.style.display === "block") {
    rules.style.display = "none";
  } else {
    rules.style.display = "block";
  }
}

