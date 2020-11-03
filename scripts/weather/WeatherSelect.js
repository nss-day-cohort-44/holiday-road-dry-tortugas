import { getWeather, useWeather } from "./WeatherProvider.js"
import { getParks, useNationalParks }               from "../parks/ParkProvider.js"

const contentTarget = document.querySelector(".weatherContainer")
const eventHub      = document.querySelector(".container")


// render function
const render = (weatherArray) => {
    const weatherDetail = []
    weatherArray.map( element => {
        weatherDetail.push(element.weather[0].description)
    }) 
    // .map return new array to pull out .description
    // for loop new array hTMLRep = "" then send to DOM
    contentTarget.innerHTML += `
        <div>${} </div>
    `
}

//  event listener below.
eventHub.addEventListener("parkSelected", event => {
    const parkSelected = event.detail.parkName
    getParks().then(park => {
        const thisPark = useNationalParks().find(park => park.fullName === parkSelected)
        getWeather(thisPark.latitude, thisPark.longitude)
        .then(weather => {
            weather = useWeather().slice(0,5)
            render(weather)
        })
    })    
}) 

// eventHub.addEventListener('selectedPark', event => {
//     const selectedPark = event.detail.selectedPark
//     getParks().then(park => {
//         const thisPark = useParks().find(park => park.fullName === selectedPark)
//         getWeather(thisPark.latitude, thisPark.longitude)
//         .then(weather => {
//             weather = useWeather().slice(0,5)
//             weatherDetail(weather)
//         })
//     })
//     })