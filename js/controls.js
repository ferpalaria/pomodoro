import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    buttonSoundOff,
    buttonSoundOn,
    buttonFire,
    buttonMarket,
    buttonTree,
    buttonRain
} from './elements.js'

export default function Controls() {

    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        // buttonSet.classList.remove('hide')
        // buttonStop.classList.add('hide')
    }

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function soundOn() {
        buttonSoundOn.classList.remove('hide')
        buttonSoundOff.classList.add('hide')
    }

    function soundOff() {
        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
    }

    function isSoundMuted() {
        return buttonSoundOn.getAttribute('class') == 'hide'
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos?')
        if (!newMinutes) {
            return false;
        }
        return newMinutes
    }

    function activate(button) {
        resetButtonActived()
        button.classList.toggle('clicked')
    }

    function resetButtonActived() {
        buttonFire.classList.remove('clicked')
        buttonMarket.classList.remove('clicked')
        buttonTree.classList.remove('clicked')
        buttonRain.classList.remove('clicked')
    }

    return {
        reset,
        play,
        pause,
        getMinutes,
        activate,
        soundOff,
        soundOn,
        isSoundMuted,
        resetButtonActived
    }
}