console.log('🚀 AI Solutions — профессиональный сайт');
// === ПЕРЕКЛЮЧЕНИЕ ТЕМ ===
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

// Функция для установки темы
function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.textContent = '🌙'; // иконка для переключения на тёмную
    } else {
        document.body.classList.remove('light-theme');
        themeIcon.textContent = '☀️'; // иконка для переключения на светлую
    }
    // Сохраняем выбор в localStorage
    localStorage.setItem('theme', theme);
}

// Проверяем сохранённую тему при загрузке
const savedTheme = localStorage.getItem('theme') || 'dark'; // по умолчанию тёмная
setTheme(savedTheme);

// Обработчик клика по кнопке
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});
