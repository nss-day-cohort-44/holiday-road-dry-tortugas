import { getAttractions, useAttractions } from "./AttractionProvider.js"



const attractionSelector = document.querySelector(".attractionDropdown")
const eventHub = document.querySelector(".container")

export const attractionSelect = () => {
    getAttractions()
    .then(() => {
        const attractionArray = useAttractions()
        render(attractionArray)
    })
}

const render = (attractions) => {
    attractionSelector.innerHTML = `
    <option value="0">Please select an attraction..</option>
    ${attractions.map(
        attractionsObj => {
            return `<option value="${attractionsObj.name}">${attractionsObj.name}</option>`
        }
    ).join("")
        }
    `
}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "bizarreSelect") {
        const attractionSelectedEvent = new CustomEvent("attractionSelected", {
            detail: {
                attractionThatWasChosen: changeEvent.target.value
            }
        })
        eventHub.dispatchEvent(attractionSelectedEvent)
    }
})