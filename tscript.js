const userScoreEl = document.getElementById("user-score");
    const computerScoreEl = document.getElementById("computer-score");
    const resultMsg = document.getElementById("result-msg");
    const userMoveEl = document.querySelector("#user-move .icon");
    const computerMoveEl = document.querySelector("#computer-move .icon");
    const choices = document.querySelectorAll(".choice");
    const newGameBtn = document.getElementById("new-game-btn");
    const finalPopup = document.getElementById("final-popup");
    const finalMessage = document.getElementById("final-message");
    const closePopupBtn = document.getElementById("close-popup");

    let userScore = 0;
    let computerScore = 0;
    const winningScore = 10;


    const choiceEmoji = {
      rock: "🪨",
      paper: "📄",
      scissor: "✂️",
    };


    function getComputerChoice() {
      const choices = ["rock", "paper", "scissor"];
      const randomIndex = Math.floor(Math.random() * 3);
      return choices[randomIndex];
    }

    // Decide winner
    function getResult(userChoice, computerChoice) {
      if (userChoice === computerChoice) return "draw";

      if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
      ) {
        return "win";
      }
      return "lose";
    }

    
    function playRound(userChoice) {
      if (userScore >= winningScore || computerScore >= winningScore) {
        return; // Game is over, don't play more rounds
      }

      const computerChoice = getComputerChoice();
      const result = getResult(userChoice, computerChoice);

      
      userMoveEl.textContent = choiceEmoji[userChoice];
      computerMoveEl.textContent = choiceEmoji[computerChoice];

    
      if (result === "win") {
        userScore++;
        resultMsg.textContent = "You Win! 🎉";
        resultMsg.className = "result win";
      } else if (result === "lose") {
        computerScore++;
            resultMsg.textContent = "You Lose! 😞";
    resultMsg.className = "result lose";
  } else {
    resultMsg.textContent = "It's a Draw! 😐";
    resultMsg.className = "result draw";
  }

  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;

  
  if (userScore === winningScore || computerScore === winningScore) {
    setTimeout(showFinalPopup, 500); // Small delay before showing popup
  }
}


function showFinalPopup() {
  let message = "";
  if (userScore > computerScore) {
    message = `Congrats! You won the game ${userScore} to ${computerScore}. 🎉`;
  } else if (computerScore > userScore) {
    message = `Sorry, you lost the game ${userScore} to ${computerScore}. Try again!`;
  } else {
    message = `It's a tie game at ${userScore} each! Well played!`;
  }
  finalMessage.textContent = message;
  finalPopup.classList.remove("hidden");
}


function resetGame() {
  userScore = 0;
  computerScore = 0;
  userScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";
  userMoveEl.textContent = "❓";
  computerMoveEl.textContent = "❓";
  resultMsg.textContent = "Make your move!";
  resultMsg.className = "result";
  finalPopup.classList.add("hidden");
}


choices.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

newGameBtn.addEventListener("click", resetGame);
closePopupBtn.addEventListener("click", () => {
  finalPopup.classList.add("hidden");
});
