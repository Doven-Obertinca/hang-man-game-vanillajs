// DOM elements
const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

// Array with game lettters
const words = ["application", "programming", "interface", "wizard"];

// Select the random letters
let selectedWords = words[Math.floor(Math.random() * words.length)];

// Store letter in array for later
const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWords
      .split("")
      .map(
        (letter) => `
    <span class="letter">
    ${correctLetters.includes(letter) ? letter : ""}
    </span>
    
    `
      )
      .join("")}
    
    
    
    
    `;

  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === selectedWords) {
    finalMessage.innerText = "Congratulations! You are the sexy Winner😃";
    popup.style.display = "flex";
  }
}

displayWord();
