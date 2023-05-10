/*********************  WEATHER API **********************/

window.addEventListener("DOMContentLoaded", weatherBalloon);

function weatherApi() {
    const weatherContainer = document.querySelector(".weather-info-container");
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let Key = "b6e7508916944709e333e076db123400";
        let weatherApiKey = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Key}`;
        console.log(weatherApiKey);
    });
}

function weatherBalloon(location) {
    const weatherDataContainer = document.querySelector(".weather-info-container");
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let Key = "b6e7508916944709e333e076db123400";
        let weatherApiKey = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Key}`;
        fetch(weatherApiKey)
        .then((resp) => {return resp.json()})
        .then((data) => {
            console.log(data, data.name, data.weather[0].main, );
            weatherDataContainer.innerHTML = `<p>${data.name}</p><p>${data.weather[0].main}</p>`;
        })
        .catch(Error);
    });
}