

document.getElementById('formIMC').addEventListener('submit', (e)=>{
    e.preventDefault()
    let estatura = document.getElementById('estatura').value

    estatura = estatura/100

    let peso = document.getElementById('peso').value

    if(estatura > 0 && peso > 0){
        let IMC = peso / (estatura * estatura)
        document.getElementById('resultado').textContent = IMC.toFixed(2)
    }else {
        document.getElementById('resultado').textContent = 'Por favor, ingresa valores validos.'
}})