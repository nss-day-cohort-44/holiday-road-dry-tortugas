const eventHub = document.querySelector(".container")

const dispatchChangeEvent = () => {
    const itineraryStateChangedEvent = new CustomEvent("ItineraryStateChanged")
    eventHub.dispatchEvent(itineraryStateChangedEvent)
}

 let itinerary = []

export const getItinerary = () => {
    return fetch(`http://localhost:8088/itineraries`)
        .then(response => response.json())
        .then(parsedItinerary => {
            itinerary = parsedItinerary
        })
}

export const useItinerary = () => {
    return itinerary.slice()
}
export const saveItinerary = (itineraries) => {
    return fetch(`http://localhost:8088/itineraries`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itineraries)
    })
    .then(getItinerary)
    .then(dispatchChangeEvent)
}


