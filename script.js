const userInput = document.querySelector(".input");
const display = document.querySelector("#msgBox");
const attemptPara = document.querySelector("#attempts");
const submitBtn = document.querySelector("#sub_btn");
const mode = document.querySelector("#mode");
const modePara = document.querySelector("#modePara");
const b_Mode = document.querySelector("#toggle");
const container = document.querySelector(".container");

let gameNum = Math.ceil(Math.random() * 10);
let maxTries = 3;
let guesses = 0;
let n = 10; // Default range for Easy mode

// dark / light mode func

  b_Mode.addEventListener("click",() => {

     container.classList.toggle("aurora-background");
     document.body.classList.toggle("dark");

  });

        
// hard and easy mode func

mode.addEventListener("click", () => {
    if (modePara.innerText === "Easy 😀") {
        modePara.innerText = "Hard 🥵";
        maxTries = 5;
        n = 100;
    } else {
        modePara.innerText = "Easy 😀";
        maxTries = 3;
        n = 10;
    }
    tryAgain(); // Reset game when mode changes
});

const sub = () => {
    const userNum = parseInt(userInput.value);

    // Validate input
    if (isNaN(userNum) || userInput.value === "") {
        display.innerText = "❌ Please enter a valid number.";
        return;
    }
    if (userNum < 1 || userNum > n) {
        display.innerText = `❌ Please enter a number between 1 and ${n}.`;
        return;
    }

    guesses++;
    attemptPara.innerText = `Attempts: ${guesses} of ${maxTries}`;

    if (userNum === gameNum) {
        display.innerText = `🎉 Congratulations! You guessed it right: ${gameNum}`;
        submitBtn.disabled = true;
    } else if (guesses >= maxTries) {
        display.innerText = `😢 Sorry! You've used all your guesses. The correct number was ${gameNum}`;
        submitBtn.disabled = true;
    } else if (userNum < gameNum) {
        display.innerText = "📉 Your guess is too low! Try again.";
    } else {
        display.innerText = "📈 Your guess is too high! Try again.";
    }

    // Clear input after submission
    userInput.value = "";
};

const tryAgain = () => {
    gameNum = Math.ceil(Math.random() * n); // Use current range (n)
    guesses = 0;
    display.innerText = `Guess the number from 1 to ${n}. And you have only ${maxTries} guesses`;
    attemptPara.innerText = `Attempts: 0 of ${maxTries}`;
    submitBtn.disabled = false;
    userInput.value = "";
};