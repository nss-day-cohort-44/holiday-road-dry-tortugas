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
            <p><b>City:</b>${attractionObj.city}</p>
            <p><b>State:</b>${attractionObj.state}</p>
            <p><b>Description:</b>${attractionObj.description}</p>
            <p><b>Souvenirs:</b>${attractionObj.ameneties.souvenirs}</p>
    `
}