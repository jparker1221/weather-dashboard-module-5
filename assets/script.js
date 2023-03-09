//query selector for search bar
var searchBar = document.querySelector("city-input");

var userSearch = $(searchBar).val();

// console.log("user search", userSearch);

// blank array to store search history
var searchHist = [];
// blank variable to store city name
// var cityName = "Charlotte";

// var apiUrl = `${weatherApiRootUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`

// variable to get current date
var currentDay = dayjs().format('dddd, MMM D, YYYY,');
// openweathermap api key
var apiKey = "fb727f1a6ae3a38f400775ad30afa200";

// api calls to openweathermap.org
// var requestCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
// var requestFiveDayForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;


// function to fetch current weather for selected city
function currentWeather(userSearch){
    // console.log("user search", userSearch);
    var requestCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&appid=${apiKey}&units=imperial`;
    fetch(requestCurrentWeather)
        .then(function(response) {
        return response.json();
        })
        .then(function(data){
            document.getElementById('city-temp').textContent = `Temp: ${data.main.temp}`
            document.getElementById('city-wind').textContent = `Wind: ${data.wind.speed}`
            document.getElementById('city-humidity').textContent = `Humidity: ${data.main.humidity}`
            console.log(data);
            weatherForecast()
        })
}

// function to fetch 5-day weather forecast for selected city
function weatherForecast(userSearch){
    var requestFiveDayForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${userSearch}&appid=${apiKey}&units=imperial`;
    fetch(requestFiveDayForecast)
        .then(function(response) {
        return response.json();
        })
        .then(function(data){
            console.log(data)
            // data.list for loop
            // weatherArray = data.list
            document.getElementById('city-temp').textContent = `Temp: ${data.main.temp}`
            document.getElementById('city-wind').textContent = `Wind: ${data.wind.speed}`
            document.getElementById('city-humidity').textContent = `Humidity: ${data.main.humidity}`
        })
}


// function to store search history to local storage
function storeCities(city){
    localStorage.setItem("city", city)
}


// function to load search history from local storage
function loadCities(city){
    localStorage.getItem("city", city)
}

// event listeners
var submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function(e){
    e.preventDefault()
    var searchBar = $("#city-input")
    console.log(searchBar)
    var userSearch = searchBar[0].value;
    console.log(userSearch)
    currentWeather(userSearch)
    weatherForecast(userSearch);
});

