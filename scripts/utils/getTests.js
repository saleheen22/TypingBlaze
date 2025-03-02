import { getItemsFromLocalStorage } from "../localStorage.js";
import { texts } from "../text.js"

export const getAllTests = () => {
    const standardTests = texts;
    const customTests = getItemsFromLocalStorage("customTests");
    return [ ...customTests, ...standardTests];
}
export const getSingleTest = (tittle) => {
    
    const check = getAllTests().find(test => test.tittle === tittle);
    console.log(check);
    return check.content;
}
