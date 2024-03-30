let computerSelection;

function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
    
    // Assign 'Rock', 'Paper', or 'Scissors' based on the random number
    switch (randomNumber) {
        case 0:
            computerSelection = 'rock';
            break;
        case 1:
            computerSelection = 'paper';
            break;
        case 2:
            computerSelection = 'scissors';
            break;
    }
    return computerSelection;
}

//Add div for displaying results
const container = document.querySelector(".container");
const div = document.createElement("div");
div.classList.add("results");
container.appendChild(div);

let playerAnswer;
let playerSelection;
let resultMessage;

// button events
let btn1 = document.querySelector("#rock");
btn1.addEventListener("click", () => {
    playerSelection = "rock";
    handlePlayerSelection();    
});
let btn2 = document.querySelector("#paper");
btn2.addEventListener("click", () => {
    playerSelection = "paper";
    handlePlayerSelection();
});
let btn3 = document.querySelector("#scissors");
btn3.addEventListener("click", () => {
    playerSelection = "scissors";
    handlePlayerSelection();
});

function handlePlayerSelection() {
    let para1;
    let para2; 
    para1 = document.createElement("p");
    div.appendChild(para1);
    para1.textContent = ("You selected: " + playerSelection + "!");
    para2 = document.createElement("p");
    div.appendChild(para2);
    para2.textContent = ("The computer selected: " + computerSelection + "!");
}

// Call getComputerChoice function
getComputerChoice();

// Resolve a round 
function playRound(playerSelection, computerSelection) {
    if (playerSelection = 'rock') {
        switch (computerSelection) {
            case ('paper'):
                resultMessage = "Defeat! Paper beats Rock.";
                break;
            case ('scissors'):
                resultMessage = "Victory! Rock beats Scissors.";
                break;
            default: resultMessage = "Tie!";
        }
        return resultMessage;
    } else if (playerSelection = 'paper') {
        switch (computerSelection) {
            case ('rock'):
                resultMessage = "Victory! Paper beats Rock.";
                break;
            case ('scissors'):
                resultMessage = "Defeat! Scissors beat Paper.";
                break;
            default: resultMessage = "Tie!";
        }
        return resultMessage;
    } else {
        switch (computerSelection) {
            case ('rock'):
                resultMessage = "Defeat! Rock beats Scissors.";
                break;
            case ('paper'):
                resultMessage = "Victory! Scissors beat Paper.";
                break;
            default: resultMessage = "Tie!"; 
        }
        return resultMessage;
    }
}

let playerScore = 0;
let computerScore = 0;

// Write a NEW function called playGame(). Use the previous function inside of this one to play 
// a five round game that keeps score and reports a winner or loser at the end.
    
    // Call playRound function
playRound(playerSelection, computerSelection);
console.log(resultMessage);
if (resultMessage.charAt(0) === 'V') {
    playerScore = ++playerScore;
    console.log("Your score is " + playerScore + ".");
    console.log("Computer's score is " + computerScore + ".");
} else if (resultMessage.charAt(0) === 'D') {
    computerScore = ++computerScore;
    console.log("Your score is " + playerScore + ".");
    console.log("Computer's score is " + computerScore + ".");
} else {
    console.log("Your score is " + playerScore + ".");
    console.log("Computer's score is " + computerScore + ".");
}                                         

function finalResult() {
    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("It's a tie! Play again!");
    }
}

finalResult();    