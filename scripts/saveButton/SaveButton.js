let itinerarySelected = 
{
    park: "",
    eatery: "",
    bizzerarreie: ""
};
    

eventHub.addEventListener("parkSelected", event => {

    const park = event.detail.parkName
}
)

eventHub.addEventListener("eaterySelected", eaterySelectedObject => {

    const eatery = eaterySelectedObject.detail.eateryName

}
)
eventHub.addEventListener("attractionSelected", event => {

    const attraction = event.detail.attractionThatWasChosen
}
)