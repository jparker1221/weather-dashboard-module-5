// blank array to store search history
var searchHist = [];
// blank variable to store city name
var cityName = "Winston-Salem";
// variable to get current date
var currentDay = dayjs().format('dddd, MMM D, YYYY, hh:mm a');
// openweathermap api key
var apiKey = "fb727f1a6ae3a38f400775ad30afa200";

// api call to openweathermap.org


var requestFiveDayForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;


// function to fetch current weather for selected city
function currentWeather(){
    var requestCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
    fetch(requestCurrentWeather)
        .then(function(response) {
        return response.json();
        })
        .then(function(data){
            document.getElementById('city-temp').textContent = `Current Temperature: ${data.main.temp}`
            console.log(data);
            weatherForecast()
        })
}


// function to fetch 5-day weather forecast for selected city
function weatherForecast(){

}


// function to store search history to local storage
var storeCity = function(){

}


// function to load search history from local storage
var loadCities = function(){

}

// event listeners


currentWeather()