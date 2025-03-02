// part-1 showing custom test and standard test

import { createCustomTest } from "./customTest.js";
import { loadMainArea } from "./utils/loadMainArea.js";




// Navigation
const createCustomTestNav  = document.getElementById('create-custom-tests');

const logo = document.querySelector(".logo");
const typingTestNav  = document.getElementById("typing-test");






const mainTestArea = document.getElementById("main-test-area");

loadMainArea(mainTestArea, logo, typingTestNav);

createCustomTest(createCustomTestNav, mainTestArea);


