import { getAttractions, useAttractions } from "./AttractionProvider.js"
import {attractionHTML} from "./AttractionCard.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("attractionSelected", event => {
    const attraction = event.detail.attractionThatWasChosen
   SingleAttraction(attraction)
    console.log(attraction)
})

export const SingleAttraction = (attractionNameString) => {
    getAttractions().then(() => {
        const attractionArray = useAttractions();
        const filteredAttractionObject = attractionArray.find(
            (attractionObj => {
                if (attractionObj.name === attractionNameString) {
                    return true
                }
            })
        )
        render(filteredAttractionObject)
    })
}


const render = (attraction) => {
    const attractionContainer = document.querySelector(".attractionCard")
    let buildAttractionHtml = ""

    
        buildAttractionHtml += attractionHTML(attraction)
        attractionContainer.innerHTML = buildAttractionHtml
    
}