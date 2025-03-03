
import { typingTest } from "../typingTest.js";
import { getAllTests } from "./getTests.js";

const renderMainAreaUI = (mainTestArea) => {

    const allTests = getAllTests();
    
    mainTestArea.innerHTML = `
    <h2 class="test-header">Test Your Typing Genius!!</h2>
 
      <label id="choose-test-label" for="test-select">Choose a Test</label>
      <select id="test-select">
  ${allTests.map((test) => `
    <option value="${test.tittle}">${test.tittle}</option>
  `).join('')}
</select>

      <label id="test-description" for="test-duration">Choose your Test Duration</label>
      <div class="custom-select">
        <select name="typing test" id="test-duration">
          <option value="60">1 Minute</option>
          <option value="180">3 Minute</option>
          <option value="300">5 Minute</option>
          <option value="10">10 Sec</option>
        </select>
      </div>

      <button id="start-test">Start Test</button>`;
      document.getElementById("start-test").addEventListener("click", () => {
        const testSelect = document.getElementById("test-select").value;
        const testDuration = document.getElementById("test-duration").value;
        console.log("Test select:", testSelect, "Test duration:", testDuration);
        // Now call typingTest with the retrieved values.
        // Note: Make sure typingTest does not re-read the DOM after clearing mainTestArea.
        typingTest(mainTestArea, testSelect, testDuration);
    });
}

export const loadMainArea = (mainTestArea,logo, typingTestNav ) => {
    document.addEventListener("DOMContentLoaded",() => renderMainAreaUI(mainTestArea));
    logo.addEventListener("click",() => renderMainAreaUI(mainTestArea));
    typingTestNav.addEventListener("click",() => renderMainAreaUI(mainTestArea));
    
}
