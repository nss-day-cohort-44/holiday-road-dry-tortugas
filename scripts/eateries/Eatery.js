// Create an eatery card with just the name; detail button functionality

export const Eatery = (eateryObj) => {
    console.log(eateryObj)
    return `
    <div id="eatery-${eateryObj.businessNam}" class="eatery__card">
    <h2>Eatery</h2>
        <dd>${eateryObj.businessName}</dd>
        <button id="eatery--${eateryObj.id}">Details</button>
        <dd>${eateryObj.state}</dd>
        <dd>${eateryObj.city}</dd>
    </div>
    `
}
