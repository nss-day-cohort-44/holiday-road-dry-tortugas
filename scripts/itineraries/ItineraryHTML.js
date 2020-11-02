// export function to return built HTML for single itinerary object
export const ItineraryHTML = (itineraryObj) => {
    return `
    <p class="savedItineraryCard__park">         National Park: ${itineraryObj.park}</p>
    <p class="savedItineraryCard__eatery">       Eatery:        ${itineraryObj.eatery}</p>
    <p class="savedItineraryCard__bizzerarreie"> Attraction:    ${itineraryObj.bizzerarreie}</p>
    `
}
