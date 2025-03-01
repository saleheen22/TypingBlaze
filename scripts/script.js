// part-1 showing custom test and standard test

import { createCustomTest } from "./customTest.js";
import { loadMainArea } from "./utils/loadMainArea.js";

const logo = document.querySelector(".logo");
const typingTestNav  = document.getElementById("typing-test");
const testSelect = document.getElementById("test-select");
const createCustomTestNav  = document.getElementById('create-custom-tests');


const mainTestArea = document.getElementById("main-test-area");

loadMainArea(mainTestArea, logo, typingTestNav);

createCustomTest(createCustomTestNav, mainTestArea);