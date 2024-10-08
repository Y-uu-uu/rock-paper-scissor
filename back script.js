function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const int = Math.floor(Math.random() * choices.length);
    console.log(choices[int]);
    return choices[int];
}

// function getPlayerChoice() {
//     const choices = ["rock", "paper", "scissors"];

//     while (true) {
//         let playerChoice = prompt("Rock, Paper, Scissors").toLowerCase();
//         if (choices.includes(playerChoice)) {
//             console.log(playerChoice);
//             return playerChoice;
//         } else {
//             alert("Invalid option.");
//         }
//     }
// }

function playRound(playerChoice, computerChoice, playerScore, computerScore) {
    let result;

    switch (true) {
        case (playerChoice === "rock" && computerChoice === "scissors"):
        case (playerChoice === "paper" && computerChoice === "rock"):
        case (playerChoice === "scissors" && computerChoice === "paper"):
            result = "You win!";
            playerScore += 1;
            break;
        case (computerChoice === "rock" && playerChoice === "scissors"):
        case (computerChoice === "paper" && playerChoice === "rock"):
        case (computerChoice === "scissors" && playerChoice === "paper"):
            result = "You lose!";
            computerScore += 1;
            break;
        default:
            result = "It's a tie";
            break;
    }

    alert(result);
    return { playerScore, computerScore };
}

function playGame(playerChoice) {
    let playerScore = 0;
    let computerScore = 0;
    const rounds = 5;

    for (let i = 1; i <= rounds; i++) {
        // let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();

        let scores = playRound(playerChoice, computerChoice, playerScore, computerScore);
        playerScore = scores.playerScore;
        computerScore = scores.computerScore;

        alert(`Round = ${i} : Player = ${playerScore} : Computer = ${computerScore}`);
    }

    return { playerScore, computerScore };
}

// function playOneRound(playerChoice) {
//     let playerScore = 0;
//     let computerScore = 0;
//     // let playerChoice = getPlayerChoice();
//     let computerChoice = getComputerChoice();
//     let scores = playRound(playerChoice, computerChoice, playerScore, computerScore);
// }





// 5 round game
// let scores = playGame();
// let playerScore = scores.playerScore;
// let computerScore = scores.computerScore;
// console.log(`Player = ${playerScore} : Computer = ${computerScore}`);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click",() => {
        alert(`You chose ${button.id}!`);
        playGame(button.id);
        result();
    });
});

function result() {
const container = document.querySelector(".container");
const result = document.createElement("p");
result.classList.add("result");
result.textContent = "asdf";
container.appendChild(result);
}