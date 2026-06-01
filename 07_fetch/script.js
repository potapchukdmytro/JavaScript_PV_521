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

function getTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    let hours = date.getHours().toString();;
    let minutes = date.getMinutes().toString();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes}`;
}

async function fetchWeather() {
    const cityInput = document.getElementById("cityInput").value;

    const key = "bbdf358dd1b3ee7925ab2c9bca2e61f6";
    const city = cityInput || "London";
    const lang = "uk";
    const units = "metric";
    // ? - говорить що далі будуть query параметри
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&q=${city}&lang=${lang}&units=${units}`;
    const response = await fetch(url);
    const data = await response.json();

    const urlGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=bbdf358dd1b3ee7925ab2c9bca2e61f6&limit=1`;
    const responseGeo = await fetch(urlGeo);
    const dataGeo = await responseGeo.json();

    const div = document.getElementById("weather");
    div.innerHTML = `
            <h1>Погода у ${dataGeo[0].local_names.uk}</h1>
            <img alt="icon" src="https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png" height="50px">
            <div style="text-align: start;">
                <h3>Температура: ${data.main.temp}°C</h3>
                <h3>Тиск: ${data.main.pressure} гПа</h3>
                <h3>Швидкість вітру: ${data.wind.speed} м/с</h3>
                <h3>Напрям вітру: ${getWindDirection(data.wind.deg)}</h3>
                <h3>Схід: ${getTime(data.sys.sunrise)}</h3>
                <h3>Захід: ${getTime(data.sys.sunset)}</h3>
            </div>
            `;
}

fetchWeather();
