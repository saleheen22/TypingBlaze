// import { saveToLocalStorage } from "./localStorage.js";


// export const createCustomTest = (createCustomTestNav , mainTestArea) => {
//     createCustomTestNav.addEventListener("click",()=> {
//         const formDiv = document.createElement('div');
//         formDiv.classList.add('custom-test-form');
//         const heading = document.createElement('h2');
//         heading.className = "test-header";
//         heading.textContent = "Create Your Own Test";
//         mainTestArea.innerHTML = ``;
   
      

//         formDiv.appendChild(heading);
//         const titleLabel = document.createElement('label');
//         titleLabel.textContent = 'Test Title';
//         formDiv.appendChild(titleLabel
//         );
//         const titleInput = document.createElement("input");
//         titleInput.type = "text";
//         titleInput.id = "customTestTitle";
//         formDiv.appendChild(titleInput);

//         const contentLabel = document.createElement('label');
//         contentLabel.textContent = 'Test Content (the text passage)';
//         formDiv.appendChild(contentLabel);
//         const contentTextArea = document.createElement('textarea');
//         contentTextArea.id = "customTestContent";
//         contentTextArea.rows = 10;
//         formDiv.appendChild(contentTextArea);
//         const addBtn = document.createElement("button");
//         addBtn.id = "addCustomTestBtn";
//         formDiv.appendChild(addBtn);
//         addBtn.textContent = "Add Test";
//         addBtn.addEventListener("click", () => {
//             if(titleInput.value == "" || contentTextArea.value == ""){
//                 alert("Please fill up the text areas for the test")
//             }
//             else{
//                 saveToLocalStorage("customTests", titleInput.value, contentTextArea.value);
//                 alert("Test added successfully");
//                 titleInput.value = "";
//                 contentTextArea.value = "";
//             }

//         })
//         mainTestArea.appendChild(formDiv);

//     })
    
// }
import { saveToLocalStorage } from "./localStorage.js";
import { getItemsFromLocalStorage } from "./localStorage.js";

// Helper function that creates and renders the test form.
// initialData is used to pre-populate the form fields.
// btnText determines whether this is an "Add Test" or "Update Test" form.
// onSubmit is a callback function that receives (title, content) when the submit button is clicked.
export const renderTestForm = (
  mainTestArea,
  initialData = { tittle: "", content: "" },
  btnText,
  onSubmit
) => {
  // Optionally, you could clear only the form container if it exists,
  // but here we assume mainTestArea is dedicated to the form.
  mainTestArea.innerHTML = "";
  const formDiv = document.createElement("div");
  formDiv.classList.add("custom-test-form");

  const heading = document.createElement("h2");
  heading.className = "test-header";
  heading.textContent = btnText === "Add Test" ? "Create Your Own Test" : "Update Your Test";
  formDiv.appendChild(heading);

  // Title field
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Test Title";
  formDiv.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "customTestTitle";
  titleInput.value = initialData.tittle;
  formDiv.appendChild(titleInput);

  // Content field
  const contentLabel = document.createElement("label");
  contentLabel.textContent = "Test Content (the text passage)";
  formDiv.appendChild(contentLabel);

  const contentTextArea = document.createElement("textarea");
  contentTextArea.id = "customTestContent";
  contentTextArea.rows = 10;
  contentTextArea.value = initialData.content;
  formDiv.appendChild(contentTextArea);

  // Submit button (using id "addCustomTestBtn" for both add and update cases)
  const submitBtn = document.createElement("button");
  submitBtn.id = "addCustomTestBtn";
  submitBtn.textContent = btnText;
  submitBtn.addEventListener("click", () => {
    if (titleInput.value.trim() === "" || contentTextArea.value.trim() === "") {
      alert("Please fill up the text areas for the test");
    } else {
      // Execute the callback with the current values
      onSubmit(titleInput.value, contentTextArea.value);
      alert(`${btnText} successfully`);
      // Clear ONLY the form fields after submission, not the entire main area.
      titleInput.value = "";
      contentTextArea.value = "";
    }
  });
  formDiv.appendChild(submitBtn);

  // Append the complete form to the main area
  mainTestArea.appendChild(formDiv);
};

// Create functionality re-uses the helper function with empty initial data.
export const createCustomTest = (createCustomTestNav, mainTestArea) => {
  createCustomTestNav.addEventListener("click", () => {
    renderTestForm(mainTestArea, { tittle: "", content: "" }, "Add Test", (title, content) => {
      saveToLocalStorage("customTests", title, content);
    });
  });
};

// Update functionality: testIndex is the index of the custom test to update.
export const updateCustomTest = (mainTestArea, testIndex) => {
  const customTests = getItemsFromLocalStorage("customTests");
  const testToUpdate = customTests[testIndex];
  
  if (!testToUpdate) {
    alert("Test not found");
    return;
  }
  
  renderTestForm(mainTestArea, testToUpdate, "Update Test", (updatedTitle, updatedContent) => {
    // Update the specific test in the array and save it back
    customTests[testIndex] = {
      tittle: updatedTitle,
      content: updatedContent
    };
    localStorage.setItem("customTests", JSON.stringify(customTests));
  });
};