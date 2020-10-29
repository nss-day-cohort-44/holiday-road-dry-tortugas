import {getParks, useNationalParks} from "./ParkProvider.js"
import {Park} from "./ParkCard.js"

const eventHub = document.querySelector(".container")
const parkContainer = document.querySelector(".parkCard")

eventHub.addEventListener("parkSelected", event => {
    const park = event.detail.parkName
    Park(park)
}) 

export const ParkInfo = (parkInformation) => {
    getParks()
    .then(() => {
        const parkArray = useNationalParks()
        const filteredParkObject = parkArray.find(
            (parkObj => {
                if(parkObj.fullName === park) {
                    return true
                }
            })
        )
    render(filteredParkObject)
    })
}

const render = (park) => {
    let buildParkHTML = ""
        buildParkHTML += parkHTML(park)
        parkContainer.innerHTML = buildParkHTML
}