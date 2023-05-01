const campoFormulario = document.querySelectorAll('.conteudo')
const campoObrigatorio = document.querySelector("label[class='aviso']")
const botao = document.querySelector('#btm')

botao.addEventListener('click', (el) => {
    el.preventDefault()
    validarCampos()
})
function validarCampos() {
    campoFormulario.forEach((input) => {
        if (input.value) {
            input.classList.remove('bordaVermelho')
            input.classList.add('bordaVerde')
            input.nextElementSibling.classList.remove('aviso')
        } else {
            input.classList.remove('bordaVerde')
            input.classList.add('bordaVermelho')
            input.nextElementSibling.classList.add('aviso')
        }
    })
}

