let computerSelection;

function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
    
    // Assign 'Rock', 'Paper', or 'Scissors' based on the random number
    switch (randomNumber) {
        case 0:
            computerSelection = 'Rock';
            break;
        case 1:
            computerSelection = 'Paper';
            break;
        case 2:
            computerSelection = 'Scissors';
            break;
    }
    return computerSelection;
}

// Get user's answer
let playerAnswer = prompt("Please select: Rock, Paper or Scissor?");
// Convert user's answer to a lower case string with an upper case first letter 
let playerSelection = playerAnswer.charAt(0).toUpperCase() + playerAnswer.slice(1).toLowerCase();
console.log("You selected: " + playerSelection + "!");

// Call getComputerChoice function
getComputerChoice();
console.log("The computer selected: " + computerSelection + "!");

let result1;

// Resolve a round 
function playRound(playerSelection, computerSelection) {
    if (playerSelection = 'Rock') {
        switch (computerSelection) {
            case computerSelection = 'Paper':
                result1 = "Defeat! Paper beats Rock.";
                break;
            case computerSelection = 'Scissors':
                result1 = "Victory! Rock beats Scissors.";
                break;
            default: result1 = "Tie!";
        }
        console.log(result1);
    } else if (playerSelection = 'Paper') {
        switch (computerSelection) {
            case computerSelection = 'Rock':
                result1 = "Victory! Paper beats Rock.";
                break;
            case computerSelection = 'Scissors':
                result1 = "Defeat! Scissors beat Paper.";
                break;
            default: result1 = "Tie!";
        }
        console.log(result1);
    } else {
        switch (computerSelection) {
            case computerSelection = 'Rock':
                result1 = "Defeat! Rock beats Scissors.";
                break;
            case computerSelection = 'Paper':
                result1 = "Victory! Scissors beat Paper.";
                break;
            default: result1 = "Tie!"; 
        }
        console.log(result1);
    }
}

// Call playRound function
playRound(playerSelection, computerSelection);





