import { saveItinerary } from "../itineraries/ItineraryProvider.js"


const eventHub = document.querySelector(".container")

let itinerarySelected = 
{
    park: "",
    eatery: "",
    bizzerarreie: ""
};
    
// add the if statement at the bottom to each eventlistener. "parkSelected" has the correct concept. rinse and repeat with the other 2
eventHub.addEventListener("parkSelected", event => {
    
        let park = event.detail.parkName
        itinerarySelected.park = park
    
    if (itinerarySelected.park !== "" && itinerarySelected.eatery !== "" && itinerarySelected.bizzerarreie !== "") {
        document.getElementById("saveItinerary").disabled = false;
    }

}
)

eventHub.addEventListener("eaterySelected", event => {
    let eatery = event.detail.eateryName
    itinerarySelected.eatery = eatery

    if (itinerarySelected.park !== "" && itinerarySelected.eatery !== "" && itinerarySelected.bizzerarreie !== "") {
        document.getElementById("saveItinerary").disabled = false;
    }
    
}
)
eventHub.addEventListener("attractionSelected", event => {
    
    let attraction = event.detail.attractionThatWasChosen
    itinerarySelected.bizzerarreie = attraction 

    if (itinerarySelected.park !== "" && itinerarySelected.eatery !== "" && itinerarySelected.bizzerarreie !== "") {
        document.getElementById("saveItinerary").disabled = false;
    }
}
)


eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveItinerary") 

            saveItinerary(itinerarySelected)
            console.log(clickEvent.target.id)

})



// SaveButton.js
  // create event listener for saveItinerary id w/ event dispatch
  // invoke a function to save data to json-server
  // call get/use itinerary function in response to itinerarySelected

//   accounted for

// new module: ItineraryProvider.js
 // fetch saved itinerary from json-server
 // Get & Use & Post   
 // dispatch event

//  ItineraryList.js
  // calls getItinerary and useItinerary and call render
  // eventHub and eventlistener looking for saveItinerary click event w/ function of itineraryList()
  // itineraryList() on click - call render 

//  ItineraryHTML.js
  // ItineraryHTML(Iobj) to render to page