export const getItemsFromLocalStorage = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)): [];
}

export const saveToLocalStorage = (key, tittle, content) => {
const existingTests = getItemsFromLocalStorage(key);
const newTest = {tittle, content};
existingTests.push(newTest);
localStorage.setItem(key, JSON.stringify(existingTests));

}