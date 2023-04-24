const campoFormulario = [...document.querySelectorAll('.conteudo')]
const campoObrigatorio = [...document.querySelectorAll("label[class='aviso']")]
const botao = document.getElementById('btm')


botao.addEventListener('click', () => {
    campoFormulario.map((el) => {
        if (el.value === "") {
            el.classList.add('bordaVermelho')
            campoObrigatorio.map((ele) => {
                ele.innerHTML = 'campo obrigatorio'
            })
        } else {
            adicionarEremoverBordas()
            campoObrigatorio.map((ele) => {
                ele.innerHTML = ''

            })
        }

        function adicionarEremoverBordas() {
            el.classList.remove('bordaVermelho')
            el.classList.add('bordaVerde')
        }
    })
})

