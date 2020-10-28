


import {getParks, useNationalParks} from "./ParkProvider.js"

const parksSelector = document.querySelector(".parkDropdown")
const eventHub = document.querySelector(".container")


export const parkSelect = () => {
    getParks()
    .then(() => {
        const parksArray = useNationalParks()

        render(parksArray)
    })
}

const render = parks => {
    parksSelector.innerHTML = `
        <option value="0">Please select a park...</option>
        ${ parks.map (
            parksObj => {
                return `<option value="${parksObj.fullName}">${parksObj.fullName}</option>`
            } 
    ).join("")
        }
        
    `
}
    //Sdebugger
eventHub.addEventListener("change", (changeEvent)=>{
    if (changeEvent.target.id === "parkSelect") {

        const parkSelectedEvent = new CustomEvent("parkSelected", {
            detail: {
                parkName: parseInt(changeEvent.target.value)
            }
        })
    eventHub.dispatchEvent(parkSelectedEvent)
    }
})