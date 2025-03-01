// part-1 showing custom test and standard test

import { createCustomTest } from "./customTest.js";
import { typingTest } from "./typingTest.js";
import { loadMainArea } from "./utils/loadMainArea.js";




// Navigation
const createCustomTestNav  = document.getElementById('create-custom-tests');

const logo = document.querySelector(".logo");
const typingTestNav  = document.getElementById("typing-test");


// Typing Test
const testSelect = document.getElementById("test-select");
const testDuration = document.getElementById("test-duration");
const startTest = document.getElementById("start-test");

const mainTestArea = document.getElementById("main-test-area");

loadMainArea(mainTestArea, logo, typingTestNav);

createCustomTest(createCustomTestNav, mainTestArea);

typingTest(mainTestArea, testSelect, testDuration);

