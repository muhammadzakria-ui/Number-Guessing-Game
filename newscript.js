let gameNum = Math.ceil(Math.random() * 10);
let userNum;
let userChoice = confirm("Do you want to play the number guessing game?");

if (userChoice) {
    let maxTries = 3;
    for (let guesses = 1; guesses <= maxTries; guesses++) {
        userNum = parseInt(prompt(`Attempt ${guesses} of ${maxTries}: Guess a number from 1 to 10`), 10);

        if (userNum === gameNum) {
            alert(`🎉 Congratulations! You guessed it right: ${gameNum}`);
            break;
        } else if (userNum < gameNum) {
            if (guesses === maxTries) {
                alert(`😢 Sorry! You've used all your guesses. The correct number was ${gameNum}`);
                break;
            }
            alert("📉 Too low! Try again.");
        } else if (userNum > gameNum) {
            if (guesses === maxTries) {
                alert(`😢 Sorry! You've used all your guesses. The correct number was ${gameNum}`);
                break;
            }
            alert("📈 Too high! Try again.");
        } else {
            alert("❌ Invalid input. Please enter a number.");
            guesses--; // Don't count invalid input
        }
    }

    let tryAgain = confirm("Do you want to play again?");
    if (tryAgain) {
        location.reload();
    }else {
    alert("No worries! Maybe next time.");
}

} else {
    alert("No worries! Maybe next time.");
}
