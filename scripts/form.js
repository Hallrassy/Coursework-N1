document.addEventListener('DOMContentLoaded', () => {
    // --- 1. БАЗА ДАННЫХ ---
    const serviceData = {
        "mitsubishi": {
            "outlander": [
                {
                    "mileage": 15000,
                    "name": "ТО 1 (15 000 км)",
                    "parts": [
                        {
                            "name": "Моторное масло (4-5 л)",
                            "priceStr": "22 000 – 35 000 ₸",
                            "min": 22000,
                            "max": 35000
                        },
                        {
                            "name": "Масляный фильтр",
                            "priceStr": "3 500 – 5 500 ₸",
                            "min": 3500,
                            "max": 5500
                        },
                        {
                            "name": "Прокладка сливной пробки",
                            "priceStr": "500 – 800 ₸",
                            "min": 500,
                            "max": 800
                        },
                        {
                            "name": "Фильтр салона",
                            "priceStr": "4 500 – 8 000 ₸",
                            "min": 4500,
                            "max": 8000
                        }
                    ]
                },
                {
                    "mileage": 30000,
                    "name": "ТО 2 (30 000 км)",
                    "parts": [
                        {
                            "name": "Моторное масло (4-5 л)",
                            "priceStr": "22 000 – 35 000 ₸",
                            "min": 22000,
                            "max": 35000
                        },
                        {
                            "name": "Масляный фильтр",
                            "priceStr": "3 500 – 5 500 ₸",
                            "min": 3500,
                            "max": 5500
                        },
                        {
                            "name": "Прокладка сливной пробки",
                            "priceStr": "500 – 800 ₸",
                            "min": 500,
                            "max": 800
                        },
                        {
                            "name": "Фильтр салона",
                            "priceStr": "4 500 – 8 000 ₸",
                            "min": 4500,
                            "max": 8000
                        },
                        {
                            "name": "Воздушный фильтр двигателя",
                            "priceStr": "5 000 – 9 000 ₸",
                            "min": 5000,
                            "max": 9000
                        },
                        {
                            "name": "Тормозная жидкость (1 л)",
                            "priceStr": "4 000 – 7 000 ₸",
                            "min": 4000,
                            "max": 7000
                        }
                    ]
                },
                {
                    "mileage": 60000,
                    "name": "ТО 4 (60 000 км)",
                    "parts": [
                        {
                            "name": "Свечи зажигания иридиевые (4 шт)",
                            "priceStr": "34 000 – 48 000 ₸",
                            "min": 34000,
                            "max": 48000
                        },
                        {
                            "name": "Антифриз (5 л)",
                            "priceStr": "9 000 – 14 000 ₸",
                            "min": 9000,
                            "max": 14000
                        }
                    ]
                }
            ],
            "l200": [
                {
                    "mileage": 15000,
                    "name": "ТО 1 (15 000 км)",
                    "parts": [
                        {
                            "name": "Моторное масло (дизель)",
                            "priceStr": "45 000 – 60 000 ₸",
                            "min": 45000,
                            "max": 60000
                        },
                        {
                            "name": "Масляный фильтр",
                            "priceStr": "4 500 – 7 000 ₸",
                            "min": 4500,
                            "max": 7000
                        },
                        {
                            "name": "Топливный фильтр",
                            "priceStr": "12 000 – 22 000 ₸",
                            "min": 12000,
                            "max": 22000
                        },
                        {
                            "name": "Шприцевание",
                            "priceStr": "~3 000 ₸",
                            "min": 3000,
                            "max": 3000
                        }
                    ]
                },
                {
                    "mileage": 45000,
                    "name": "ТО 3 (45 000 км)",
                    "parts": [
                        {
                            "name": "Масло в дифференциалы",
                            "priceStr": "24 500 – 38 500 ₸",
                            "min": 24500,
                            "max": 38500
                        },
                        {
                            "name": "Масло в раздатку",
                            "priceStr": "8 000 – 12 000 ₸",
                            "min": 8000,
                            "max": 12000
                        }
                    ]
                }
            ],
            "pajero sport": [
                {
                    "mileage": 15000,
                    "name": "ТО 1 (15 000 км)",
                    "parts": [
                        {
                            "name": "Моторное масло и фильтр",
                            "priceStr": "48 000 – 65 000 ₸",
                            "min": 48000,
                            "max": 65000
                        },
                        {
                            "name": "Топливный фильтр",
                            "priceStr": "15 000 – 25 000 ₸",
                            "min": 15000,
                            "max": 25000
                        },
                        {
                            "name": "Салонный фильтр",
                            "priceStr": "5 000 – 9 000 ₸",
                            "min": 5000,
                            "max": 9000
                        }
                    ]
                },
                {
                    "mileage": 90000,
                    "name": "ТО 6 (90 000 км)",
                    "parts": [
                        {
                            "name": "Ремень ГРМ",
                            "priceStr": "85 000 – 130 000 ₸",
                            "min": 85000,
                            "max": 130000
                        },
                        {
                            "name": "Приводные ремни",
                            "priceStr": "12 000 – 20 000 ₸",
                            "min": 12000,
                            "max": 20000
                        }
                    ]
                }
            ]
        },
        "toyota": {
            "camry": [
                {
                    "mileage": 10000,
                    "name": "ТО 1 (10 000 км)",
                    "parts": [
                        {
                            "name": "Моторное масло",
                            "priceStr": "28 000 – 45 000 ₸",
                            "min": 28000,
                            "max": 45000
                        },
                        {
                            "name": "Масляный фильтр",
                            "priceStr": "3 000 – 5 000 ₸",
                            "min": 3000,
                            "max": 5000
                        }
                    ]
                },
                {
                    "mileage": 40000,
                    "name": "ТО 4 (40 000 км)",
                    "parts": [
                        {
                            "name": "Воздушный фильтр",
                            "priceStr": "6 000 – 10 000 ₸",
                            "min": 6000,
                            "max": 10000
                        },
                        {
                            "name": "Масло в АКПП",
                            "priceStr": "35 000 – 55 000 ₸",
                            "min": 35000,
                            "max": 55000
                        }
                    ]
                }
            ],
            "rav4": [
                {
                    "mileage": 10000,
                    "name": "ТО 1 (10 000 км)",
                    "parts": [
                        {
                            "name": "Масло ДВС и фильтр",
                            "priceStr": "32 000 – 48 000 ₸",
                            "min": 32000,
                            "max": 48000
                        }
                    ]
                },
                {
                    "mileage": 80000,
                    "name": "ТО 8 (80 000 км)",
                    "parts": [
                        {
                            "name": "Топливный фильтр",
                            "priceStr": "35 000 – 55 000 ₸",
                            "min": 35000,
                            "max": 55000
                        }
                    ]
                }
            ],
            "land cruiser 300": [
                {
                    "mileage": 10000,
                    "name": "ТО 1 (10 000 км)",
                    "parts": [
                        {
                            "name": "Моторное масло",
                            "priceStr": "55 000 – 80 000 ₸",
                            "min": 55000,
                            "max": 80000
                        }
                    ]
                }
            ]
        }
    };

    const modelAliases = {
        'l200': 'l200', 'triton': 'l200',
        'land cruiser': 'land cruiser 300', 'lc300': 'land cruiser 300', 'lc 300': 'land cruiser 300'
    };

    // --- 2. ВСТРОЕННЫЕ УТИЛИТЫ (Удалены: используются глобальные из utils.js) ---

    // --- 3. ЛОГИКА ИНТЕРФЕЙСА (АВТОКОМПЛИТ И ФОРМА) ---
    const formPanel = document.querySelector('.form-panel form');
    const listPanel = document.querySelector('.list-panel');
    if (!formPanel || !listPanel) return;

    const brandInput = document.getElementById('brand');
    const modelInput = document.getElementById('model');
    const mileageInput = document.getElementById('mileage');
    const photoUrlInput = document.getElementById('photoUrl');
    const brandDropdown = document.getElementById('brand-dropdown');
    const modelDropdown = document.getElementById('model-dropdown');
    const submitButton = formPanel.querySelector('button[type="submit"]');
    const defaultListMarkup = `
        <h3>Красивый список деталей</h3>
        <p class="text-sm-light-mb-20">
            Здесь появится список деталей, рекомендованных к замене по указанному пробегу.
        </p>
        <div class="empty-state">
            <p>Список пока пуст.<br>Заполните форму слева для проверки.</p>
        </div>
    `;

    let lastCheckedSignature = null;
    let hasPendingChanges = false;

    function normalizeModelAlias(modelValue) {
        let normalizedModel = modelValue.trim().toLowerCase();

        for (let alias in modelAliases) {
            if (normalizedModel.includes(alias)) {
                normalizedModel = modelAliases[alias];
                break;
            }
        }

        return normalizedModel;
    }

    function getCurrentFormSignature() {
        return JSON.stringify({
            brand: brandInput.value.trim().toLowerCase(),
            model: normalizeModelAlias(modelInput.value),
            mileage: mileageInput.value.trim(),
            photoUrl: photoUrlInput ? photoUrlInput.value.trim() : ''
        });
    }

    function normalizeOnlinePhotoUrl(value) {
        const normalizedValue = (value || '').trim();
        return /^https?:\/\//i.test(normalizedValue) ? normalizedValue : '';
    }

    function getPhotoInfoMarkup() {
        const photoUrl = normalizeOnlinePhotoUrl(photoUrlInput ? photoUrlInput.value : '');

        if (!photoUrl) {
            return `
                <p style="font-family: var(--font-pixel); font-size: 0.75rem; margin-bottom: 20px; line-height: 1.5;">
                    <strong>Фото:</strong> Нету фотографии
                </p>
            `;
        }

        return `
            <p style="font-family: var(--font-pixel); font-size: 0.75rem; margin-bottom: 20px; line-height: 1.5;">
                <strong>Фото:</strong> <a href="${photoUrl}" target="_blank" rel="noopener noreferrer">Открыть фотографию</a>
            </p>
        `;
    }

    function updateSubmitState() {
        if (!submitButton) return;
        submitButton.textContent = hasPendingChanges ? 'Обновить список' : 'Проверить';
    }

    function markFormAsChanged() {
        hasPendingChanges = getCurrentFormSignature() !== lastCheckedSignature;
        updateSubmitState();
    }

    function resetListPanel() {
        listPanel.innerHTML = defaultListMarkup;
    }

    // Отрисовка выпадающего списка
    function renderAutocomplete(inputEl, dropdownEl, optionsList) {
        const val = inputEl.value.trim().toLowerCase();
        dropdownEl.innerHTML = '';
        let results = [];

        if (!val) {
            // Если пусто, показываем все доступные варианты
            results = optionsList.map(opt => ({ key: opt, dist: 0 }));
        } else {
            // Неточный поиск (оставляем только подходящие по смыслу/опечаткам)
            optionsList.forEach(opt => {
                const lowerOpt = opt.toLowerCase();
                if (lowerOpt.includes(val) || val.includes(lowerOpt)) {
                    results.push({ key: opt, dist: 0 });
                } else {
                    let dist = getLevenshteinDistance(val, lowerOpt);
                    let threshold = Math.max(1, Math.floor(Math.max(val.length, lowerOpt.length) / 3));
                    if (dist <= threshold + 1) {
                        results.push({ key: opt, dist: dist });
                    }
                }
            });
        }

        results.sort((a, b) => a.dist - b.dist);

        if (results.length > 0) {
            results.forEach(res => {
                const div = document.createElement('div');
                div.className = 'autocomplete-item';
                div.textContent = formatTitle(res.key);

                // Обработка клика
                div.addEventListener('click', () => {
                    inputEl.value = formatTitle(res.key);
                    dropdownEl.classList.remove('active');
                    // Если выбрали марку, сбрасываем модель
                    if (inputEl === brandInput) {
                        modelInput.value = '';
                    }
                    markFormAsChanged();
                });
                dropdownEl.appendChild(div);
            });
            dropdownEl.classList.add('active');
        } else {
            dropdownEl.classList.remove('active');
        }
    }

    // События для Input Brand
    brandInput.addEventListener('input', () => renderAutocomplete(brandInput, brandDropdown, Object.keys(serviceData)));
    brandInput.addEventListener('focus', () => renderAutocomplete(brandInput, brandDropdown, Object.keys(serviceData)));

    // События для Input Model
    modelInput.addEventListener('input', () => {
        let selectedBrand = findBestMatch(brandInput.value.trim().toLowerCase(), serviceData);
        // Если марка найдена, показываем только её модели. Иначе - все модели вообще.
        let models = selectedBrand ? Object.keys(serviceData[selectedBrand]) : Object.values(serviceData).flatMap(b => Object.keys(b));
        renderAutocomplete(modelInput, modelDropdown, models);
    });
    modelInput.addEventListener('focus', () => {
        let selectedBrand = findBestMatch(brandInput.value.trim().toLowerCase(), serviceData);
        let models = selectedBrand ? Object.keys(serviceData[selectedBrand]) : Object.values(serviceData).flatMap(b => Object.keys(b));
        renderAutocomplete(modelInput, modelDropdown, models);
    });

    // Закрытие меню при клике по пустому месту
    document.addEventListener('click', (e) => {
        if (!brandInput.contains(e.target) && !brandDropdown.contains(e.target)) brandDropdown.classList.remove('active');
        if (!modelInput.contains(e.target) && !modelDropdown.contains(e.target)) modelDropdown.classList.remove('active');
    });

    [brandInput, modelInput, mileageInput, photoUrlInput].filter(Boolean).forEach(input => {
        input.addEventListener('input', markFormAsChanged);
        input.addEventListener('change', markFormAsChanged);
    });

    // --- 4. ОТПРАВКА ФОРМЫ (ГЕНЕРАЦИЯ СПИСКА ТО) ---
    formPanel.addEventListener('submit', (e) => {
        e.preventDefault();

        const brandVal = brandInput.value.trim().toLowerCase();
        let modelVal = normalizeModelAlias(modelInput.value);
        const mileageVal = parseInt(mileageInput.value.trim(), 10);
        const currentSignature = JSON.stringify({
            brand: brandVal,
            model: modelVal,
            mileage: mileageInput.value.trim(),
            photoUrl: photoUrlInput ? photoUrlInput.value.trim() : ''
        });

        if (currentSignature === lastCheckedSignature && !hasPendingChanges) {
            return;
        }

        let foundBrand = findBestMatch(brandVal, serviceData);

        if (foundBrand) {
            let foundModel = findBestMatch(modelVal, serviceData[foundBrand]);

            if (foundModel) {
                let schedules = serviceData[foundBrand][foundModel];
                let bestSchedule = null;

                // Подбор оптимального ТО под пробег
                schedules.forEach(schedule => {
                    if (Math.abs(mileageVal - schedule.mileage) <= 5000) {
                        bestSchedule = schedule;
                    } else if (!bestSchedule && mileageVal >= schedule.mileage) {
                        bestSchedule = schedule;
                    }
                });

                if (!bestSchedule && schedules.length > 0) bestSchedule = schedules[0];

                if (bestSchedule) {
                    let totalMin = 0;
                    let totalMax = 0;

                    let html = `
                        <h2 style="margin-bottom: 20px;">Детали для замены:<br>${formatTitle(foundBrand)} ${formatTitle(foundModel)}</h2>
                        <p style="font-family: var(--font-pixel); font-size: 0.8rem; margin-bottom: 20px; line-height: 1.4;">Рекомендовано для пробега:<br><strong>${bestSchedule.mileage.toLocaleString('ru-RU')} км (${bestSchedule.name})</strong></p>
                        ${getPhotoInfoMarkup()}
                        <div style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 30px;">
                    `;

                    bestSchedule.parts.forEach(part => {
                        totalMin += part.min;
                        totalMax += part.max;
                        html += `
                            <div class="card" style="padding: 15px; padding-top: 45px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 0;">
                                <strong style="font-size: 1rem; text-transform: uppercase;">${part.name}</strong>
                                <span style="background: var(--primary); color: var(--white); padding: 5px 10px; font-family: var(--font-pixel); font-size: 0.7rem; border: 2px solid var(--black); box-shadow: 4px 4px 0 var(--black); font-weight: 700; white-space: nowrap;">${part.priceStr}</span>
                            </div>
                        `;
                    });

                    html += `
                        </div>
                        <div class="card" style="background: var(--accent); border-color: var(--black); padding-top: 45px;">
                            <div style="font-family: var(--font-pixel); font-size: 0.8rem; text-transform: uppercase; margin-bottom: 10px; font-weight: bold; color: var(--black); line-height: 1.4;">Итоговая примерная стоимость:</div>
                            <div style="font-size: 1.5rem; font-family: var(--font-pixel); font-weight: 800; color: var(--black); text-shadow: 2px 2px 0 var(--white);">
                                ${totalMin.toLocaleString('ru-RU')} – ${totalMax.toLocaleString('ru-RU')} ₸
                            </div>
                        </div>
                    `;

                    listPanel.innerHTML = html;
                    lastCheckedSignature = currentSignature;
                    hasPendingChanges = false;
                    updateSubmitState();
                    return; // Успешный выход
                }
            }
        }

        // Если в БД не нашлось машины или деталей
        listPanel.innerHTML = `
            <div class="card" style="padding-top: 45px;">
                <h3 style="color: var(--primary); margin-bottom: 10px;">Результаты не найдены</h3>
                <div class="empty-state">
                    <p style="color: var(--text-dark);">Для автомобиля <strong>${brandInput.value} ${modelInput.value}</strong> на пробеге ${mileageVal} км в базе нет деталей.</p>
                    <p style="color: var(--text-dark); margin-top: 10px;"><strong>Фото:</strong> ${normalizeOnlinePhotoUrl(photoUrlInput ? photoUrlInput.value : '') ? '<a href="' + normalizeOnlinePhotoUrl(photoUrlInput.value) + '" target="_blank" rel="noopener noreferrer">Открыть фотографию</a>' : 'Нету фотографии'}</p>
                    <p style="font-size: 0.9em; margin-top: 10px;">Доступны: Mitsubishi (Outlander, L200, Pajero Sport) и Toyota (Camry, RAV4, Land Cruiser 300).</p>
                </div>
            </div>
        `;
        lastCheckedSignature = currentSignature;
        hasPendingChanges = false;
        updateSubmitState();
    });

    // Кнопка "Сбросить"
    formPanel.addEventListener('reset', () => {
        resetListPanel();
        brandDropdown.classList.remove('active');
        modelDropdown.classList.remove('active');
        lastCheckedSignature = null;
        hasPendingChanges = false;
        updateSubmitState();
    });

    updateSubmitState();
});
