const buttons = document.querySelectorAll('button');
const resultE1 = document.getElementById("result");
const playerScoreE1 = document.getElementById("player-Score");
const computerScoreE1 = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;
let attempts = 0;
const maxAttempts = 5;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (attempts >= maxAttempts) return;

        const playerSelection = button.id.toLowerCase().trim();
        const computerSelection = computerPlay();

        const result = playRound(playerSelection, computerSelection);
        resultE1.textContent = result;

        attempts++;
        
        if (attempts >= maxAttempts) {
            // Disable buttons
            buttons.forEach(btn => btn.disabled = true);

            // Show final result
            let finalResult = '';
            if (playerScore > computerScore) {
                finalResult = "🎉 Game Over! You won the game!";
            } else if (playerScore < computerScore) {
                finalResult = "😢 Game Over! Computer won the game!";
            } else {
                finalResult = "😐 Game Over! It's a tie!";
            }

            setTimeout(() => {
                alert(finalResult);
                resultE1.textContent = finalResult;
            }, 100);
        }
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        playerScoreE1.textContent = playerScore;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        computerScoreE1.textContent = computerScore;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
