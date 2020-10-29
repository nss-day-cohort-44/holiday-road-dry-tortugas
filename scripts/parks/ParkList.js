import {getParks, useNationalParks} from "./ParkProvider.js"
import {Park} from "./ParkCard.js"

const eventHub = document.querySelector(".container")
const parkContainer = document.querySelector(".parkCard")

eventHub.addEventListener("parkSelected", event => {
    const park = event.detail.parkName
    ParkInfo(park)
    console.log(park)
}) 

export const ParkInfo = (parkInformation) => {
    getParks()
    .then(() => {
        const parkArray = useNationalParks()
        const filteredParkObject = parkArray.find(
            (parksObj => {
                if(parksObj.fullName === parkInformation) {
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