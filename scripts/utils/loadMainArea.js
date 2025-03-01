import { getItemsFromLocalStorage } from "../localStorage.js";
import { texts } from "../text.js"

const renderMainAreaUI = (mainTestArea) => {
    const standardTests = texts;
    const customTests = getItemsFromLocalStorage("customTests");
    const allTests = [ ...customTests, ...standardTests];

    
    mainTestArea.innerHTML = `
    <h2 class="test-header">Test Your typing genius!!</h2>
      <div id="timer"></div>
 
      <label id="choose-test-label" for="test-select">Choose a Test</label>
      <select id="test-select">
  ${allTests.map((test, index) => `
    <option value="${index}">${test.tittle}</option>
  `).join('')}
</select>

      <label id="test-description" for="test-duration">Choose your Test Duration</label>
      <div class="custom-select">
        <select name="typing test" id="test-duration">
          <option value="60">1 Minute</option>
          <option value="180">3 Minute</option>
          <option value="300">5 Minute</option>
        </select>
      </div>

      <button id="start-test">Start Test</button>`
}

export const loadMainArea = (mainTestArea,logo, typingTestNav ) => {
    document.addEventListener("DOMContentLoaded",() => renderMainAreaUI(mainTestArea));
    logo.addEventListener("click",() => renderMainAreaUI(mainTestArea));
    typingTestNav.addEventListener("click",() => renderMainAreaUI(mainTestArea));
}
