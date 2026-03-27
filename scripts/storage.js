// scripts/storage.js

function getData() {
    try {
        const raw = localStorage.getItem('savedCars');
        if (raw) return JSON.parse(raw);
    } catch (e) {
        console.error('Failed to parse cars from localStorage', e);
    }
    return [];
}

function saveData(data) {
    localStorage.setItem('savedCars', JSON.stringify(data));
}
