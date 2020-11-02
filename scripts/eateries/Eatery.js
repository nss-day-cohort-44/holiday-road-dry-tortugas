// Create an eatery card with just the name; detail button functionality
const eventHub = document.querySelector(".container")

export const Eatery = (eateryObj) => {
    console.log(eateryObj)
    return `
    <div id="eatery-${eateryObj.id}" class="eatery__card">
    <h3>${eateryObj.businessName}</h3>
    <button id="eatery--${eateryObj.id}">Details</button>
    </div>
    `
}


eventHub.addEventListener("click", (eventObject) => {
    const [nameOfId, eateryId] = eventObject.target.id.split("--")
    if (eventObject.target.id.startsWith("eatery--")) {
        const myCustomEvent = new CustomEvent("detailButtonClicked", {
            detail: {
                eateryId: eateryId
            }
        })
        eventHub.dispatchEvent(myCustomEvent)
    }
})
{/* <dd>City: ${eateryObj.city}</dd>
<dd>State: ${eateryObj.state}</dd>
<dd>Description: ${eateryObj.description}</dd> */}