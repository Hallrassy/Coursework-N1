// scripts/landing.js

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('#register form');

    function normalizeOnlinePhotoUrl(value) {
        const normalizedValue = value.trim();
        return /^https?:\/\//i.test(normalizedValue) ? normalizedValue : '';
    }

    function prefillRegisterForm() {
        if (!registerForm) return;

        const params = new URLSearchParams(window.location.search);
        const fieldMap = {
            brand: document.getElementById('brand'),
            model: document.getElementById('model'),
            mileage: document.getElementById('mileage'),
            serviceType: document.getElementById('serviceType'),
            photoUrl: document.getElementById('photoUrl')
        };

        Object.entries(fieldMap).forEach(([key, field]) => {
            if (!field || !params.has(key)) return;
            field.value = params.get(key);
        });
    }

    prefillRegisterForm();

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const brandInput = document.getElementById('brand');
            const modelInput = document.getElementById('model');
            const mileageInput = document.getElementById('mileage');
            const fullNameInput = document.getElementById('fullName');
            const phoneInput = document.getElementById('phone');
            const dateInput = document.getElementById('date');
            const serviceTypeInput = document.getElementById('serviceType');
            const notesInput = document.getElementById('notes');
            const photoUrlInput = document.getElementById('photoUrl');

            if (!brandInput || !modelInput || !mileageInput) return;

            const brand = brandInput.value.trim();
            const model = modelInput.value.trim();
            const mileage = mileageInput.value.trim();

            if (!brand || !model || !mileage) return;

            const newCar = {
                id: Date.now(),
                brand: brand,
                model: model,
                mileage: parseInt(mileage, 10),
                fullName: fullNameInput ? fullNameInput.value.trim() : '',
                phone: phoneInput ? phoneInput.value.trim() : '',
                date: dateInput ? dateInput.value.trim() : '',
                serviceType: serviceTypeInput ? serviceTypeInput.value : '',
                notes: notesInput ? notesInput.value.trim() : '',
                photoUrl: photoUrlInput ? normalizeOnlinePhotoUrl(photoUrlInput.value) : '',
                status: false
            };

            // Get existing cars
            const cars = window.getData ? window.getData() : [];

            // Add new car
            cars.push(newCar);

            // Save to localStorage
            if (window.saveData) {
                window.saveData(cars);
            }

            // Redirect to garage
            window.location.href = 'index.html';
        });
    }
});
