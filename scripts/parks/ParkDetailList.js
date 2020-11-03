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
        <p><b>CITY:</b> ${parkObj.addresses[0].city}</p>
        <p><b>STATE:</b> ${parkObj.addresses[0].stateCode}</p>
        <p><b>DESCRIPTION:</b> ${parkObj.description}</p>
        <p><b>ACTIVITIES:</b>${parkObj.activities[0].name}</p>
        <p>${parkObj.activities[1].name}</p>
        <p>${parkObj.activities[2].name}</p>
        <p>${parkObj.activities[3].name}</p>
        `
    }