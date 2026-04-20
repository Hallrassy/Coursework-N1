// retro-fx.js - Глобальные эффекты Awwwards / Macintosh 1992

document.addEventListener('DOMContentLoaded', () => {
    // 1. Добавление CRT-оверлея ко всем страницам
    const crtOverlay = document.createElement('div');
    crtOverlay.className = 'crt-overlay';
    document.body.appendChild(crtOverlay);

    // 2. Генератор 8-битного звука клика (Web Audio API)
    let audioCtx = null;

    function playClickSound() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        
        try {
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime); // Сделал чуть тише
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.1);
        } catch (e) {
            console.error('Audio play error:', e);
        }
    }

    // Привязываем звук ко всем ссылкам и кнопкам
    const clickableElements = document.querySelectorAll('a, button, input[type="submit"], input[type="button"], .card, .btn');
    
    clickableElements.forEach(el => {
        el.addEventListener('mousedown', playClickSound);
    });

    // Динамически обрабатываем элементы, которые могли быть добавлены позже (например, карточки машин в гараже)
    document.body.addEventListener('mousedown', (e) => {
        const target = e.target.closest('a, button, .card, .btn');
        if (target && !Array.from(clickableElements).includes(target)) {
            playClickSound();
        }
    });
});
