//create empty array, fetch the API information, then make copy of that empty array.
import { keys } from "../Settings.js"

let nationalParks = [] 
// let vlat = ""
// let vlon = ""

export const useNationalParks = () => {
    return nationalParks.slice()
}


export const getParks = () => {
        return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${keys.npsKey}&limit=500`)
        .then(response => response.json())
        .then(
            parsedParks => {
                nationalParks = parsedParks.data
                console.log(parsedParks)


            })
}