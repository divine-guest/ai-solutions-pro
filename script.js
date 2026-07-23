console.log('🚀 AI Solutions — профессиональный сайт');

// === ПЕРЕКЛЮЧЕНИЕ ТЕМ ===
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.textContent = '🌙';
    } else {
        document.body.classList.remove('light-theme');
        themeIcon.textContent = '☀️';
    }
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});
