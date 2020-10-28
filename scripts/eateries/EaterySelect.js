// Import provider functions, render dropdown

import { getEateries, useNationalEateries } from "./EateryProvider.js"

const eateriesSelector = document.querySelector(".eateryDropdown")
const eventHub = document.querySelector(".container")


export const eaterySelect = () => {
    getEateries()
    .then(() => {
        const eateryArray = useNationalEateries()

        render(eateryArray)
    })
}

const render = eatery => {
    eateriesSelector.innerHTML = `
        <option value="0">Please select an eatery...</option>
        ${ eatery.map (
            eateryObj => {
                return `<option value="${eateryObj.businessName}">${eateryObj.businessName}</option>`
            } 
    ).join("")
        }
        
    `
}
    //debugger
eventHub.addEventListener("change", (changeEvent)=>{
    if (changeEvent.target.id === "eaterySelect") {

        const eaterySelectedEvent = new CustomEvent("eaterySelected", {
            detail: {
                eateryName: parseInt(changeEvent.target.value)
            }
        })
    eventHub.dispatchEvent(eaterySelectedEvent)
    }
})