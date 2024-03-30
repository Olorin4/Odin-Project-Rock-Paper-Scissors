let computerSelection;
function getComputerSelection() {
    const randomNumber = Math.floor(Math.random() * 3);    // Generate a random number between 0 and 2
    switch (randomNumber) {                       // Assign "Rock", "Paper", or "Scissors" based on the random number
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors";
            break;
    }
    return computerSelection;
}

  //Add div for displaying the results
let container = document.querySelector(".container");
let div = document.createElement("div"); 
div.classList.add("results");
container.appendChild(div);

// Triggers div creation and computer selection
function getPlayerSelection() {
    getComputerSelection();
    const para = document.createElement("p");
    div.appendChild(para);
    para.textContent = ("You selected: " + playerSelection + "! ");
    para.textContent += (" The computer selected: " + computerSelection + "!");
}

// button events
let playerSelection;
let btn1 = document.querySelector("#rock");
btn1.addEventListener("click", () => {
    playerSelection = "rock";
    getPlayerSelection(); 
    gameScore();
});
let btn2 = document.querySelector("#paper");
btn2.addEventListener("click", () => {
    playerSelection = "paper";
    getPlayerSelection();
    gameScore();
});
let btn3 = document.querySelector("#scissors");
btn3.addEventListener("click", () => {
    playerSelection = "scissors";
    getPlayerSelection();
    gameScore();
});

// Resolve a round 
let resultRound;
function playRound() {
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "paper":
                resultRound = "Defeat! Paper beats Rock.";
                break;
            case "scissors":
                resultRound = "Victory! Rock beats Scissors.";
                break;
            default: resultRound = "Tie!";
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                resultRound = "Victory! Paper beats Rock.";
                break;
            case "scissors":
                resultRound = "Defeat! Scissors beat Paper.";
                break;
            default: resultRound = "Tie!";
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                resultRound = "Defeat! Rock beats Scissors.";
                break;
            case "paper":
                resultRound = "Victory! Scissors beat Paper.";
                break;
            default: resultRound = "Tie!"; 
        }
    }
    const para2 = document.createElement("p");
    div.appendChild(para2);
    para2.textContent = ("Round: " + resultRound);
}

let playerScore = 0;
let computerScore = 0;
function gameScore() {
    playRound();
    const para3 = document.createElement("p");
    div.appendChild(para3);
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
        para3.textContent += ("Congratulations! You won the game!");
        } else if (playerScore < computerScore) {
            para3.textContent += ("You lost the game!");
        } else {
            para3.textContent += ("It's a tie! Play again!");
        }
    } else {
        if (resultRound.charAt(0) === "V") {
            playerScore = ++playerScore;
        } else if (resultRound.charAt(0) === "D") {
            computerScore = ++computerScore;
        } 
        para3.textContent += ("Your score is " + playerScore + ". ");
        para3.textContent += ("Computer's score is " + computerScore + ".");
    }
}