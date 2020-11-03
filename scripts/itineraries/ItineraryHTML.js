// export function to return built HTML for single itinerary object
export const ItineraryHTML = (itineraryObj) => {
    return `
    <div class="savedItinerary">
    <p class="savedItineraryCard__park">         <b>National Park:</b> ${itineraryObj.park}</p>
    <p class="savedItineraryCard__bizzerarreie"> <b>Attraction:</b>    ${itineraryObj.bizzerarreie}</p>
    <p class="savedItineraryCard__eatery">       <b>Eatery:</b>        ${itineraryObj.eatery}</p>
    </div>
    `
}
