const eventHub = document.querySelector(".container")
const buttonTarget = document.querySelector(".clearButton")

export const buttonHTML = () => {
    buttonTarget.innerHTML +=  `
    <button id="clearItinerary">Clear Intinerary</button>
    `
}


export const clearPreview = () => {
    const contentTarget = document.querySelector(".previewContainer")

    contentTarget.innerHTML = `
    
    

    
    `
}

eventHub.addEventListener("click" , (event) => {
    if (event.target.id === "clearItinerary") {
        
        const buttonEvent = new CustomEvent("clearButtonClicked", {
            detail: {
                clearButtonClicked: true 
            }
        })
        eventHub.dispatchEvent(buttonEvent)
    }
})