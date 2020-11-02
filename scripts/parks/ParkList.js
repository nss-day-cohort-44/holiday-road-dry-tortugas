import {getParks, useNationalParks} from "./ParkProvider.js"
import {Park}                       from "./ParkCard.js"
import { getWeather }               from "../weather/WeatherProvider.js" 

// declare vlat & vlon
let vlat  = "lat="
let vlon  = "lon="

const eventHub = document.querySelector(".container")
const parkContainer = document.querySelector(".parkCard")

eventHub.addEventListener("parkSelected", event => {
    const park = event.detail.parkName
    ParkInfo(park)
    console.log(park)
}) 

export const ParkInfo = (parkInformation) => {
    debugger
    getParks()
    .then(() => {
        const parkArray = useNationalParks()
        const filteredParkObject = parkArray.find(
            (parksObj => {
                if(parksObj.fullName === parkInformation) {
                // vlat                   += parksObj.latitude
                // vlon                   += parksObj.longitude
                // console.log(vlat)
                // console.log(vlon)
                getWeather(parksObj.latitude, parksObj.longitude)
                console.log(parksObj)
                    return true
                }
            })
        )
    render(filteredParkObject)
    
    console.log(filteredParkObject)
    })
}

const render = (park) => {
    let buildParkHTML = ""
        buildParkHTML += Park(park)
        parkContainer.innerHTML = buildParkHTML
}