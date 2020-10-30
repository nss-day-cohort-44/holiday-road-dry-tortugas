import {useNationalParks} from "./ParkProvider.js"

const eventHub = document.querySelector(".container")

    eventHub.addEventListener("detailsClicked", (eventObj) => {
        const parkLocated = useNationalParks().find((parkObj)=> {
            return parkObj.id === eventObj.detail.parkId
        })
        ParkDetailList(parkLocated)
    })

    const ParkDetailList = (parkObj) => {
        render(parkObj)
    }


    const render = (parkObj) => {
        
        const contentTarget = document.querySelector(`#park-${parkObj.id}`)

        contentTarget.innerHTML += `
        <img src=${parkObj.images[0].url} width="200px" height="200px">
        <p>CITY:${parkObj.addresses[0].city}</p>
        <p>STATE:${parkObj.addresses[0].stateCode}</p>
        <p>DESCRIPTION:${parkObj.description}</p>
        `
    }