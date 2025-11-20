# 🎲 Number Guessing Game

A small, friendly web game where the player guesses a random number. It's built with simple HTML, CSS, and JavaScript. This README explains every part of the project in easy English so beginners can understand and run it.

---

## 🚀 Short Introduction

This project is a **Number Guessing Game**. The computer picks a random number and you try to guess it. You have a limited number of attempts. The game has two modes: **Easy** (1–10, 3 guesses) and **Hard** (1–100, 5 guesses). There is also a light/dark visual toggle.

---

## ✨ Main Features

* Simple and clean UI with an aurora-style background.
* Two game modes: **Easy** and **Hard**.
* Dark / Light visual toggle.
* Shows helpful messages: too low, too high, correct, or out of guesses.
* Attempts counter and reset (Play again) button.
* Works on desktop and mobile (responsive).

---

## 🧩 Project Structure (files you have)

* `index.html` — The main HTML file. It contains the page layout and elements.
* `style.css` — Main stylesheet for layout, colors, responsive rules and the toggle styling.
* `btn-style.css` — (linked in `index.html`) — custom button styles (you provided a link; if extra styles are needed put them here).
* `script.js` — JavaScript file with all game logic and event handling.

---

## 🏗️ Explain: What each file and main part does

### `index.html`

* `<input class="input" type="number">` — where the player types a number.
* `<button id="sub_btn" onclick="sub()">Submit</button>` — sends the guess to the `sub()` function.
* `<button id="res_btn" onclick="tryAgain()">Play again</button>` — resets the game using `tryAgain()`.
* `#msgBox` — element showing messages to the player (instructions, hints, results).
* `#attempts` — shows how many attempts have been used and the max allowed.
* `#mode` and `#modePara` — the mode switch area; clicking it toggles between Easy and Hard.
* `#toggle` — a checkbox used as the visual dark/light toggle (it toggles CSS classes when clicked).

### `style.css`

* Controls the whole look: fonts, spacing, background grid, aurora colors, and responsive rules.
* `.container`, `.messageBox`, and `#inputDiv` style the main game card and input area.
* Toggle styling (`.toggle-slot`, `.toggle-button`, `.sun-icon-wrapper`, `.moon-icon-wrapper`) creates the animated light/dark control.
* Media queries make the layout work well on small screens.

### `script.js` — main logic (short explanation)

* **Query selectors** at top find HTML elements to update (input, message box, attempt counter, buttons and mode toggle).

```js
const userInput = document.querySelector(".input");
const display = document.querySelector("#msgBox");
const attemptPara = document.querySelector("#attempts");
const submitBtn = document.querySelector("#sub_btn");
const mode = document.querySelector("#mode");
const modePara = document.querySelector("#modePara");
const b_Mode = document.querySelector("#toggle");
const container = document.querySelector(".container");
```

* **Game variables**

  * `gameNum` — the random number the player must guess.
  * `maxTries` — maximum attempts allowed (changes with mode).
  * `guesses` — how many times the player has guessed so far.
  * `n` — the top range (10 for Easy, 100 for Hard).

```js
let gameNum = Math.ceil(Math.random() * 10);
let maxTries = 3;
let guesses = 0;
let n = 10; // Default range for Easy mode
```

* **Dark / Light mode event**

  * Clicking the toggle checkbox (`b_Mode`) toggles two CSS classes: `aurora-background` on the container and `dark` on `body`. These classes change the visual style.

```js
b_Mode.addEventListener("click", () => {
  container.classList.toggle("aurora-background");
  document.body.classList.toggle("dark");
});
```

* **Mode switch (Easy / Hard)**

  * Clicking the mode area toggles `modePara` text and updates `maxTries` and `n`.
  * It then calls `tryAgain()` to reset the game with the new settings.

```js
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
  tryAgain();
});
```

* **`sub()`**** function — what happens when you submit a guess**

  1. Read the number from the input and convert it to an integer.
  2. Validate the input: check if it is a number and inside the valid range.
  3. Increase `guesses` and update the attempts text.
  4. Compare the guess to `gameNum` and show a message:

     * If correct: show success and disable the submit button.
     * If out of attempts: show the correct number and disable submit.
     * If too low or too high: show hint and let player try again.
  5. Clear the input so the player can type a new guess.

```js
const sub = () => {
  const userNum = parseInt(userInput.value);
  // validation ...
  guesses++;
  attemptPara.innerText = `Attempts: ${guesses} of ${maxTries}`;
  // check correct / too high / too low / out of guesses
  userInput.value = ""; // clear input
};
```

* **`tryAgain()`**** function — reset game**

  * Creates a new `gameNum` with current range `n`.
  * Resets `guesses` to 0, enables submit button, updates message and attempts text.

```js
const tryAgain = () => {
  gameNum = Math.ceil(Math.random() * n);
  guesses = 0;
  display.innerText = `Guess the number from 1 to ${n}. And you have only ${maxTries} guesses`;
  attemptPara.innerText = `Attempts: 0 of ${maxTries}`;
  submitBtn.disabled = false;
  userInput.value = "";
};
```

---

## ▶️ How to Play / Use (step-by-step)

1. Open `index.html` in a web browser (see **How to run** below).
2. Read the message on the top: it tells the range (1 to 10 or 1 to 100) and how many guesses you have.
3. Type a number inside the input box and click **Submit**.
4. After each guess you will see a message:

   * ✅ Correct — you guessed the number.
   * 📉 Too low — try a higher number.
   * 📈 Too high — try a lower number.
   * 😢 Out of guesses — the game ends and shows the correct number.
5. Use the **Play again** button to start a new round.
6. Click the **Easy/Hard** box to switch modes. The game will reset automatically.
7. Use the sun/moon toggle at top-right to change page style (visual dark/light). This does not affect game state.

---

## 🛠️ Technologies Used

* **HTML** — structure and elements.
* **CSS** — layout, design, responsiveness, and animations.
* **JavaScript** — game logic and event handling.
* Iconify (via CDN) — for the sun/moon icons: `https://code.iconify.design`.
* Google Fonts (Lato) — for typography.

---

## 🏃 How to Run (simple)

###  Open locally (easy)

1. Put the project files (`index.html`, `style.css`, `btn-style.css`, `script.js`) in a folder.
2. Double-click `index.html` to open it in your web browser.

---

## ✍️ Credits / Author

Made ❤️ by Me** (Muhammad zakria). Great experience building a clean, beginner-friendly game! 

---

## ✅ Final Notes

* The code is short and easy to understand — a good starter project for learning DOM, events, and simple game logic.

Enjoy coding and playing! 🎉
