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

let humanScore = 0;
let computerScore = 0;

let result = document.querySelector("#result")

function playRound(humanChoice, computerChoice) {
  let hc = humanChoice;
  let cc = computerChoice;

  if (hc == "rock") {
    if (cc == "paper") {
      computerScore += 1;
    } else if (cc == "scissors") {
      humanScore += 1;
    }
  } else if (hc == "paper") {
    if (cc == "rock") {
      humanScore += 1;
    } else if (cc == "scissors") {
      computerScore += 1;
    }
  } else if (hc == "scissors") {
    if (cc == "rock") {
      computerScore += 1;
    } else if (cc == "paper") {
      humanScore += 1;
    }
  }
  result.textContent = `You: ${humanScore}    Computer: ${computerScore}`;
}

const rock = document.querySelector("#rockBtn")
const paper = document.querySelector("#paperBtn")
const scissors = document.querySelector("#scissorsBtn")

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice())
})
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice())
})
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice())
})

