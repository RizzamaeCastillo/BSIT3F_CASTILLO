// Select the toggle button and the body
const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Check localStorage for user preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Light Mode';
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    toggleButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';

    // Save preference in localStorage
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
});