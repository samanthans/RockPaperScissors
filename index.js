const choices = ["Pedra", "Papel", "Tesoura"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    //console.log(computerChoice);
    let result = "";

    if(playerChoice === computerChoice) {
        result = "Empate!"
    }
    else{
        switch(playerChoice){
            case "Pedra":
                result = (computerChoice === "Tesoura") ? "Você Ganhou!" : "Você perdeu! 😢" ;
                break;
            case "Papel":
                result = (computerChoice === "Pedra") ? "Você Ganhou!" : "Você perdeu! 😢" ;
                break;

            case "Tesoura":
                result = (computerChoice === "Papel") ? "Você Ganhou!" : "Você perdeu! 😢" ;
                break;
                
        }
    }
    
    playerDisplay.textContent = `Jogador: ${playerChoice}`;
    computerDisplay.textContent = `Computador: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText", "yellowText")
    switch(result){
        case "Você Ganhou!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Você perdeu! 😢":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;  
        case "Empate!":
            resultDisplay.classList.add("yellowText");
            break;  
        
    }
}