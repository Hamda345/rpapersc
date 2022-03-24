const ComputerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const ResultDisplay = document.getElementById('Result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    EndResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    ComputerChoiceDisplay.innerHTML = computerChoice;
}
function EndResult () {
    if (userChoice === 'rock'){
    switch (computerChoice) {
        case 'rock': result = 'Draw';
            break;
        case 'paper': result = 'Lost';
            break;
        case 'scissors': result = 'Win';
            break;
    }
    }
    if (userChoice === 'paper') {
        switch(computerChoice) {
            case 'rock': result = 'Win';
                break;
            case 'paper': result = 'Draw';
                break;
            case 'scissors': result = 'Lost';
                break;
        }
    }
    if (userChoice === 'scissors') {
        switch (computerChoice) {
            case 'rock': result = 'Lost';
                break;
            case 'paper': result = 'Win';
                break;
            case 'scissors': result = 'Draw';
                break;
        }
    }
console.log(result);
ResultDisplay.innerHTML = result;
}

