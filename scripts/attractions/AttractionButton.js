const eventHub = document.querySelector(".container")




eventHub.addEventListener("click", (eventObj) => {
    const [nameofId, attractionId] = eventObj.target.id.split("--")
    if (eventObj.target.id.startsWith("attraction--")) {
        const newEvent = new CustomEvent("attractionButtonClicked", {
            detail: {
                attractionId: attractionId
            }
        })
        eventHub.dispatchEvent(newEvent)
    }
})