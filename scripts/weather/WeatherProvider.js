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
let vlat = "lat=33.441792"
let vlon = "lon=94.037689"


// needs refactor to pass lat-long in response to parkSelected event.
// do we want a new function in the parks data provider that returns lat-long for a given park that is called from before or inside getWeather?
// fetch data and populate weatherArray
export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?${vlat}&${vlon}&exclude=current,minutely,hourly,alerts&appid=${keys.weatherKey}`)
    .then(response => response.json())
    .then(
        parsedWeather => {
            weatherArray = parsedWeather.daily
            // console.log(weatherArray)
        })
}


// https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=current,minutely,hourly,alerts&appid=${keys.weatherKey}