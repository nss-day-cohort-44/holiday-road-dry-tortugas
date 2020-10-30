const eventHub = document.querySelector(".container")


export const Park = (parkObj) => {
    return `
    <div class="park">
        <p><b>${parkObj.fullName}<button id="details-Button--${parkObj.id}">Details</button></b></p>
        <p>${parkObj.addresses[0].city}</p>
    </div>
    `
}


eventHub.addEventListener("click", (clickEvent) => {
    const [nameOfId, parkId] = clickEvent.target.id.split("--")

        if(clickEvent.target.id.startsWith("details-Button--")) {
            console.log("button was clicked:", nameOfId, parkId)
        const detailsButtonClicked = new CustomEvent("detailsClicked",{
            detail: {
                parkId: parkId
            }
        })

        eventHub.dispatchEvent(detailsButtonClicked)
    }
})