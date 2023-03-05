let docTittle = document.title

window.addEventListener('blur', changeTittle)

function changeTittle() {
    document.title = 'Não se vá, não me abandone por favor'
    console.log("Perdeu Foco")
}

window.addEventListener('focus', () => {
    document.title = docTittle
})

export default changeTittle()