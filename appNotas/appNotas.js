let notasCreadas = [
    {
        id: 1,
        titulo: 'Sacar la basura',
        texto: 'Mi mamá me va a retar si no lo hago',
        realizada: false
    },
    {
        id: 2,
        titulo: 'Hacer la tarea',
        texto: 'Matemáticas y ciencias',
        realizada: false
    },
    {
        id: 3,
        titulo: 'Comprar leche',
        texto: 'Para el desayuno de mañana',
        realizada: true
    },
    {
        id: 4,
        titulo: 'Llamar a abuela',
        texto: 'Es su cumpleaños',
        realizada: false
    },
    {
        id: 5,
        titulo: 'Ir al gimnasio',
        texto: 'Ejercicio de piernas',
        realizada: true
    },
    {
        id: 6,
        titulo: 'Leer un libro',
        texto: 'Terminar el capítulo 3',
        realizada: false
    },
    {
        id: 7,
        titulo: 'Pagar la factura de la luz',
        texto: 'Vence mañana',
        realizada: true
    },
    {
        id: 8,
        titulo: 'Preparar la cena',
        texto: 'Hacer ensalada y pollo',
        realizada: false
    },
    {
        id: 9,
        titulo: 'Estudiar JavaScript',
        texto: 'Revisar conceptos básicos',
        realizada: true
    },
    {
        id: 10,
        titulo: 'Limpiar el coche',
        texto: 'Lavar y aspirar',
        realizada: false
    },
    {
        id: 11,
        titulo: 'Reunión con el equipo',
        texto: 'Discutir el nuevo proyecto',
        realizada: true
    },
    {
        id: 12,
        titulo: 'Visitar al dentista',
        texto: 'Chequeo semestral',
        realizada: false
    },
    {
        id: 13,
        titulo: 'Actualizar el CV',
        texto: 'Agregar últimos trabajos',
        realizada: true
    },
    {
        id: 14,
        titulo: 'Ir de compras',
        texto: 'Comprar frutas y verduras',
        realizada: false
    },
    {
        id: 15,
        titulo: 'Organizar el escritorio',
        texto: 'Tirar papeles viejos',
        realizada: true
    },
    {
        id: 16,
        titulo: 'Lavar la ropa',
        texto: 'Separar blancos y colores',
        realizada: false
    },
    {
        id: 17,
        titulo: 'Enviar correo a jefe',
        texto: 'Sobre el informe semanal',
        realizada: true
    },
    {
        id: 18,
        titulo: 'Cortar el césped',
        texto: 'Antes del fin de semana',
        realizada: false
    },
    {
        id: 19,
        titulo: 'Hacer meditación',
        texto: 'Sesión de 20 minutos',
        realizada: true
    },
    {
        id: 20,
        titulo: 'Revisar emails',
        texto: 'Responder los urgentes',
        realizada: false
    },
    {
        id: 21,
        titulo: 'Planificar las vacaciones',
        texto: 'Buscar destinos y hoteles',
        realizada: true
    }
];


let nuevaNota = {
    id: 1,
    titulo: 'Sacar las basura',
    texto: 'Mi mama me va a retar si no lo hago',
    realizada: false
}


const Notas = document.getElementById('notas')


let idGlobal = notasCreadas[0]

function crearTarjetas (array){
    let section = document.getElementById('notas')
    section.innerHTML = ''
    array.forEach(element => {
        let listo = element.realizada ? 'div-p realizada' : 'div-p'
        let div = document.createElement('div')
        div.classList =('d-flex flex-column col-2 p-3 bg-light ')
        div.innerHTML = `
            <div class="d-flex claseInput p-1 ">
                <input onClick="marcarRealizada(${element.id})" type="checkbox" ${element.realizada?"checked": ""}>
                <h4>${element.titulo}</h4>
            </div>
            <p class="${listo}">${element.texto}</p>
            <button onclick="borrarNota(${element.id})" id="${element.id}"" type="submit" class="btn btn-danger">Borrar Nota</button>
            </div>`
        section.appendChild(div)
    });
    
}


function agregarNota (titulo, texto){
    let nuevaNota = {
        id:notasCreadas.length+1,
        titulo: titulo,
        texto: texto,
        realizada: false
    }
    notasCreadas.push(nuevaNota)
}


let forn = document.getElementById('crearNota')

forn.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(e.target);
    
    let titulo = document.querySelector('#titulo').value
    let nota = document.querySelector('#textNota').value
    if(titulo.trim() !== '' && nota.trim() !== ''){
        agregarNota(titulo,nota)
        document.querySelector('#titulo').value = '';
        document.querySelector('#textNota').value = '';
    }
    crearTarjetas(notasCreadas) 

})


function borrarNota(id) {
    notasCreadas = notasCreadas.filter(nota => nota.id !== id);
    crearTarjetas(notasCreadas)
    if (notasCreadas ==""){
        Notas.innerHTML=`
        <h2>No hay Notas Creadas</h2>`
    }
}

if (notasCreadas ==""){
    Notas.innerHTML=`
    <h2>No hay Notas Creadas</h2>`
}else{
    crearTarjetas(notasCreadas)
}

function marcarRealizada(id) {
    notasCreadas = notasCreadas.map(nota => {
        if (nota.id === id) {
            nota.realizada = !nota.realizada;
           
        }
        return nota;
    });
    crearTarjetas(notasCreadas);
    console.log(notasCreadas);
    
}

function tareasRealizadas (array){
    let realizadas = array.filter(array => array.realizada == true)
    
    return realizadas
    
}
const realizado = document.getElementById('id-input')
realizado.addEventListener('change',(e)=>{
    if (e.target.checked){
        crearTarjetas(tareasRealizadas(notasCreadas))
    }else{
        crearTarjetas(notasCreadas)
    }
})

function buscarNotas(letras) {
    return notasCreadas.filter(nota => 
        nota.titulo.toLowerCase().includes(letras.toLowerCase()) || 
        nota.texto.toLowerCase().includes(letras.toLowerCase()),) 
     
    
}

function buscarNotas(letras) {
    // Filtra las notas según el texto de búsqueda y si se deben mostrar solo realizadas
    return notasCreadas.filter(nota => 
        (nota.titulo.toLowerCase().includes(letras.toLowerCase()) || 
        nota.texto.toLowerCase().includes(letras.toLowerCase()))
        
    );
}
const search = document.getElementById('search')

search.addEventListener('keyup', (e)=>{
    let imprimir = buscarNotas(e.target.value)
    if(realizado.checked){
        crearTarjetas(tareasRealizadas(imprimir))
    }else{
        crearTarjetas(imprimir)
    }
})
