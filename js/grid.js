document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы грида
    const gridItems = document.querySelectorAll('.service-card');
    // Индикатор скролла для отладки
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // Устанавливаем значения скролла для каждой пары элементов, если они не указаны в атрибутах
    const setDefaultTriggerValues = () => {
        // Первая строка появляется при скролле 300px
        if (!gridItems[0].getAttribute('data-scroll-trigger')) {
            gridItems[0].setAttribute('data-scroll-trigger', '1000');
            gridItems[1].setAttribute('data-scroll-trigger', '1000');
        }
        
        // Вторая строка появляется при скролле 600px
        if (!gridItems[2].getAttribute('data-scroll-trigger')) {
            gridItems[2].setAttribute('data-scroll-trigger', '1300');
            gridItems[3].setAttribute('data-scroll-trigger', '1300');
        }
        
        // Третья строка появляется при скролле 900px
        if (!gridItems[4].getAttribute('data-scroll-trigger')) {
            gridItems[4].setAttribute('data-scroll-trigger', '1600');
            gridItems[5].setAttribute('data-scroll-trigger', '1600');
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
});