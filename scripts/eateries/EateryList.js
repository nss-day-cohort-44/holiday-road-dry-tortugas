import { Eatery } from "./Eatery.js"
import { getEateries, useEateries } from "./EateryProvider.js"


const eventHub = document.querySelector(".container")
const eateryElement = document.querySelector(".cardContainer")

export const eateries = () => {
    getEateries().then(() => {


    })  
}

eventHub.addEventListener("eaterySelected", eaterySelectedObject => {
        
    const eatery = eaterySelectedObject.detail.eateryName

    const eateryArray = useEateries()

    const filteredEateryArray = eateryArray.find(eateryObj => {
        return eateryObj.businessName === eatery
    })



        let eateryHTML = ""
        {
            eateryHTML = Eatery(filteredEateryArray)
            eateryElement.innerHTML = `
            <div class="selectedEatery">
            ${eateryHTML}   
            </div>
            `
        }   
})
