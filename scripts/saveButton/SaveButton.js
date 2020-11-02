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
    
        console.log(itinerarySelected)
}
)

eventHub.addEventListener("eaterySelected", event => {
    let eatery = event.detail.eateryName
    itinerarySelected.eatery = eatery

    console.log(itinerarySelected)
    if (itinerarySelected.park !== "" && itinerarySelected.eatery !== "" && itinerarySelected.bizzerarreie !== "") {
        document.getElementById("saveItinerary").disabled = false;
    }
    
}
)
eventHub.addEventListener("attractionSelected", event => {
    
    let attraction = event.detail.attractionThatWasChosen
    itinerarySelected.bizzerarreie = attraction 

    console.log(itinerarySelected)
    if (itinerarySelected.park !== "" && itinerarySelected.eatery !== "" && itinerarySelected.bizzerarreie !== "") {
        document.getElementById("saveItinerary").disabled = false;
    }
}
)


// if(itinerarySelected.park !== "" && itinerarySelected.eatery !=="" && itinerarySelected.bizzerarreie !== "") {
    // button is enabled
