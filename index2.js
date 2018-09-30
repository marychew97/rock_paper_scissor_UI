let output = document.querySelector('#output');

let winOrLose = document.createElement('h3');
winOrLose.textContent = "";
output.appendChild(winOrLose);

let scoreDis = document.createElement('div');

let userScorePara = document.createElement('h3');
userScorePara.textContent = "Your score: ";
userScorePara.classList.add('userScorePara');
scoreDis.appendChild(userScorePara);

let userScoreDis = document.createElement('h3');
userScoreDis.textContent = 0;
userScoreDis.classList.add('userScore');
scoreDis.appendChild(userScoreDis);

let compScorePara = document.createElement('h3');
compScorePara.textContent = "Computer's score: ";
compScorePara.classList.add('compScorePara');
scoreDis.appendChild(compScorePara);

let compScoreDis = document.createElement('h3');
compScoreDis.textContent = 0;
compScoreDis.classList.add('compScore');
scoreDis.appendChild(compScoreDis);

output.appendChild(scoreDis);

let resultMess = document.createElement('h2');
resultMess.textContent = "";
output.appendChild(resultMess);

let resetDiv = document.createElement('div');
output.appendChild(resetDiv);

let user_score = 0;
let computer_score = 0;

function computerPlay(){
    let sets = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return(sets[random]);
}

function playRound(playerSelection, computerSelection){
    var draw = "Draw! None of you lose";
    switch(computerSelection){
        case "rock":
            if(playerSelection == "scissors"){
                winOrLose.textContent = "You lose! Rock beats Scissors";
                computer_score += 1;
                return computer_score;
            } else if(playerSelection == "paper"){
                winOrLose.textContent = "You win! Paper beats Rock";
                user_score += 1;
                return user_score;
            } else if (computerSelection == playerSelection) {
                winOrLose.textContent = draw;
            } 
            break;
        case "paper":
            if(playerSelection == "rock"){
                winOrLose.textContent = "You lose! Paper beats Rock";
                computer_score += 1;
                return computer_score;
            } else if(playerSelection == "scissors"){
                winOrLose.textContent = "You win! Scissors beats Paper";
                user_score += 1;
                return user_score;
            } else if (computerSelection == playerSelection) {
                winOrLose.textContent = draw;
            }
            break;
        case "scissors":
            if(playerSelection == "rock"){
                winOrLose.textContent = "You win! Rock beats Scissors";
                user_score += 1;
                return user_score;
            } else if(playerSelection == "paper"){
                winOrLose.textContent = "You lose! Scissors beats Paper";
                computer_score += 1;
                return computer_score;
            } else if (computerSelection == playerSelection) {
                winOrLose.textContent = draw;
            }
            break;
    }
}

function resetGame(scissor, rock, paper){
    let resetBtn = document.createElement('button');
    resetBtn.textContent = "Play Again";
    resetBtn.classList.add('resetBtn');
    resetDiv.appendChild(resetBtn);
    resetBtn.addEventListener('click', () => {
        userScoreDis.textContent = 0;
        compScoreDis.textContent = 0;
        user_score = 0;
        computer_score = 0;
        winOrLose.textContent = "";
        resultMess.textContent = "";
        scissor.disabled = false;
        rock.disabled = false;
        paper.disabled = false;
        resetDiv.removeChild(resetBtn);
    }); 
}

function disableBtn(scissor, rock, paper){
    scissor.disabled = true;
    rock.disabled = true;
    paper.disabled = true;
    resetGame(scissor, rock, paper);
}

function game(tool){
    let message = "";

    let scissor = document.querySelector('#scissors');
    let rock = document.querySelector('#rock');
    let paper = document.querySelector('#paper');

    let playerSelection = tool.id;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    userScoreDis.textContent = user_score;
    compScoreDis.textContent = computer_score;

    if(user_score + computer_score >= 5){
        if (user_score > computer_score) {
            message = "Congratulations! You win the game!";
            disableBtn(scissor, rock, paper);
        } else {
            message = "You lose. Please try again.";
            disableBtn(scissor, rock, paper);
        }
    }
    
    resultMess.textContent = message;
}

const btnTools = document.querySelectorAll('.button');

btnTools.forEach(tool => tool.addEventListener('click', function(){
    game(tool);
}));
