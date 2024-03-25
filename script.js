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

let playerAnswer;
let playerSelection;
let resultMessage;

// Resolve a round 
function playRound(playerSelection, computerSelection) {
    if (playerSelection = 'Rock') {
        switch (computerSelection) {
            case computerSelection = 'Paper':
                resultMessage = "Defeat! Paper beats Rock.";
                break;
            case computerSelection = 'Scissors':
                resultMessage = "Victory! Rock beats Scissors.";
                break;
            default: resultMessage = "Tie!";
        }
        return resultMessage;
    } else if (playerSelection = 'Paper') {
        switch (computerSelection) {
            case computerSelection = 'Rock':
                resultMessage = "Victory! Paper beats Rock.";
                break;
            case computerSelection = 'Scissors':
                resultMessage = "Defeat! Scissors beat Paper.";
                break;
            default: resultMessage = "Tie!";
        }
        return resultMessage;
    } else {
        switch (computerSelection) {
            case computerSelection = 'Rock':
                resultMessage = "Defeat! Rock beats Scissors.";
                break;
            case computerSelection = 'Paper':
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
function playGame() {
    // Get user's answer
    let playerAnswer = prompt("Please select: Rock, Paper or Scissor?");
    // Convert user's answer to a lower case string with an upper case first letter 
    let playerSelection = playerAnswer.charAt(0).toUpperCase() + playerAnswer.slice(1).toLowerCase();
    console.log("You selected: " + playerSelection + "!");
    
    // Call getComputerChoice function
    getComputerChoice();
    console.log("The computer selected: " + computerSelection + "!");
    
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
}

playGame();
playGame();
playGame();
playGame();
playGame();

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