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
