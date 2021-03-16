const qntdNumerosInput = document.getElementById('qtd-number')
const numeroInicialInput = document.getElementById('numero-inicial')
const numeroFinalInput = document.getElementById('numero-final')
const buttonSortear = document.getElementById('btn')

const resultado = document.getElementById('resultado')

function sortearNumeros(){
    const qntdNumeros = Number(qntdNumerosInput.value)
    const numeroInicial = Number(numeroInicialInput.value) 
    const numeroFinal = Number(numeroFinalInput.value)

    for(let i = 0; i<qntdNumeros; i++){
        const randomNumber = ((Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial))

        if(i < qntdNumeros - 1){
            resultado.innerHTML += randomNumber + '-'
        }else{
            resultado.innerHTML += randomNumber
        }
    }
}

buttonSortear.addEventListener('click', sortearNumeros)


