//create empty array, fetch the API information, then make copy of that empty array.
import { keys } from "../Settings.js"

let nationalParks = [] 

export const useNationalParks = () => {
    return nationalParks.slice()
}


export const getParks = () => {
        return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${keys.npsKey}`)
        .then(response => response.json())
        .then(
            parsedParks => {
                nationalParks = parsedParks.data
                console.log(parsedParks)
            })
}