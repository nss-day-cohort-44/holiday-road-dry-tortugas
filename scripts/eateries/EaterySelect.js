// Import provider functions, render dropdown

import { getEateries, useEateries } from "./EateryProvider.js"

const eaterySelector = document.querySelector(".eateryDropdown")
const eventHub = document.querySelector(".container")



//This keeps iterated instead of the list part
const render = eatery => {

    eaterySelector.innerHTML = `
        <option value="0">Please select an eatery...</option>
        ${eatery.map (
            eateryObj => {
                return `<option value="${eateryObj.businessName}">${eateryObj.businessName}</option>`
                } 
        ).join("")
        }
    `
}

export const eaterySelect = () => {
    getEateries()
    .then(() => {
        const eateryArray = useEateries()
        render(eateryArray)
    })
}

    //debugger
eventHub.addEventListener("change", (changeEvent)=>{

    if (changeEvent.target.id === "eaterySelect") {
        const eaterySelectedEvent = new CustomEvent("eaterySelected", {
            detail: {
                eateryName: changeEvent.target.value
            }
        })
    eventHub.dispatchEvent(eaterySelectedEvent)
    }
})