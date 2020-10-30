import { clearPreview } from "./clearbuttonHTML.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("clearButtonClicked", event => {
    console.log("clear button clicked")
    
    location.reload()
})