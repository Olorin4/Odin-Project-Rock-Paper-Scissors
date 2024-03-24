let computerSelection;

function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
    
    // Assign 'Rock', 'Paper', or 'Scissors' based on the random number
    switch (randomNumber) {
        case 0:
            computerSelection = 'Rock';
            console.log("The computer selected: " + computerSelection + "!");
            break;
        case 1:
            computerSelection = 'Paper';
            console.log("The computer selected: " + computerSelection + "!");
            break;
        case 2:
            computerSelection = 'Scissors';
            console.log("The computer selected: " + computerSelection + "!");
            break;
    return computerSelection;
    }
}

let playerAnswer = prompt("Please select: Rock, Paper or Scissor?");
// Convert user's answer to a lower case string with an upper case first letter 
let PlayerSelection = playerAnswer.charAt(0).toUpperCase() + playerAnswer.slice(1).toLowerCase();
console.log("You selected: " + PlayerSelection + "!");

getComputerChoice();

function playRound(PlayerSelection, computerSelection) {
    let result1;
    switch (result1) {
        case PlayerSelection === computerSelection:
            console.log("It's a tie!");
            break; 
        case PlayerSelection === 'Rock' && computerSelection === 'Paper':
            console.log("You lost! Paper beats Rock.");
            break;
    }
}

playRound(PlayerSelection, computerSelection);






