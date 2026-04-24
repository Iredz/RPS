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

function getHumanChoice() {
    let answer = prompt("Make a choice: rock, paper or scissors ");
    return answer;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let hc = String(humanChoice).toLowerCase();
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
    console.log(`You chose: ${hc} \ computer chose: ${cc}`);
}

function playGame() {
    let winner = "";
    for (i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        winner = "You are the winner!";
    } else if (humanScore < computerScore) {
        winner = "The computer is the winner!";
    } else {
        winner = "It's a draw!";
    }
    console.log(winner);
}

playGame();

