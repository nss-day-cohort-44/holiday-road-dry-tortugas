// import external functions
import { getItinerary, useItinerary } from './ItineraryProvider.js'
import { ItineraryHTML }              from './ItineraryHTML.js'

// get a reference to target HTML attribute where intineraries will render
const targetContainer = document.querySelector('.savedItineraryCard')

// hang eventHub on top level element in index.html
const eventHub = document.querySelector('.container')

// call ItineraryList() to bring app state up to date with API in response to event indicating API state change
eventHub.addEventListener("ItineraryStateChanged", () => ItineraryList() )

// get intineraries and generate HTML for each intinerary object
export const ItineraryList = () => {
    getItinerary().then( () => {
        const itineraryArray = useItinerary()

        render(itineraryArray)
    })
}

// render to DOM
const render = (itineraryArray) => {
    // init var to hold completed HTML
    let itineraryHTMLRep = ""

    // loop itineraryArray and call itineraryHTML for each element
    for (const itinerary of itineraryArray) {
        // add returned itineraryHTML for each elemnt to itineraryHTMLRep 
        itineraryHTMLRep += ItineraryHTML(itinerary)

        // insert the full itineraryHTMLRep HTML into element held in the value of itineraryContainer
        targetContainer.innerHTML = `
          <h2>Saved Itineraries</h2>
            <section class="itineraryList">
              ${itineraryHTMLRep}
            </section>
          `
    }
}





// eventHub
// eventlistener for API state change event - save itinerary button clicked
// holds render for HTML
// call getItinerary and generate HTML for each note
// render to DOM
// render(itineraryArray)





