import { updateCustomTest } from "./customTest.js";
import { deleteCustomTest } from "./localStorage.js";
import { getCustomTests } from "./utils/getTests.js";

// This function renders the tests immediately.
export const loadCustomTests = () => {
  const mainArea = document.getElementById("main-test-area");
  // Clear the current content
  mainArea.innerHTML = "";
  
  const allTests = getCustomTests();
  allTests.forEach((test, index) => {
    // Create a card container for each custom test
    const card = document.createElement("div");
    card.classList.add("custom-test-card");

    // Create the title element
    const titleEl = document.createElement("p");
    titleEl.textContent = `Title: ${test.tittle}`;
    card.appendChild(titleEl);

    // Create a container for buttons (for layout purposes)
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    // Create Update button (position left)
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.addEventListener("click", () => {
      updateCustomTest(mainArea,index);
      
    });
    // Create Delete button (position right)
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      deleteCustomTest("customTests", index);
      
      loadCustomTests();
      alert("Test deleted successfully");
    });

    // Append both buttons into the container.
    buttonsContainer.appendChild(updateBtn);
    buttonsContainer.appendChild(deleteBtn);

    // Append the buttons container to the card.
    card.appendChild(buttonsContainer);

    // Append the card to the main area.
    mainArea.appendChild(card);
  });
};

// Bind loadCustomTests to your "check-all-tests" button.
document.getElementById("check-all-tests").addEventListener("click", loadCustomTests);