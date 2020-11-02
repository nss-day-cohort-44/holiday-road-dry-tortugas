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
    <ul>
        <dd><b>Wheelchair Accessible:</b> ${eateryObject.ameneties.wheelchairAccessible}</dd>
        <dd><b>Wi-Fi:</b> ${eateryObject.ameneties.wifi}</dd>
        <dd><b>City:</b> ${eateryObject.city}</dd>
        <dd><b>State:</b> ${eateryObject.state}</dd>
        <dd><b>Description:</b> ${eateryObject.description}</dd>
    </ul>    
        `
}