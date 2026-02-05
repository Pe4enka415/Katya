// Данные для приложения
const scamsData = [
    {
        id: 1,
        title: "Ваш родственник в беде",
        icon: "📞",
        description: "Мошенник представляется родственником или другом, который попал в беду (арестован, попал в аварию) и срочно нуждается в деньгах.",
        details: "Чаще всего мошенники используют психологическое давление и просят сохранить ситуацию в тайне. Всегда перезванивайте родным на известные номера.",
        phoneNumbers: ["+7-900-XXX-XX-XX", "+7-915-XXX-XX-XX"]
    },
    {
        id: 2,
        title: "Сотрудник банка",
        icon: "🏦",
        description: "Злоумышленник представляется сотрудником банка и сообщает о проблемах с вашим счетом, предлагая 'защитить' деньги.",
        details: "Настоящие сотрудники банка никогда не просят переводить деньги на 'безопасные счета' и не спрашивают данные карт по телефону.",
        phoneNumbers: ["+7-495-XXX-XX-XX"]
    },
    {
        id: 3,
        title: "Вы выиграли приз",
        icon: "🎁",
        description: "Вам сообщают о крупном выигрыше, но для его получения нужно заплатить налог или сбор.",
        details: "Легальные лотереи не требуют предварительной оплаты для получения выигрыша. Все налоги удерживаются автоматически.",
        phoneNumbers: ["+7-800-XXX-XX-XX"]
    },
    {
        id: 4,
        title: "Врач из поликлиники",
        icon: "⚕️",
        description: "Мошенник представляется врачом и предлагает купить 'чудо-лекарство' по специальной цене.",
        details: "Государственные поликлиники не продают лекарства по телефону. Все медицинские препараты приобретайте только в аптеках.",
        phoneNumbers: ["+7-499-XXX-XX-XX"]
    },
    {
        id: 5,
        title: "Сотрудник полиции",
        icon: "👮",
        description: "Вам звонят и представляются сотрудниками правоохранительных органов.",
        details: "Сотрудники полиции не решают вопросы по телефону и не просят переводить деньги. Все официальные вызовы происходят лично.",
        phoneNumbers: ["+7-495-XXX-XX-XX", "+7-499-XXX-XX-XX"]
    },
    {
        id: 6,
        title: "Техническая поддержка",
        icon: "📱",
        description: "Мошенник представляется сотрудником технической поддержки и просит доступ к вашему компьютеру.",
        details: "Никогда не предоставляйте удаленный доступ к компьютеру незнакомцам. Настоящие специалисты не звонят первыми.",
        phoneNumbers: ["+7-800-XXX-XX-XX", "+7-495-XXX-XX-XX"]
    }
];

const protectionTips = [
    "Никогда не сообщайте незнакомым людям данные ваших банковских карт, пароли, паспортные данные",
    "Не переводите деньги незнакомым людям, даже если они представляются сотрудниками банка или полиции",
    "Если звонящий представляется вашим родственником, попросите его назвать имя и отчество, а затем перезвоните ему на известный вам номер",
    "Помните: настоящие сотрудники банка или государственных учреждений никогда не просят перевести деньги по телефону",
    "Не торопитесь принимать решения. Мошенники часто создают ощущение срочности, чтобы вы не успели всё обдумать",
    "Установите на телефон приложение для определения номера (например, 'Определитель номера')",
    "Обсудите с родными правила безопасности и договоритесь о кодовом слове для экстренных ситуаций",
    "Регулярно обновляйте антивирусное программное обеспечение на телефоне и компьютере"
];

const contactsData = [
    {
        title: "Экстренная помощь",
        description: "Если вы стали жертвой мошенников",
        phone: "112",
        note: "Единый номер экстренных служб",
        icon: "fas fa-ambulance"
    },
    {
        title: "Банк России",
        description: "Горячая линия по вопросам финансового мошенничества",
        phone: "8-800-250-40-72",
        note: "Бесплатно по России",
        icon: "fas fa-university"
    },
    {
        title: "МВД России",
        description: "Прием обращений о преступлениях",
        phone: "8-800-222-74-47",
        note: "Бесплатно по России",
        icon: "fas fa-shield-alt"
    },
    {
        title: "Роскомнадзор",
        description: "Жалобы на телефонных мошенников",
        phone: "8-800-200-08-00",
        note: "Бесплатно по России",
        icon: "fas fa-phone-slash"
    }
];

