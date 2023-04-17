define(function (require) {
    var weather = require("weather.js");
});

console.log(weather.getWeatherBySiteName("Vaughan", "ON", function(error, weatherData) {}))