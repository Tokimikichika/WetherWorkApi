//по идее я должен добавлять в .env
const API_KEY = '7d2b0524a9788adbd14483694c7ae820';

// Функция для получения погоды
async function getWeather(city) {
    try {
        const response = await fetch(`https://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Ошибка при получении погоды:', error);
    }
}

// Функция для отображения погоды на странице
function displayWeather(data) {
    if (data && data.current) {
        document.getElementById('temperature').textContent = `${data.current.temperature}°C`;
        document.getElementById('description').textContent = data.current.weather_descriptions[0];
    }
}

// Установка начального города
function setInitialCity() {
    const city = localStorage.getItem('city') || 'Краснодар';
    document.getElementById('city').value = city;
    getWeather(city);
}

// Событие изменения города
document.getElementById('city').addEventListener('change', function() {
    const city = this.value;
    localStorage.setItem('city', city);
    getWeather(city);
});

// Инициализация виджета погоды
setInitialCity();
