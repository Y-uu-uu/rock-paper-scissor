function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const int = Math.floor(Math.random() * choices.length);
    console.log(choices[int]);
    return choices[int];
}

function playRound(playerChoice, computerChoice, playerScore, computerScore, round) {
    let result;
    console.log(`Player chose: ${playerChoice}`);
    switch (true) {
        case (playerChoice === "rock" && computerChoice === "scissors"):
        case (playerChoice === "paper" && computerChoice === "rock"):
        case (playerChoice === "scissors" && computerChoice === "paper"):
            result = "You win!";
            playerScore += 1;
            round += 1;
            break;
        case (computerChoice === "rock" && playerChoice === "scissors"):
        case (computerChoice === "paper" && playerChoice === "rock"):
        case (computerChoice === "scissors" && playerChoice === "paper"):
            result = "You lose!";
            computerScore += 1;
            round += 1;
            break;
        default:
            result = "It's a tie";
            round += 1;
            break;
    }

    alert(result);
    return { playerScore, computerScore, result, round};
}

function printResult(resultPrint, playerScore, computerScore, round) {
    const container = document.querySelector(".container");
    const result = document.createElement("p");
    result.classList.add("result");
    result.textContent = `${resultPrint} ~ Round: ${round} ~ Player: ${playerScore} ~ Computer: ${computerScore}`;
    container.appendChild(result);
    }

function reset(playerScore, computerScore,round, scores) {
    if (playerScore >= 5) {
        alert("You won the game!");
        let response = confirm("Do you want to play again?");
        if (response) {
            scores = 0;
            playerScore = 0;
            computerScore = 0;
            round = 0;
            const container = document.querySelector(".container");
            const result = document.querySelectorAll(".result");  
            result.forEach(result => result.remove());
        } else {
            alert("OK");
        }
    } else if (computerScore >= 5) {
        alert("You lost the game!");
        let response = confirm("Do you want to play again?");
        if (response) {
            scores = 0;
            playerScore = 0;
            computerScore = 0;
            round = 0;
            const container = document.querySelector(".container");
            const result = document.querySelectorAll(".result");                  
            result.forEach(result => result.remove());
        } else {
            alert("OK");
        }
    }

    return {playerScore, computerScore,round, scores};
}

let scores = 0;
let playerScore = 0;
let computerScore = 0;
let round = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click",() => {        
        let computerChoice = getComputerChoice();
        scores = playRound(button.id, computerChoice, playerScore, computerScore, round);
        let result = scores.result;
        playerScore = scores.playerScore;
        computerScore = scores.computerScore;
        round = scores.round;
        console.log(`Player = ${playerScore} : Computer = ${computerScore} : Rounds = ${round}`);
        console.log(result);
        printResult(result, playerScore, computerScore, round);

        //reset 
        let resetter = reset(playerScore, computerScore,round, scores);
        scores = resetter.scores;
        playerScore = resetter.playerScore;
        computerScore = resetter.computerScore;
        round = resetter.round;
    });
});