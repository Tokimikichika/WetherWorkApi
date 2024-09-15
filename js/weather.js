//по идее я должен добавлять в .env
const API_KEY = '7d2b0524a9788adbd14483694c7ae820';

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Ошибка при получении погоды:', error);
    }
}

function displayWeather(data) {
    if (data && data.current) {
        document.getElementById('temperature').textContent = `${data.current.temperature}°C`;
        document.getElementById('description').textContent = data.current.weather_descriptions[0];
    }
}

function setInitialCity() {
    const city = localStorage.getItem('city') || 'Краснодар';
    document.getElementById('city').value = city;
    getWeather(city);
}

document.getElementById('city').addEventListener('change', function() {
    const city = this.value;
    localStorage.setItem('city', city);
    getWeather(city);
});

setInitialCity();
