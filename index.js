console.log("Hello World");

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let computerChoicesArr = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);

    return computerChoicesArr[randomNum];
}

function getHumanChoice(humanChoice) {
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(
            `Human chooses ${humanChoice}, Computer chooses ${computerChoice}`,
            "\nIt's a draw!",
            `\nHuman: ${humanScore}, Computer: ${computerScore}`
        );
    } else if (
        (humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")
    ) {
        computerScore += 1;
        console.log(
            `Human chooses ${humanChoice}, Computer chooses ${computerChoice}`,
            `\nYou lose! ${humanChoice} beats ${computerChoice}`,
            `\nHuman: ${humanScore}, Computer: ${computerScore}`
        );
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ) {
        humanScore += 1;
        console.log(
            `Human chooses ${humanChoice}, Computer chooses ${computerChoice}`,
            `\nYou win! ${humanChoice} beats ${computerChoice}`,
            `\nHuman: ${humanScore}, Computer: ${computerScore}`
        );
    } else {
        console.log(`${humanChoice} invalid. Try again`);
    }

    // Leaving old code for reference
    // if (humanChoice == "rock" && computerChoice == "paper") {
    //     computerScore += 1;
    //     console.log(
    //         `Human chooses ${humanChoice}, Computer chooses ${computerChoice}`,
    //         `\nYou lose! ${humanChoice} beats ${computerChoice}`,
    //         `\nHuman: ${humanScore}, Computer: ${computerScore}`
    //     );
    // } else if (humanChoice == "paper" && computerChoice == "scissors") {
    //     computerScore += 1;
    //     console.log(
    //         `Human chooses ${humanChoice}, Computer chooses ${computerChoice}`,
    //         `\nYou lose! ${humanChoice} beats ${computerChoice}`,
    //         `\nHuman: ${humanScore}, Computer: ${computerScore}`
    //     );
    // } else if (humanChoice == "scissors" && computerChoice == "rock") {
    //     computerScore += 1;
    //     console.log(
    //         `Human chooses ${humanChoice}, Computer chooses ${computerChoice}`,
    //         `\nYou lose! ${humanChoice} beats ${computerChoice}`,
    //         `\nHuman: ${humanScore}, Computer: ${computerScore}`
    //     );
    // } else if (humanChoice == "rock" && computerChoice == "scissors") {
    //     humanScore += 1;
    //     console.log(
    //         `Human chooses ${humanChoice}, Computer chooses ${computerChoice}`,
    //         `\nYou win! ${humanChoice} beats ${computerChoice}`,
    //         `\nHuman: ${humanScore}, Computer: ${computerScore}`
    //     );
    // } else if (humanChoice == "scissors" && computerChoice == "paper") {
    //     humanScore += 1;
    //     console.log(
    //         `Human chooses ${humanChoice}, Computer chooses ${computerChoice}`,
    //         `\nYou win! ${humanChoice} beats ${computerChoice}`,
    //         `\nHuman: ${humanScore}, Computer: ${computerScore}`
    //     );
    // } else if (humanChoice == "paper" && computerChoice == "rock") {
    //     humanScore += 1;
    //     console.log(
    //         `Human chooses ${humanChoice}, Computer chooses ${computerChoice}`,
    //         `\nYou win! ${humanChoice} beats ${computerChoice}`,
    //         `\nHuman: ${humanScore}, Computer: ${computerScore}`
    //     );
    // } else {
    //     console.log(
    //         `Human chooses ${humanChoice}, Computer chooses ${computerChoice}`,
    //         "\nIt's a draw!",
    //         `\nHuman: ${humanScore}, Computer: ${computerScore}`
    //     );
    // }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        let humanChoice = prompt("Rock, Paper, or Scissors?");
        let humanSelection = getHumanChoice(humanChoice);
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Game over!");

    if (humanScore > computerScore) {
        console.log("Human wins!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();
