// Create an eatery card with just the name; detail button functionality

export const Eatery = (eateryObj) => {
    console.log(eateryObj)
    return `
    <div id="eatery-${eateryObj.businessName}" class="eatery__card">
    <h3>${eateryObj.businessName}</h3>
        <button id="eatery--${eateryObj.id}">Details</button>
        <dd>City: ${eateryObj.city}</dd>
        <dd>State: ${eateryObj.state}</dd>
        <dd>Description: ${eateryObj.description}</dd>
    </div>
    `
}
