// Create an eatery card with just the name; detail button functionality

const eventHub = document.querySelector(".container")

export const Eatery = (eateryObj) => {
    return `
    <div id="eatery-${eateryObj.id}" class="eatery__card">
    <h2>Eatery<h2>
    `
}