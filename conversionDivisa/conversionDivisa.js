
const tasaDeCambioDolarAPesos = 4052.01

let pesos = document.getElementById('pesos')
let dolar = document.getElementById ('dolar')

pesos.addEventListener('keyup', (e)=>{
    let valorEnDolar = e.target.value/tasaDeCambioDolarAPesos
    valorEnDolar = valorEnDolar.toFixed(2)

    dolar.value = valorEnDolar
})

dolar.addEventListener('keyup', (e)=>{
    let valorEnPesos = e.target.value*tasaDeCambioDolarAPesos
    valorEnPesos = valorEnPesos.toFixed(2)

    pesos.value = valorEnPesos
})