// Этот файл может быть пустым, так как в оригинальном коде не было JavaScript
// Или можно добавить базовые функции, если они понадобятся

console.log('Сайт "Защита от мобильного мошенничества" загружен');

// Добавляем обработчик для карточек мошенничества для улучшения UX
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем анимацию при клике на карточки
    const scamCards = document.querySelectorAll('.scam-card');
    
    scamCards.forEach(card => {
        card.addEventListener('click', function() {
            // Добавляем/убираем класс для визуального выделения
            this.classList.toggle('active');
            
            // Если нужно добавить дополнительную информацию при клике
            // можно добавить здесь
        });
    });
    
    // Добавляем возможность выделить пройденные советы по защите
    const protectionTips = document.querySelectorAll('.protection-list li');
    
    protectionTips.forEach(tip => {
        tip.addEventListener('click', function() {
            this.classList.toggle('completed');
        });
    });
    
    // Делаем номера телефонов кликабельными
    const phoneNumbers = document.querySelectorAll('.phone-number');
    
    phoneNumbers.forEach(number => {
        // Очищаем номер от дефисов для корректного звонка
        const cleanNumber = number.textContent.replace(/[-\s]/g, '');
        number.innerHTML = `<a href="tel:${cleanNumber}" style="color: inherit; text-decoration: none;">${number.textContent}</a>`;
    });
    
    // Добавляем текущий год в футер
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-text p');
    if (footerText) {
        footerText.innerHTML = footerText.innerHTML.replace('2023', currentYear);
    }
});