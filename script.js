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
    }
}

getComputerChoice();

let playerSelection = prompt("Please select: Rock, Paper or Scissor?");
let modedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
console.log("You selected: " + modedPlayerSelection + "!");







