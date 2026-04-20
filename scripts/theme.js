document.addEventListener('DOMContentLoaded', () => {
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Применяем сохраненную тему при загрузке
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    });
});
