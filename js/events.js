import Sound from "./sounds.js"
import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    buttonStop,
    buttonFire,
    buttonRain,
    buttonTree,
    buttonMarket,
    buttonMinus,
    buttonPlus
} from "./elements.js"

export default function Events({
    controls,
    timer,
}) {

    let currentPlaying

    const sounds = Sound()

    buttonPlay.addEventListener('click', function () {
        controls.play()
        controls.soundOn()
        timer.countdown()
        sounds.pressButton()
        currentPlaying == undefined ?
            playOrPause(sounds.playEasyListening) :
            currentPlaying()
    })

    buttonPause.addEventListener('click', function () {
        controls.pause()
        controls.soundOff()
        timer.hold()
        sounds.pressButton()
        sounds.muteAll()
    })

    buttonStop.addEventListener('click', function () {
        controls.reset()
        controls.soundOff()
        controls.resetButtonActived()
        timer.reset()
        sounds.pressButton()
        sounds.muteAll()
    })

    buttonMinus.addEventListener('click', function () {
        timer.decreaseFiveMinutes()
    })

    buttonPlus.addEventListener('click', function () {
        timer.increaseFiveMinutes()
    })

    buttonSoundOn.addEventListener('click', function () {
        controls.soundOff()
        sounds.muteAll()
    })

    buttonSoundOff.addEventListener('click', function () {
        controls.soundOn()
        currentPlaying == undefined ?
            playOrPause(sounds.playEasyListening) :
            currentPlaying()
    })

    buttonSet.addEventListener('click', function () {
        let newMinutes = controls.getMinutes()

        if (!newMinutes) {
            timer.reset()
            return
        }

        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })

    function playOrPause(playSound) {
        if (currentPlaying == playSound && !controls.isSoundMuted()) {
            sounds.muteAll()
            controls.soundOff()
            currentPlaying = undefined
        } else {
            sounds.muteAll()
            playSound()
            controls.soundOn()
            currentPlaying = playSound
        }
    }

    buttonTree.addEventListener('click', function () {
        controls.activate(buttonTree)
        playOrPause(sounds.playFloresta)
    })

    buttonRain.addEventListener('click', function () {
        controls.activate(buttonRain)
        playOrPause(sounds.playChuva)
    })

    buttonMarket.addEventListener('click', function () {
        controls.activate(buttonMarket)
        playOrPause(sounds.playCafeteria)
    })

    buttonFire.addEventListener('click', function () {
        controls.activate(buttonFire)
        playOrPause(sounds.playLareira)
    })
}
