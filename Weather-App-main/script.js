let lahoreTemperature = document.querySelector('.lahore-temp');
let lahoreImg = document.querySelector('.lahore-img');
let lahoreWind = document.querySelector('.lahore-wind');
let lahoreHumidity = document.querySelector('.lahore-humidity');
let lahoreWindDegree = document.querySelector('.lahore-wind_degree');

async function weatherDisplayerLahore() {
    let url1 = `https://api.weatherapi.com/v1/current.json?key=ea38e5e435ff426bbd260806233008&q=lahore&aqi=no`;
    try {
        let response = await fetch(url1);
        let data = await response.json();
        const {
            current: { temp_c, condition: { icon }, wind_kph, humidity, wind_degree }
        } = data;
        updateLahoreWeather(temp_c, icon, wind_kph, humidity, wind_degree);
    } catch (error) {
        console.log(error);
    }
}

function updateLahoreWeather(temp, picture, wind, humidity, windDegree) {
    lahoreTemperature.innerText = temp + '°';
    lahoreImg.src = picture;
    lahoreWind.innerText = wind;
    lahoreHumidity.innerText = humidity;
    lahoreWindDegree.innerText = windDegree;
}

weatherDisplayerLahore();

let Temperature = document.querySelector('.temp');
let Img = document.querySelector('.img');
let Wind = document.querySelector('.wind');
let Humidity = document.querySelector('.humidity');
let WindDegree = document.querySelector('.wind_degree');
let cityName = document.querySelector('.city-name');
let blackBox = document.querySelector('.black-box');
let search = document.querySelector('.search');
let button = document.querySelector('button');

let city = 'lahore';

async function weatherDisplay(city) {
    let url = `https://api.weatherapi.com/v1/current.json?key=ea38e5e435ff426bbd260806233008&q=${city}&aqi=no`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        const {
            current: { temp_c, wind_kph, humidity, wind_degree, condition: { icon } },
            location: { name }
        } = data;
        console.log(name);
        updateWeather(temp_c, wind_kph, humidity, wind_degree, icon, name);
    } catch (e) {
        console.log(e);
    }
}

weatherDisplay(city);

function updateWeather(temp, wind, humidity, wind_degree, icon, name) {
    Temperature.innerText = temp + '°';
    Img.src = icon;
    Wind.innerText = wind;
    Humidity.innerText = humidity;
    WindDegree.innerText = wind_degree;
    cityName.innerText = name;
}

button.addEventListener('click', () => {
    city = search.value;
    weatherDisplay(city);
});
