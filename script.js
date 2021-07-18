// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
}



// Event Listener Function on keypress
const searchInputBox = document.querySelector('.inputBox');
searchInputBox.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weatherBody').style.display = "block";
    }
});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather) {
    console.log(weather);

    let city = document.querySelector('.city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.querySelector('.temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.querySelector('.minmax');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.querySelector('.weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.querySelector('.date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);


    if (weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')";

    } else if (weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2633855/pexels-photo-2633855.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')";

    } else if (weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2633855/pexels-photo-2633855.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')";

    } else if (weatherType.textContent == 'Rain') {

        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')";

    } else if (weatherType.textContent == 'Snow') {

        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')";

    } else if (weatherType.textContent == 'Thunderstorm') {

        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/680940/pexels-photo-680940.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')";

    } else if (weatherType.textContent == 'Mist') {

        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')";

    } else if (weatherType.textContent == 'Sunny') {

        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')";

    }
}

// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} ${day}, ${year}`;
}