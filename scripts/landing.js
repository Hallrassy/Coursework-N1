// scripts/landing.js

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('#register form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const brandInput = document.getElementById('brand');
            const modelInput = document.getElementById('model');
            const mileageInput = document.getElementById('mileage');
            
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
