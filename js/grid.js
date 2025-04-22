document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы грида
    const gridItems = document.querySelectorAll('.service-card');
    // Индикатор скролла для отладки
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // Устанавливаем значения скролла для каждой пары элементов, если они не указаны в атрибутах
    const setDefaultTriggerValues = () => {
        // Первая строка появляется при скролле 300px
        if (!gridItems[0].getAttribute('data-scroll-trigger')) {
            gridItems[0].setAttribute('data-scroll-trigger', '300');
            gridItems[1].setAttribute('data-scroll-trigger', '300');
        }
        
        // Вторая строка появляется при скролле 600px
        if (!gridItems[2].getAttribute('data-scroll-trigger')) {
            gridItems[2].setAttribute('data-scroll-trigger', '600');
            gridItems[3].setAttribute('data-scroll-trigger', '600');
        }
        
        // Третья строка появляется при скролле 900px
        if (!gridItems[4].getAttribute('data-scroll-trigger')) {
            gridItems[4].setAttribute('data-scroll-trigger', '900');
            gridItems[5].setAttribute('data-scroll-trigger', '900');
        }
    };
    
    // Вызываем функцию установки значений
    setDefaultTriggerValues();
    
    // Функция для обработки скролла
    function handleScroll() {
        // Получаем текущее значение скролла
        const scrollPosition = window.scrollY || window.pageYOffset;
        
        // Обновляем индикатор для отладки
        scrollIndicator.textContent = `Scroll: ${scrollPosition}px`;
        
        // Проверяем каждый элемент
        gridItems.forEach(item => {
            const triggerValue = parseInt(item.getAttribute('data-scroll-trigger'));
            
            // Если скролл превысил пороговое значение, показываем элемент
            if (scrollPosition >= triggerValue) {
                item.classList.add('visible');
            } else {
                // Опционально: скрываем элемент снова, если скролл меньше порогового значения
                // item.classList.remove('visible');
            }
        });
    }
    
    // Вызываем функцию скролла изначально (для элементов, видимых при загрузке)
    handleScroll();
    
    // Добавляем обработчик события скролла
    window.addEventListener('scroll', handleScroll);
    
    // Создаем кнопки для ручной настройки триггеров (для отладки)
    function createDebugControls() {
        const debugPanel = document.createElement('div');
        debugPanel.style.position = 'fixed';
        debugPanel.style.bottom = '10px';
        debugPanel.style.right = '10px';
        debugPanel.style.background = 'rgba(0,0,0,0.7)';
        debugPanel.style.padding = '10px';
        debugPanel.style.color = 'white';
        debugPanel.style.zIndex = '1000';
        
        // Добавляем текстовое поле для ввода значений
        const input = document.createElement('input');
        input.type = 'number';
        input.value = '300';
        input.style.width = '100px';
        input.style.marginRight = '10px';
        debugPanel.appendChild(input);
        
        // Создаем кнопки для каждой строки
        for (let i = 0; i < 3; i++) {
            const btn = document.createElement('button');
            btn.textContent = `Строка ${i+1}`;
            btn.style.marginRight = '5px';
            btn.addEventListener('click', function() {
                const value = input.value;
                gridItems[i*2].setAttribute('data-scroll-trigger', value);
                gridItems[i*2+1].setAttribute('data-scroll-trigger', value);
                console.log(`Установлен триггер ${value}px для строки ${i+1}`);
            });
            debugPanel.appendChild(btn);
        }
        
        document.body.appendChild(debugPanel);
    }
    
    // Раскомментируйте для включения панели отладки
    // createDebugControls();
});