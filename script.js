// @ts-nocheck
const country = document.getElementById('conntry')
const celsius = document.getElementById('celsius')
const fahrenheit = document.getElementById('fahrenheit')
const humidity = document.getElementById('humidity')
const cloud = document.getElementById('cloud')
const windspeed = document.getElementById('windspeed')
const icon = document.querySelector(".condition > #icon")
const comment = document.querySelector('.condition > span')
const search = document.getElementById("weather-find")
const submit = document.querySelector('.search button')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd614e06e76msh7a734689d359a7fp1d2d61jsn6e0f6abb829f',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

let weather = {
    fetchWeather: function (city) {
        fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city + '', options)
            .then(data => data.json())
            .then(data => {
                country.textContent = data.location.name;
                celsius.textContent = data.current.temp_c
                fahrenheit.textContent = data.current.temp_f
                icon.src = data.current.condition.icon
                comment.textContent = data.current.condition.text
                humidity.textContent = data.current.humidity
                windspeed.textContent = data.current.wind_mph
                cloud.textContent = data.current.cloud
            })
            .catch(err => console.error(err));
    },
    search: function () {
        this.fetchWeather(search.value);
    }
}

submit.addEventListener('click', function () {
    weather.search();
})
weather.fetchWeather("Ha Noi")