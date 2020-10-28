import {getParks} from "./parks/ParkProvider.js"
import {parkSelect} from "./parks/ParkSelect.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import { attractionSelect } from "./attractions/AttractionSelect.js"
import { getEateries } from "./eateries/EateryProvider.js"
import { eaterySelect } from "./eateries/EaterySelect.js"

parkSelect()
getParks()
getAttractions()
attractionSelect()
eaterySelect()
getEateries()
