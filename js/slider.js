// Функция для обновления фонового изображения
function updateBackground() {
    const now = new Date();
    const hour = now.getHours();
    let backgroundUrl;

    if (hour >= 0 && hour < 6) {
        backgroundUrl = 'images/01.jpg';
    } else if (hour >= 6 && hour < 12) {
        backgroundUrl = 'images/02.jpg';
    } else if (hour >= 12 && hour < 18) {
        backgroundUrl = 'images/03.jpg';
    } else {
        backgroundUrl = 'images/04.jpg';
    }

    document.body.style.backgroundImage = `url(${backgroundUrl})`;
}

updateBackground();
setInterval(updateBackground, 3600000); 