const quizQuestions = [
    {
        question: "Что делать, если вам звонят и представляются сотрудником банка, просят перевести деньги на 'безопасный счет'?",
        options: [
            "Выполнить просьбу, так как банк всегда прав",
            "Повесить трубку и перезвонить в банк по официальному номеру с карты",
            "Сообщить данные карты для 'проверки'",
            "Ничего не делать, это точно не мошенники"
        ],
        correct: 1
    },
    {
        question: "Как проверить, действительно ли вам звонит родственник, который просит деньги?",
        options: [
            "Перевести деньги сразу, чтобы не терять время",
            "Попросить назвать кодовое слово (о котором договорились заранее)",
            "Спросить имя и перезвонить на известный номер",
            "Варианты 2 и 3 верны"
        ],
        correct: 3
    },
    {
        question: "Что НИКОГДА не попросят у вас настоящие сотрудники банка по телефону?",
        options: [
            "Номер карты и CVV код",
            "Прийти в отделение банка",
            "Обновить данные в мобильном приложении",
            "Проверить баланс счета"
        ],
        correct: 0
    }
];

// DOM элементы
let currentQuestion = 0;
let score = 0;
let completedTips = [];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация статистики
    initStatistics();
    
    // Загрузка скамов
    loadScams();
    
    // Загрузка советов по защите
    loadProtectionTips();
    
    // Загрузка контактов
    loadContacts();
    
    // Инициализация квиза
    loadQuiz();
    
    // Настройка обработчиков событий
    setupEventListeners();
    
    // Восстановление темы из localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }
});

// Инициализация статистики с анимацией
function initStatistics() {
    const victims = document.getElementById('victimsCount');
    const money = document.getElementById('moneyLost');
    const scams = document.getElementById('scamsCount');
    
    animateCounter(victims, 0, 50000, 2000);
    animateCounter(money, 0, 10000000, 2500);
    animateCounter(scams, 0, scamsData.length, 1000);
}

// Анимация счетчика
function animateCounter(element, start, end, duration) {
    let startTime = null;
    
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        
        element.textContent = current.toLocaleString('ru-RU');
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }
    
    window.requestAnimationFrame(step);
}

// Загрузка карточек мошенничества
function loadScams() {
    const container = document.getElementById('scamsContainer');
    
    scamsData.forEach(scam => {
        const card = document.createElement('div');
        card.className = 'scam-card';
        card.innerHTML = `
            <div class="scam-icon">${scam.icon}</div>
            <div class="scam-content">
                <h3 class="scam-title">${scam.title}</h3>
                <p>${scam.description}</p>
                <div class="scam-details">
                    <p><strong>Подробности:</strong> ${scam.details}</p>
                    <p><strong>Примеры номеров:</strong> ${scam.phoneNumbers.join(', ')}</p>
                </div>
            </div>
        `;
        
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
        
        container.appendChild(card);
    });
}

// Загрузка советов по защите
function loadProtectionTips() {
    const list = document.getElementById('protectionList');
    
    protectionTips.forEach((tip, index) => {
        const li = document.createElement('li');
        li.textContent = tip;
        li.dataset.index = index;
        
        li.addEventListener('click', function() {
            this.classList.toggle('completed');
            const tipIndex = parseInt(this.dataset.index);
            
            if (this.classList.contains('completed')) {
                if (!completedTips.includes(tipIndex)) {
                    completedTips.push(tipIndex);
                }
            } else {
                const idx = completedTips.indexOf(tipIndex);
                if (idx > -1) {
                    completedTips.splice(idx, 1);
                }
            }
            
            updateProgress();
        });
        
        list.appendChild(li);
    });
}

