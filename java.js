document.addEventListener('DOMContentLoaded', function () {
    // Array of different text values to cycle through that describes who I am
    const texts = ["Mentor", "Developer", "Product Manager", "Student"];
    let index = 0;
    // Get the DOM element where the dynamic text should be displayed
    const textElement = document.getElementById('dynamicText');

    //Function that updates the text in the 'textElement'
    function updateText() {
        // Remove the 'fade-in' class to trigger any associated fade out effects
        textElement.classList.remove('fade-in');
        // Use 'setTimeout' to delay the update, allowing any fade-out effects to complete
        setTimeout(() => {
            textElement.textContent = texts[index];
            // Add the 'fade-in' class to trigger the fade-in effect
            textElement.classList.add('fade-in');
            // Increment the index, and use modulo to loop back to the first item after the last
            index = (index + 1) % texts.length;
        }, 500); // Wait 500 milliseconds before updating the text to allow for the fade-out
    }

    // Use 'setInterval' to call 'updateText' every 2000 milliseconds, cycling through the text values
    setInterval(updateText, 2000); 
});





  