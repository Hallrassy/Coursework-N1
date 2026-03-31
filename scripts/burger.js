// =============================================
// Логика бургер-меню для мобильной навигации
// =============================================

/**
 * Инициализирует бургер-меню: управляет открытием/закрытием
 * навигации, overlay и анимацией кнопки.
 */
function initBurgerMenu() {
    const burgerToggle = document.querySelector('.burger-toggle');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.nav-overlay');

    // Проверка наличия элементов на странице
    if (!burgerToggle || !nav || !overlay) {
        return;
    }

    /**
     * Переключает состояние бургер-меню (открыто/закрыто)
     */
    function toggleMenu() {
        const isActive = nav.classList.toggle('active');
        burgerToggle.classList.toggle('active', isActive);
        overlay.classList.toggle('active', isActive);
        document.body.classList.toggle('menu-open', isActive);
    }

    /**
     * Закрывает бургер-меню
     */
    function closeMenu() {
        nav.classList.remove('active');
        burgerToggle.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    // Клик по кнопке бургера — открыть/закрыть
    burgerToggle.addEventListener('click', toggleMenu);

    // Клик по overlay — закрыть
    overlay.addEventListener('click', closeMenu);

    // Клик по ссылке в навигации — закрыть
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    // Нажатие Escape — закрыть
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
}

// Запуск после загрузки DOM
document.addEventListener('DOMContentLoaded', initBurgerMenu);
