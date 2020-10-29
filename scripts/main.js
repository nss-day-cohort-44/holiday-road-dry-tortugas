import {getParks} from "./parks/ParkProvider.js"
import {parkSelect} from "./parks/ParkSelect.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import { attractionSelect } from "./attractions/AttractionSelect.js"
import { eaterySelect } from "./eateries/EaterySelect.js"
import { eateries } from "./eateries/SingleEateryRender.js"
import "./attractions/SingleAttractionRender.js"
import { getWeather } from "./weather/WeatherProvider.js"
import { weatherSelect } from "./weather/WeatherSelect.js"


parkSelect()
getParks()
getAttractions()
getWeather()
weatherSelect()
attractionSelect()
eaterySelect()
eateries()
