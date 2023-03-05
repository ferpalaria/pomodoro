


const ControlPanel = {
    buttonPlay: document.querySelector('.play'),
    buttonPause: document.querySelector('.pause'),
    buttonStop: document.querySelector('.stop'),
    buttonSet: document.querySelector('.set'),
    buttonSound_on: document.querySelector('.sound-on'),
    buttonSound_off: document.querySelector('.sound-off'),
    pressPlay() {
        this.buttonPlay.classList.toggle('hide')
        this.buttonPause.classList.toggle('hide')
        this.buttonSet.classList.add('hide')
        this.buttonStop.classList.remove('hide')
    },
    pressPause() {
        this.buttonPlay.classList.toggle('hide')
        this.buttonPause.classList.toggle('hide')
    },
    reset() {
        this.buttonPlay.classList.remove('hide')
        this.buttonStop.classList.add('hide')
        this.buttonSet.classList.remove('hide')
        this.buttonPause.classList.add('hide')
    },
    pressSound() {
        this.buttonSound_on.classList.toggle('hide')
        this.buttonSound_off.classList.toggle('hide')
    }
}

ControlPanel.buttonPlay.addEventListener('click', pressPlay)
ControlPanel.buttonPause.addEventListener('click', pressPause)
ControlPanel.buttonStop.addEventListener('click', pressStop)
ControlPanel.buttonSet.addEventListener('click', pressSet)
ControlPanel.buttonSound_on.addEventListener('click', pressSound)
ControlPanel.buttonSound_off.addEventListener('click', pressSound)

const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
let minutes, seconds

function countdown() {
    setTimeout(function () {
        let seconds = Number(displaySeconds.textContent)
        let minutes = Number(displayMinutes.textContent)

        displaySeconds.textContent = String(seconds - 1).padStart(2, "0")

        if (minutes <= 0) {
            ControlPanel.reset()
            return
        }

        if (seconds <= 0) {
            seconds = 60
            displayMinutes.textContent = String(minutes - 1).padStart(2, "0")
        }



        countdown()

    }, 1000)
}

function pressPlay() {
    ControlPanel.pressPlay()
    countdown()
}

function pressPause() {
    ControlPanel.pressPause()
}

function pressStop() {
    ControlPanel.reset()
}

function pressSet() {
    minutes = prompt('Quantos minutos?')
    displayMinutes.textContent = String(minutes).padStart(2, "0")
}

function pressSound() {
    ControlPanel.pressSound()
}