// Обновление прогресса изучения советов
function updateProgress() {
    const progress = Math.round((completedTips.length / protectionTips.length) * 100);
    const quizSection = document.querySelector('.quiz-section h3');
    quizSection.textContent = `Проверьте свои знания (изучено: ${progress}%)`;
}

// Загрузка контактов
function loadContacts() {
    const container = document.getElementById('contactsContainer');
    
    contactsData.forEach(contact => {
        const card = document.createElement('div');
        card.className = 'contact-card';
        card.innerHTML = `
            <h3><i class="${contact.icon}"></i> ${contact.title}</h3>
            <p>${contact.description}</p>
            <div class="phone-number">
                <a href="tel:${contact.phone.replace(/-/g, '')}">${contact.phone}</a>
            </div>
            <p>${contact.note}</p>
        `;
        container.appendChild(card);
    });
}

// Загрузка квиза
function loadQuiz() {
    if (currentQuestion >= quizQuestions.length) {
        currentQuestion = 0;
        score = 0;
    }
    
    const question = quizQuestions[currentQuestion];
    const questionElement = document.getElementById('quizQuestion');
    const optionsElement = document.getElementById('quizOptions');
    const resultElement = document.getElementById('quizResult');
    
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    resultElement.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = `${index + 1}. ${option}`;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', function() {
            const selected = document.querySelector('.quiz-option.selected');
            if (selected) selected.classList.remove('selected');
            this.classList.add('selected');
        });
        
        optionsElement.appendChild(optionElement);
    });
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Переключение темы
    document.getElementById('themeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const icon = this.querySelector('i');
        
        if (document.body.classList.contains('dark-theme')) {
            icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        } else {
            icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Кнопка экстренного вызова
    document.getElementById('emergencyBtn').addEventListener('click', function() {
        if (confirm('Вы действительно хотите позвонить в экстренную службу 112?')) {
            alert('Имитация вызова 112. В реальной ситуации произойдет автоматический дозвон.');
            // window.location.href = 'tel:112'; // Раскомментировать для реального вызова
        }
    });
    
    // Кнопка следующего вопроса
    document.getElementById('nextQuestion').addEventListener('click', function() {
        const selectedOption = document.querySelector('.quiz-option.selected');
        const resultElement = document.getElementById('quizResult');
        
        if (!selectedOption) {
            resultElement.innerHTML = '<span style="color: var(--warning-color)">Пожалуйста, выберите ответ!</span>';
            return;
        }
        
        const selectedIndex = parseInt(selectedOption.dataset.index);
        const question = quizQuestions[currentQuestion];
        
        // Показ правильного ответа
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((opt, idx) => {
            if (idx === question.correct) {
                opt.classList.add('correct');
            } else if (idx === selectedIndex && idx !== question.correct) {
                opt.classList.add('wrong');
            }
            opt.style.pointerEvents = 'none';
        });
        
        // Подсчет очков
        if (selectedIndex === question.correct) {
            score++;
            resultElement.innerHTML = '<span style="color: var(--success-color)">✓ Правильно!</span>';
        } else {
            resultElement.innerHTML = '<span style="color: var(--danger-color)">✗ Неверно. Правильный ответ выделен зеленым.</span>';
        }
        
        // Переход к следующему вопросу через 2 секунды
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < quizQuestions.length) {
                loadQuiz();
            } else {
                showQuizResults();
            }
        }, 2000);
    });
    
    // Кнопка сообщения о мошенничестве
    document.getElementById('reportScam').addEventListener('click', function() {
        document.getElementById('reportModal').style.display = 'block';
    });
    
    // Закрытие модального окна
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('reportModal').style.display = 'none';
    });
    
    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('reportModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Форма сообщения о мошенничестве
    document.getElementById('reportForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const scamType = document.getElementById('scamType').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const description = document.getElementById('description').value;
        
        // Имитация отправки данных
        alert(`Спасибо за ваше сообщение!\