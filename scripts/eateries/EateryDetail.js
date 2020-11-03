import { useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector(".container")


eventHub.addEventListener("detailButtonClicked", (eventObject) => {
    const foundEatery = useEateries().find((eateryObject) => {
        return eateryObject.id === parseInt(eventObject.detail.eateryId)
    })
    eateryDetails(foundEatery)
})

const eateryDetails = (eateryObject) => {
    render(eateryObject)
}


const render = (eateryObject) => {
const detailTarget = document.querySelector(`#eatery-${eateryObject.id}`)
    
    detailTarget.innerHTML += `
        <p><b>City:</b> ${eateryObject.city}</p>
        <p><b>State:</b> ${eateryObject.state}</p>
        <p><b>Description:</b> ${eateryObject.description}</p>
        <p><b>Wheelchair Accessible:</b> ${eateryObject.ameneties.wheelchairAccessible}</p>
        <p><b>Wi-Fi:</b> ${eateryObject.ameneties.wifi}</p>
        `
}