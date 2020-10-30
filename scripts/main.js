import {getParks} from "./parks/ParkProvider.js"
import {parkSelect} from "./parks/ParkSelect.js"
import "./parks/ParkList.js"
import "./parks/ParkDetailList.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import { attractionSelect } from "./attractions/AttractionSelect.js"
import { eaterySelect } from "./eateries/EaterySelect.js"
import { eateries } from "./eateries/SingleEateryRender.js"
import "./attractions/SingleAttractionRender.js"
import "./eateries/EateryDetail.js"
import { getWeather } from "./weather/WeatherProvider.js"
import "./weather/WeatherSelect.js"
import "./attractions/AttractionDetailRender.js"
import "./saveButton/SaveButton.js"


parkSelect()
getParks()
getAttractions()
getWeather()
attractionSelect()
eaterySelect()
eateries()
