let timer;

export const typingTest = (mainTestArea, testSelect, testDuration) => {
    // Re-get the button after each render

    const allTests = [...customTests, ...standardTests];
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'start-test') {
            mainTestArea.innerHTML = '';
            console.log("Test started");
     
        }
    });
};