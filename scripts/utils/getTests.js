import { texts } from "../text.js"

export const getAllTests = () => {
    const standardTests = texts;
    const customTests = getItemsFromLocalStorage("customTests");
    return [ ...customTests, ...standardTests];
}