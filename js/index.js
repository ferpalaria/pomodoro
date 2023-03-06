import "./tittleTab.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Events from "./events.js"
import {
    minutesDisplay,
    secondsDisplay
} from "./elements.js"

const controls = Controls()

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

Events({timer, controls})
