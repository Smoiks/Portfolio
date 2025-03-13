document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    const icon = document.querySelector('.icon-container i');

    // Toggle dark and light mode
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Switch the icon between moon and sun
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// The text you want to appear as typed, with the word "Developer" wrapped in a <span> for custom color
const textToType = "Java and HTML/CSS <span class='developer'>Developer</span>";

// The element to display the typed text
const typedTextElement = document.getElementById("typed-text");

// Typing speed (milliseconds between each letter)
const typingSpeed = 85;

// Function to simulate typing effect
function typeText(text, index = 0) {
    if (index < text.length) {
        typedTextElement.innerHTML = text.substring(0, index + 1);
        setTimeout(() => typeText(text, index + 1), typingSpeed);
    }
}

// Start the typing effect when the page loads
window.onload = () => {
    typeText(textToType);
};

// Disable right-click (context menu)
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Disable F12 (Developer Tools) key
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault();
    }

    // Prevent Ctrl+U (View Source) and Ctrl+Shift+I (Inspect Element)
    if (event.ctrlKey && (event.key === 'u' || event.key === 'I' || event.key === 'i')) {
        event.preventDefault();
    }
});
