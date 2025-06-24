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

document.querySelectorAll('.inner-box').forEach(box => {
  box.addEventListener('mousemove', e => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    box.style.setProperty('--x', x + 'px');
    box.style.setProperty('--y', y + 'px');
  });
  box.addEventListener('mouseleave', () => {
    box.style.setProperty('--x', '-9999px');
    box.style.setProperty('--y', '-9999px');
  });
});

// Contact form submission without page reload
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      headers: { 'Accept': 'application/json' },
      body: formData
    }).then(response => {
      if (response.ok) {
        form.reset(); 

        // Create or update the thank you message below the form
        let msg = document.getElementById('thank-you-message');
        if (!msg) {
          msg = document.createElement('p');
          msg.id = 'thank-you-message';
          form.parentNode.appendChild(msg);
        }
        msg.textContent = 'Thank you! Your message has been sent.';
      } else {
        response.json().then(data => {
          if (data.errors) {
            alert(data.errors.map(error => error.message).join(", "));
          } else {
            alert("Oops! There was a problem submitting your form.");
          }
        });
      }
    }).catch(() => {
      alert("Oops! There was a problem submitting your form.");
    });
  });
}

