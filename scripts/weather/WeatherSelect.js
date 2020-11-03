import { getWeather, useWeather } from "./WeatherProvider.js"
import { getParks, useNationalParks }               from "../parks/ParkProvider.js"

const contentTarget = document.querySelector(".weatherCard")
const eventHub      = document.querySelector(".container")


// render function
const render = (weatherArray) => {
    const weatherDetail = []
    weatherArray.map( element => {
        weatherDetail.push(element.weather[0].description)
    }) 
    // .map return new array to pull out .description
    // for loop new array hTMLRep = "" then send to DOM
    contentTarget.innerHTML =`
        <h3>5-Day Weather Forcast</h3>
        <div><b>Day 1: </b>${weatherDetail[0]}</div>
        <div><b>Day 2: </b>${weatherDetail[1]}</div>
        <div><b>Day 3: </b>${weatherDetail[2]}</div>
        <div><b>Day 4: </b>${weatherDetail[3]}</div>
        <div><b>Day 5: </b>${weatherDetail[4]}</div>
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