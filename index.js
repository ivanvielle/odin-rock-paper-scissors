console.log("Hello World");

let computerScore = 0;
let humanScore = 0;
let maxScore = 5;

function getComputerChoice() {
    let computerChoicesArr = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);

    return computerChoicesArr[randomNum];
}

function getHumanChoice(humanChoice) {
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let message;

    if (humanScore >= maxScore || computerScore >= maxScore) {
        if (humanScore > computerScore) {
            alert(`GAME OVER! HUMAN wins: ${humanScore}`);
        } else {
            alert(`GAME OVER! COMPUTER wins: ${computerScore}`);
        }

        humanScore = 0;
        computerScore = 0;
        message = "";
    } else {
        if (humanChoice === computerChoice) {
            message = `Human chooses ${humanChoice.toUpperCase()}, Computer chooses ${computerChoice.toUpperCase()},
                    <br> It's a DRAW!`;
        } else if (
            (humanChoice == "rock" && computerChoice == "paper") ||
            (humanChoice == "paper" && computerChoice == "scissors") ||
            (humanChoice == "scissors" && computerChoice == "rock")
        ) {
            computerScore += 1;
            message = `Human chooses ${humanChoice.toUpperCase()}, Computer chooses ${computerChoice.toUpperCase()}
                    <br> You LOSE! 
                    <br> ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
        } else if (
            (humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "scissors" && computerChoice == "paper") ||
            (humanChoice == "paper" && computerChoice == "rock")
        ) {
            humanScore += 1;
            message = `Human chooses ${humanChoice.toUpperCase()}, Computer chooses ${computerChoice.toUpperCase()}
                    <br> You WIN! 
                    <br> ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
        } else {
            message = `${humanChoice} invalid. Try again`;
        }
    }

    return message;
}

let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");
let humanScoreDiv = document.querySelector("#humanScore");
let computerScoreDiv = document.querySelector("#computerScore");

function displayResults(message) {
    let parentDiv = document.querySelector("#results");
    parentDiv.innerHTML = message;
}

rockBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let humanSelection = e.target.textContent.toLowerCase();
    let computerSelection = getComputerChoice();
    let message = playRound(humanSelection, computerSelection);

    displayResults(message);
    humanScoreDiv.textContent = parseInt(humanScore);
    computerScoreDiv.textContent = parseInt(computerScore);
});

paperBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let humanSelection = e.target.textContent.toLowerCase();
    let computerSelection = getComputerChoice();
    let message = playRound(humanSelection, computerSelection);

    displayResults(message);
    humanScoreDiv.textContent = parseInt(humanScore);
    computerScoreDiv.textContent = parseInt(computerScore);
});

scissorsBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let humanSelection = e.target.textContent.toLowerCase();
    let computerSelection = getComputerChoice();
    let message = playRound(humanSelection, computerSelection);

    displayResults(message);
    humanScoreDiv.textContent = parseInt(humanScore);
    computerScoreDiv.textContent = parseInt(computerScore);
});
