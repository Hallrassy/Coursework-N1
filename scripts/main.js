document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('garage-grid');
    const searchInput = document.getElementById('search-input');
    const totalCarsEl = document.getElementById('total-cars');

    if (!grid) return;

    let cars = window.getData() || [];

    function normalizeOnlinePhotoUrl(value) {
        const normalizedValue = (value || '').trim();
        return /^https?:\/\//i.test(normalizedValue) ? normalizedValue : '';
    }

    function getPhotoBlock(car, title) {
        const photoUrl = normalizeOnlinePhotoUrl(car.photoUrl);

        if (!photoUrl) {
            return `
                <div class="card-no-photo">Нету фотографии</div>
            `;
        }

        return `
            <img src="${photoUrl}" alt="${title}" class="card-photo">
            <div class="card-no-photo" hidden>Нету фотографии</div>
        `;
    }

    function getPhotoMeta(car) {
        const photoUrl = normalizeOnlinePhotoUrl(car.photoUrl);
        if (!photoUrl) {
            return '<p style="margin: 4px 0;"><strong>Фото:</strong> Нету фотографии</p>';
        }

        return `<p style="margin: 4px 0;"><strong>Фото:</strong> <a href="${photoUrl}" target="_blank" rel="noopener noreferrer">Открыть фотографию</a></p>`;
    }

    function attachPhotoFallbacks() {
        document.querySelectorAll('.card-photo').forEach((img) => {
            const showFallback = () => {
                const wrapper = img.closest('.card-img');
                const fallback = wrapper ? wrapper.querySelector('.card-no-photo') : null;

                if (wrapper) {
                    wrapper.classList.add('no-photo');
                }

                img.hidden = true;

                if (fallback) {
                    fallback.hidden = false;
                }
            };

            img.addEventListener('error', showFallback);

            if (img.complete && img.naturalWidth === 0) {
                showFallback();
            }
        });
    }

    function renderCars(filterText = '') {
        const lowerFilter = filterText.toLowerCase();

        let filteredCars = cars;
        if (lowerFilter) {
            filteredCars = cars.filter(car =>
                (car.brand && car.brand.toLowerCase().includes(lowerFilter)) ||
                (car.model && car.model.toLowerCase().includes(lowerFilter))
            );
        }

        // Обновляем счетчик
        if (totalCarsEl) {
            totalCarsEl.textContent = filteredCars.length;
        }

        // Очищаем сетку, кроме add-card
        const addCardHtml = `
            <a href="form.html" class="card add-card">
                <div class="add-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                </div>
                <h3 class="text-lg-bold-mb-10">Добавить новый транспорт</h3>
                <p class="text-sm-light">Отслеживайте обслуживание для еще одного автомобиля в гараже.</p>
            </a>
        `;

        let html = '';

        filteredCars.forEach(car => {
            const title = window.formatTitle ? (window.formatTitle(car.brand) + ' ' + window.formatTitle(car.model)) : (car.brand + ' ' + car.model);

            html += `
            <div class="card" data-id="${car.id}">
                <div class="card-img">
                    ${getPhotoBlock(car, title)}
                    <span class="card-due ${car.status ? 'success' : ''}">${car.status ? 'Обслужено' : 'Ждет ТО'}</span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">${title}</h3>
                    <div class="card-meta" style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-weight: bold; font-family: var(--font-pixel); font-size: 1.2rem;">${car.mileage.toLocaleString('ru-RU')} км</span>
                        <button class="btn-edit-mileage" style="font-family: var(--font-pixel); font-size: 0.8rem; padding: 4px 8px; border: 3px solid var(--black); background: var(--white); cursor: pointer; text-transform: uppercase;">Правка пробега</button>
                    </div>

                    <div class="card-details" style="margin-top: 15px; font-size: 0.9rem; color: var(--text-light); line-height: 1.4;">
                        ${car.fullName ? `<p style="margin: 4px 0;"><strong>Владелец:</strong> ${car.fullName}</p>` : ''}
                        ${car.phone ? `<p style="margin: 4px 0;"><strong>Телефон:</strong> ${car.phone}</p>` : ''}
                        ${car.date ? `<p style="margin: 4px 0;"><strong>Дата записи:</strong> ${car.date.split('-').reverse().join('.')}</p>` : ''}
                        ${car.serviceType ? `<p style="margin: 4px 0;"><strong>Тип:</strong> ${{ routine: 'Плановое ТО', repair: 'Ремонт', diagnostics: 'Диагностика' }[car.serviceType] || car.serviceType}</p>` : ''}
                        ${car.notes ? `<p style="margin: 4px 0;"><strong>Заметки:</strong> ${car.notes}</p>` : ''}
                        ${getPhotoMeta(car)}
                    </div>

                    <div class="txt-xs-light-upper-mb-10" style="margin-top: 15px; font-weight: bold;">Статус:</div>
                    <div class="tags">
                        <span class="tag" style="background: ${car.status ? 'var(--accent)' : 'var(--white)'}; color: var(--black); border: 2px solid var(--black); padding: 2px 8px; font-family: var(--font-pixel); text-transform: uppercase; display: inline-block;">
                            ${car.status ? 'В порядке' : 'Требует внимания'}
                        </span>
                    </div>

                    <div class="card-footer" style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center; border-top: 3px dashed var(--black); padding-top: 15px;">
                        <label class="checkbox-label" style="font-family: var(--font-pixel); font-weight: bold; text-transform: uppercase; cursor: pointer;">
                            <input type="checkbox" class="status-checkbox" ${car.status ? 'checked' : ''} style="width: auto; margin-right: 10px; cursor: pointer;"> Выполнено
                        </label>
                        <button class="icon-btn btn-delete" title="Удалить" style="background: var(--white); border: 3px solid var(--black); padding: 5px; cursor: pointer;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-2 14H7L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                    </div>
                </div>
            </div>`;
        });

        html += addCardHtml;
        grid.innerHTML = html;

        attachPhotoFallbacks();
        // Назначаем обработчики
        attachEvents();
    }

    function attachEvents() {
        // Удаление
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.card');
                const id = parseInt(card.dataset.id, 10);
                if (confirm('Вы уверены, что хотите удалить этот автомобиль?')) {
                    cars = cars.filter(c => c.id !== id);
                    window.saveData(cars);
                    renderCars(searchInput ? searchInput.value : '');
                }
            });
        });

        // Редактирование пробега
        document.querySelectorAll('.btn-edit-mileage').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.card');
                const id = parseInt(card.dataset.id, 10);
                const idx = cars.findIndex(c => c.id === id);
                if (idx !== -1) {
                    const newMileageStr = prompt(`Введите новый пробег для ${window.formatTitle(cars[idx].brand)} ${window.formatTitle(cars[idx].model)}:`, cars[idx].mileage);
                    if (newMileageStr !== null) {
                        const newMileage = parseInt(newMileageStr.trim(), 10);
                        if (!isNaN(newMileage) && newMileage >= 0) {
                            cars[idx].mileage = newMileage;
                            window.saveData(cars);
                            renderCars(searchInput ? searchInput.value : '');
                        } else {
                            alert('Некорректный пробег!');
                        }
                    }
                }
            });
        });

        // Чекбокс статуса
        document.querySelectorAll('.status-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const card = e.target.closest('.card');
                const id = parseInt(card.dataset.id, 10);
                const idx = cars.findIndex(c => c.id === id);
                if (idx !== -1) {
                    cars[idx].status = e.target.checked;
                    window.saveData(cars);
                    renderCars(searchInput ? searchInput.value : '');
                }
            });
        });
    }

    // Слушатель на фильтр
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderCars(e.target.value);
        });
    }

    // Инициализация
    renderCars();
});
