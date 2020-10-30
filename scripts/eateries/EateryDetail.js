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
        <dd>${eateryObject.city}</dd>
        <dd>${eateryObject.state}</dd>
        <dd>${eateryObject.description}</dd>
        `
}