import Sounds from "./sounds.js"
import {
    minutesDisplay,
    secondsDisplay,
} from "./elements.js"

export default function Timer({
    resetControls, // vem de outra lib, mas é uma dependência desse modulo
}) {

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ?
            minutes :
            newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")

        minutes = newMinutes
        updateMinutes(newMinutes)
        updateSeconds(seconds)
    }

    function reset() {
        updateDisplay(minutes, 0)
        hold()
    }

    function countdown() {
        timerTimeOut = setTimeout(function () {
            let isFinished = minutes <= 0 && seconds <= 0

            // updateDisplay(minutes, 0)

            if (isFinished) {
                resetControls()
                updateDisplay()
                Sounds().timeEnd()
                return
            }

            if (seconds <= 0) {
                seconds = 60
                updateMinutes(--minutes)
            }

            updateDisplay(minutes, String(seconds - 1))

            countdown()

        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function updateSeconds(newSeconds) {
        seconds = newSeconds
    }


    function increaseFiveMinutes() {
        let futureMinute = minutes + 5
        if (futureMinute < 60) {
            updateDisplay(futureMinute, seconds)
        }
    }

    function decreaseFiveMinutes() {
        let futureMinute = minutes - 5
        if (futureMinute > 0) {
            updateDisplay(futureMinute, seconds)
        }
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    return {
        updateDisplay,
        reset,
        countdown,
        updateMinutes,
        hold,
        increaseFiveMinutes,
        decreaseFiveMinutes
    }
}


