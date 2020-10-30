import { useAttractions } from "./AttractionProvider.js"


const eventHub = document.querySelector(".container")

eventHub.addEventListener("attractionButtonClicked", (eventObject) => {
    const attractionDetail = useAttractions().find((attractionObject) => {
        return attractionObject.id === parseInt(eventObject.detail.attractionId)
    })
    attractionDetails(attractionDetail)
    console.log("button clicked")
})


const attractionDetails = (attObj) => {
    render(attObj)
}



const render = (attractionObj) => {
    const contentTarget = document.querySelector(`#attraction-${attractionObj.id}`)

    contentTarget.innerHTML += `
        <ul>
            <li>${attractionObj.city}</li>
            <li>${attractionObj.state}</li>
            <li>${attractionObj.description}</li>
        </ul>
    `
}