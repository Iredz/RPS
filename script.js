let result = document.querySelector("#result")
let hs = document.querySelector("#hs")
let cs = document.querySelector("#cs")
const rock = document.querySelector("#rockBtn")
const paper = document.querySelector("#paperBtn")
const scissors = document.querySelector("#scissorsBtn")
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function isGameOver() {
  return humanScore === 5 || computerScore === 5
}

hs.textContent = humanScore
cs.textContent = computerScore

function playRound(humanChoice, computerChoice) {


  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      computerScore += 1;
    } else if (computerChoice == "scissors") {
      humanScore += 1;
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      humanScore += 1;
    } else if (computerChoice == "scissors") {
      computerScore += 1;
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      computerScore += 1;
    } else if (computerChoice == "paper") {
      humanScore += 1;
    }
  }
  hs.textContent = humanScore
  cs.textContent = computerScore
  if (isGameOver()) {
    alert("GAME OVER!")
  }
  if (humanScore == 5) {
    alert("You are the winner!")
  } else if (computerScore == 5) {
    alert("You lost!")
  }
}

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice())
})
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice())
})
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice())
})


