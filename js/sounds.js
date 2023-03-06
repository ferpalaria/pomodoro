export default function Sounds() {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
    const florest = new Audio("./assets/Floresta.wav")
    const rain = new Audio("./assets/Chuva.wav")
    const cafeteria = new Audio("./assets/Cafeteria.wav")
    const lareira = new Audio("./assets/Lareira.wav")

    bgAudio.loop = true

    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function playEasyListening() {
        bgAudio.muted = false
        bgAudio.play()
    }

    function playFloresta() {
        florest.muted = false
        florest.play()
    }

    function playChuva() {
        rain.muted = false
        rain.play()
    }

    function playCafeteria() {
        cafeteria.muted = false
        cafeteria.play()
    }

    function playLareira() {
        lareira.muted = false
        lareira.play()
    }

    function muteAll() {
        lareira.muted = true
        florest.muted = true
        rain.muted = true
        cafeteria.muted = true
        lareira.muted = true

        bgAudio.muted = true
    }

    return {
        pressButton,
        timeEnd,
        playCafeteria,
        playChuva,
        playFloresta,
        playLareira,
        muteAll,
        playEasyListening,
        bgAudio
    }
}