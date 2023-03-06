import "./tittleTab.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Events from "./events.js"

const controls = Controls()

const timer = Timer({
    resetControls: controls.reset,
})

Events({timer, controls})
