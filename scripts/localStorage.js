export const getItemsFromLocalStorage = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)): [];
}

export const saveToLocalStorage = (key, tittle, content) => {
const existingTests = getItemsFromLocalStorage(key);
const newTest = {tittle, content};
existingTests.push(newTest);
localStorage.setItem(key, JSON.stringify(existingTests));

}
export const saveToLocalStorageTestResult = (key, testResult) => {
    const existingResults = getItemsFromLocalStorage(key);
    existingResults.push(testResult);
    localStorage.setItem(key, JSON.stringify(existingResults))}

    export const deleteCustomTest = (key, index) => {
        const existingTests = getItemsFromLocalStorage(key);
        if (index >= 0 && index < existingTests.length) {
          existingTests.splice(index, 1);
          localStorage.setItem(key, JSON.stringify(existingTests));
        }
       
      };