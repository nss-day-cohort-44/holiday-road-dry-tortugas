//create empty array, fetch the API information, then make copy of that empty array.
// import { keys } from "../Settings.js"

let nationalEateries = [] 

export const useEateries = () => {
    return nationalEateries.slice()
}


export const getEateries = () => {
        return fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(
            parsedEateries => {
                nationalEateries = parsedEateries
                console.log(parsedEateries)
            }
        )
}