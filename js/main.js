// Функция для обновления времени
function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString('ru-RU', {
        weekday: 'long', day: 'numeric', month: 'long'
    });

    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;

    // Обновление каждые секунду
    setTimeout(updateTime, 1000);
}

// Инициализация приложения
window.onload = function() {
    updateTime();
};
