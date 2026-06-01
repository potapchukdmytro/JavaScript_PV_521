async function getNewCatImage() {
    const url = "https://api.thecatapi.com/v1/images/search";
    const response = await fetch(url);
    const data = await response.json();
    const imgUrl = data[0].url;

    const img = document.getElementById("catImg");
    img.src = imgUrl;
}

const directions = [
    { min: 0, max: 0, name: "Північний" },
    { min: 90, max: 90, name: "Східний" },
    { min: 180, max: 180, name: "Південний" },
    { min: 270, max: 270, name: "Західний" },
    { min: 1, max: 89, name: "Північно-Східний" },
    { min: 91, max: 179, name: "Південно-Східний" },
    { min: 181, max: 269, name: "Південно-Західний" },
    { min: 271, max: 359, name: "Північно-Західний" }
];

function getWindDirection(deg) {
    console.log(deg);

    for (const dir of directions) {
        if (deg >= dir.min && deg <= dir.max) {
            return dir.name;
        }
    }
}

async function fetchWeather() {
    const key = "bbdf358dd1b3ee7925ab2c9bca2e61f6";
    const city = "London";
    const lang = "uk";
    const units = "metric";
    // ? - говорить що далі будуть query параметри
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&q=${city}&lang=${lang}&units=${units}`;
    const response = await fetch(url);
    const data = await response.json();

    const div = document.getElementById("weather");
    div.innerHTML = `
            <h1>Погода</h1>
            <div style="text-align: start;">
                <h3>Температура: ${data.main.temp}°C</h3>
                <h3>Тиск: ${data.main.pressure} гПа</h3>
                <h3>Швидкість вітру: ${data.wind.speed} м/с</h3>
                <h3>Напрям вітру: ${getWindDirection(data.wind.deg)}</h3>
                <h3>Схід: 06:00</h3>
                <h3>Захід: 20:00</h3>
            </div>
            `;
}

fetchWeather();
