// import nps API key from Settings.js
import { keys } from '../Settings.js'

// init var for weather data
let weatherArray = [];

// exp. function to return copy of weatherArray
export const useWeather = () => {
    // console.log(weatherArray)
    return weatherArray.slice()
}

// init hard-coded vars for testing
// let vlat = "lat=33.441792"
// let vlon = "lon=94.037689"

// fetch data and populate weatherArray
export const getWeather = (vlat, vlon) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${vlat}&lon=${vlon}&units=imperial&exclude=current,minutely,hourly,alerts&appid=${keys.weatherKey}`)
    .then(response => response.json())
    .then(
        parsedWeather => {
            weatherArray = parsedWeather.daily
            // console.log(weatherArray)
        })
}