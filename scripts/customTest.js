import { saveToLocalStorage } from "./localStorage.js";


export const createCustomTest = (createCustomTestNav , mainTestArea) => {
    createCustomTestNav.addEventListener("click",()=> {
        const formDiv = document.createElement('div');
        formDiv.classList.add('custom-test-form');
        const heading = document.createElement('h2');
        heading.className = "test-header";
        heading.textContent = "Create Your Own Test";
        mainTestArea.innerHTML = ``;
   
      

        formDiv.appendChild(heading);
        const titleLabel = document.createElement('label');
        titleLabel.textContent = 'Test Title';
        formDiv.appendChild(titleLabel
        );
        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.id = "customTestTitle";
        formDiv.appendChild(titleInput);

        const contentLabel = document.createElement('label');
        contentLabel.textContent = 'Test Content (the text passage)';
        formDiv.appendChild(contentLabel);
        const contentTextArea = document.createElement('textarea');
        contentTextArea.id = "customTestContent";
        contentTextArea.rows = 10;
        formDiv.appendChild(contentTextArea);
        const addBtn = document.createElement("button");
        addBtn.id = "addCustomTestBtn";
        formDiv.appendChild(addBtn);
        addBtn.textContent = "Add Test";
        addBtn.addEventListener("click", () => {
            if(titleInput.value == "" || contentTextArea.value == ""){
                alert("Please fill up the text areas for the test")
            }
            else{
                saveToLocalStorage("customTests", titleInput.value, contentTextArea.value);
                alert("Test added successfully");
                titleInput.value = "";
                contentTextArea.value = "";
            }

        })
        mainTestArea.appendChild(formDiv);

    })
    
}