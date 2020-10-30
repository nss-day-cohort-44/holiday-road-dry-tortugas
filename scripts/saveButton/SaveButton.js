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
    
    
    
        console.log(itinerarySelected)
}
)

eventHub.addEventListener("eaterySelected", eaterySelectedObject => {
    const eatery = eaterySelectedObject.detail.eateryName
    if(eaterySelectedObject.detail.value !==0) {
        itinerarySelected.eatery = eatery
    }
    
}
)
eventHub.addEventListener("attractionSelected", event => {
    
    const attraction = event.detail.attractionThatWasChosen
}
)


// if(itinerarySelected.park !== "" && itinerarySelected.eatery !=="" && itinerarySelected.bizzerarreie !== "") {
    // button is enabled
