import { getWeather, useWeather } from "./WeatherProvider.js"

const contentTarget = document.querySelector(".weatherContainer")
const eventHub      = document.querySelector(".container")


export const weatherInfo = () => {
    
    getWeather()
        .then(() => {
            // init var to hold weather array held inside daily array
            let weatherInnerArray = []

            // currently parsedWeather.daily | we may need to change if we need the dt property
            const weatherOuterArray = useWeather()
            
            // iterate data array and push weather array to weatherInnerArray
            weatherOuterArray.forEach(element => {
            
                // add for loop to grab first 5 days - check dt property in data array for order?
                weatherInnerArray.push(element.weather[0])
            })
            // iterate weather array and call render on each loop passing element as argument to render
            weatherInnerArray.forEach(elementObj => {
                // console.log(element)
                render(elementObj)
            })
            // console.log(weatherInnerArray)
        })
}

// render function
// needs HTML fix-up, this is proof on page only
const render = elementObj => {
    contentTarget.innerHTML += `
        <div>${elementObj.description} </div>
    `
}

//  event listener below.
eventHub.addEventListener("parkSelected", event => {
    const park = event.detail.parkName
    
    // invoke weather info - currently no params but we need to pass lat-long so weather is specific to the selected park
    weatherInfo()
    
}) 