export const Park = (parkObj) => {
    return `
    <div class="park">
        <p><b>${parkObj.fullName}<button id="details-Button">Details</button></b></p>
        <p>${parkObj.addresses[0].city}</p>
    </div>
    `
}