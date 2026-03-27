// scripts/utils.js

// Вспомогательная функция для красивого регистра текста
function formatTitle(str) {
    if (!str) return '';
    return String(str).split(' ').map(word => Math.max(word.length) > 0 ? word[0].toUpperCase() + word.substr(1) : '').join(' ');
}

// Расстояние Левенштейна для умного поиска
function getLevenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // замена
                    Math.min(
                        matrix[i][j - 1] + 1, // вставка
                        matrix[i - 1][j] + 1 // удаление
                    )
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

// Поиск наиболее подходящего ключа (с допущением опечаток)
function findBestMatch(input, collection) {
    if (!input) return null;
    let bestKey = null;
    let minDistance = Infinity;

    const keys = Array.isArray(collection) ? collection : Object.keys(collection);

    for (let key of keys) {
        // Если точное или частичное совпадение
        if (key.includes(input) || input.includes(key)) {
            return key;
        }

        // Иначе считаем расстояние Левенштейна
        const distance = getLevenshteinDistance(input, key);
        
        // Допускаем опечатки (примерно 1-3 символа в зависимости от длины)
        let threshold = Math.floor(Math.max(input.length, key.length) / 3);
        if (threshold < 1) threshold = 1;

        if (distance <= threshold && distance < minDistance) {
            minDistance = distance;
            bestKey = key;
        }
    }
    return bestKey;
}
