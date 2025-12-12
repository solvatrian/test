function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(choice) {
    switch (choice) {
        case rockBtn.id:
            return 'rock';
        case scissorsBtn.id:
            return 'scissors';
        case paperBtn.id:
            return 'paper';
    }
}

function isGetScore5() {
    if (computerScore >= 5 || humanScore >= 5) {
        return true;
    }
    return false;
}

function printGameResult() {
    divRes.textContent = `The result is ${humanScore}:${computerScore}, well play!`;
}

function playRound(human, computer) {
    if (human === computer) {
        divRes.textContent = "Tie!";
    }
    else if (human === "rock" && computer === "scissors" ||
        human === "scissors" && computer === "paper" ||
        human === "paper" && computer === "rock") {
        divRes.textContent = `You win! ${human} beats ${computer}.`;
        humanScore += 1;
    }
    else {
        divRes.textContent = `You lose! ${computer} beats ${human}.`;
        computerScore += 1;
    }
}

const rockBtn = document.querySelector('button#rock');
const scissorsBtn = document.querySelector('button#scissors');
const paperBtn = document.querySelector('button#paper');
const divRes = document.querySelector('div#result');
const divBtns = document.querySelector('div#btn');
let computerScore = 0;
let humanScore = 0;

divBtns.addEventListener('click', (e) => {
    let target = e.target;
    let humSelection = getHumanChoice(target.id);
    var cptSelection = getComputerChoice();
    playRound(humSelection, cptSelection);
    if (isGetScore5()) {
        printGameResult();
    }
})