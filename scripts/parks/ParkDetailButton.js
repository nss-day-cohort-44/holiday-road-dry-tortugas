const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id === "details-Button") {
        const detailsButtonClicked = new CustomEvent("detailsClicked")

        eventHub.dispatchEvent(detailsButtonClicked)
        console.log("i'm working")
    }
})