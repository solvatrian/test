// console.log("Hel");

// randomly returns "rock", "paper", "scissors"
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    return prompt("Input the choice", "rock").toLowerCase();
}

function playGame() {
    function playRound(human, computer) {
        if (human === computer){
            console.log("Tie!");
        }
        else if (human === "rock" && computer === "scissors" ||
            human === "scissors" && computer === "paper" ||
            human === "paper" && computer === "rock") {
            console.log(`You win! ${human} beats ${computer}.`);
            humanScore += 1;
        }
        else {
            console.log(`You lose! ${computer} beats ${human}.`);
            computerScore += 1;
        }
    }
    var computerScore = 0;
    var humanScore = 0;

    for (var i = 0; i < 5; i++) {
        var humSelection = getHumanChoice();
        var cptSelection = getComputerChoice();
        playRound(humSelection, cptSelection);
    }
    console.log(`The result is ${humanScore}:${computerScore}, well play!`);
}

playGame();
// console.log(choice);
