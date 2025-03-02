import { getSingleTest } from "./utils/getTests.js";

let timer;
// Constants
const WINDOW_SIZE = 20;
const PREVIOUS_WORDS_VISIBLE = 5;

// textpaggase div
let timeLeft ;
let timerStarted = false;
let textPassageDiv;
let userInputTextArea;
let timerDisplay;
let fullText = "";
let incorrectIndices = new Set();
let highlightIndex = 0;

// const handleTyping = (passage, duration, mainTestArea) = {
//   // Create text passage container
//     const passageDiv = document.createElement('div');
// }
function handleUserInput() {
  if (!timerStarted) {
    timerStarted = true;
    startTime = getCurrentDateTime();
    timer = setInterval(updateTimer, 1000);
  }
  updateDisplayedText(userInputTextArea.value);
}
function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = `Time Left: ${timeLeft}`;
  if (timeLeft <= 0) {
    clearInterval(timer);
    endTest();
  }
}
function onKeyDown(e) {
  if (e.key === "Tab") {
    e.preventDefault(); 
    const currentText = userInputTextArea.value;
    if (!currentText.endsWith(" ")) {
      userInputTextArea.value = currentText + " ";
    }
    checkWordCorrectness();
  }
  else if (e.key === " ") {
    setTimeout(() => {
      checkWordCorrectness();
    }, 0);
  }
}
function checkWordCorrectness() {
  const userText = userInputTextArea.value;
  const fullWords = fullText.split(" ");

  let typedWords = userText.trim().split(/\s+/);
  if (typedWords.length === 1 && typedWords[0] === "") {
    typedWords = [];
  }

  if (userText.endsWith(" ") && typedWords.length > 0) {
    const lastTypedIndex = typedWords.length - 1;
    const lastTypedWord = typedWords[lastTypedIndex];
    const correctWord = fullWords[lastTypedIndex] || "";

    if (lastTypedWord === correctWord) {
      incorrectIndices.delete(lastTypedIndex);
      if (highlightIndex === lastTypedIndex) {
        highlightIndex++;
      }
    } else {
      incorrectIndices.add(lastTypedIndex);
      // Remove trailing space so user can't skip forward
      userInputTextArea.value = userText.slice(0, -1);
    }
  }
  updateDisplayedText(userInputTextArea.value);
}
function updateDisplayedText(userText) {
    const fullWords = fullText.split(" ");
    let typedWords = userText.trim().split(/\s+/);
    if (typedWords.length === 1 && typedWords[0] === "") {
      typedWords = [];
    }
  
    const startIndex = Math.max(0, highlightIndex - PREVIOUS_WORDS_VISIBLE);
    const endIndex = Math.min(startIndex + WINDOW_SIZE, fullWords.length);
  
    const displayedWords = [];
    for (let i = startIndex; i < endIndex; i++) {
      if (i < highlightIndex) {
        if (incorrectIndices.has(i)) {
          displayedWords.push(`<span class="wrong-word">${fullWords[i]}</span>`);
        } else {
          displayedWords.push(`<span class="grayed-out">${fullWords[i]}</span>`);
        }
      } else if (i === highlightIndex) {
        if (incorrectIndices.has(i)) {
          displayedWords.push(`<span class="wrong-word">${fullWords[i]}</span>`);
        } else {
          displayedWords.push(`<span class="highlighted-word">${fullWords[i]}</span>`);
        }
      } else {
        displayedWords.push(`<span class="upcoming-text">${fullWords[i]}</span>`);
      }
    }
  
    if (textPassageDiv) {
      textPassageDiv.innerHTML = displayedWords.join(" ");
    }
  }

function endTest() {
  userInputTextArea.disabled = true;
  timerDisplay.textContent = "Time's up!";
  endTime = getCurrentDateTime();
}

function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString();
  }
export const typingTest = (mainTestArea, testSelect, testDuration) => {
    // Re-get the button after each render
7
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'start-test') {
            mainTestArea.innerHTML = '';
            console.log("Test started");
            timerDisplay = document.createElement('div');
            timerDisplay.id = 'timer';
            mainTestArea.appendChild(timerDisplay);
            textPassageDiv = document.createElement("div");
            textPassageDiv.id = "test-passage";
            
            mainTestArea.appendChild(textPassageDiv);

            // updateDisplayedText("");
            // Create user input textarea
            userInputTextArea = document.createElement("textarea");
            userInputTextArea.id = "user-input-text";
            userInputTextArea.placeholder = "Start typing here...";
             mainTestArea.appendChild(userInputTextArea);
             const testTittle = testSelect;
             testDuration = parseInt(testDuration);
             timeLeft = testDuration;
             
             fullText = getSingleTest(testTittle);

             console.log("this is the fulltext", fullText);
             updateDisplayedText("");
             userInputTextArea.addEventListener("input", handleUserInput);
             userInputTextArea.addEventListener("keydown", onKeyDown);

     
        }
    });
};