// Array de notas creadas con algunos ejemplos
let notasCreadas = [
    { id: 1, titulo: 'Sacar la basura', texto: 'Mi mamá me va a retar si no lo hago', realizada: false },
    { id: 2, titulo: 'Hacer la tarea', texto: 'Matemáticas y ciencias', realizada: false },
    { id: 3, titulo: 'Comprar leche', texto: 'Para el desayuno de mañana', realizada: true },
    { id: 4, titulo: 'Llamar a abuela', texto: 'Es su cumpleaños', realizada: false },
    { id: 5, titulo: 'Ir al gimnasio', texto: 'Ejercicio de piernas', realizada: true },
    { id: 6, titulo: 'Leer un libro', texto: 'Terminar el capítulo 3', realizada: false },
    { id: 7, titulo: 'Pagar la factura de la luz', texto: 'Vence mañana', realizada: true },
    { id: 8, titulo: 'Preparar la cena', texto: 'Hacer ensalada y pollo', realizada: false },
    { id: 9, titulo: 'Estudiar JavaScript', texto: 'Revisar conceptos básicos', realizada: true },
    { id: 10, titulo: 'Limpiar el coche', texto: 'Lavar y aspirar', realizada: false },
    { id: 11, titulo: 'Reunión con el equipo', texto: 'Discutir el nuevo proyecto', realizada: true },
    { id: 12, titulo: 'Visitar al dentista', texto: 'Chequeo semestral', realizada: false },
    { id: 13, titulo: 'Actualizar el CV', texto: 'Agregar últimos trabajos', realizada: true },
    { id: 14, titulo: 'Ir de compras', texto: 'Comprar frutas y verduras', realizada: false },
    { id: 15, titulo: 'Organizar el escritorio', texto: 'Tirar papeles viejos', realizada: true },
    { id: 16, titulo: 'Lavar la ropa', texto: 'Separar blancos y colores', realizada: false },
    { id: 17, titulo: 'Enviar correo a jefe', texto: 'Sobre el informe semanal', realizada: true },
    { id: 18, titulo: 'Cortar el césped', texto: 'Antes del fin de semana', realizada: false },
    { id: 19, titulo: 'Hacer meditación', texto: 'Sesión de 20 minutos', realizada: true },
    { id: 20, titulo: 'Revisar emails', texto: 'Responder los urgentes', realizada: false },
    { id: 21, titulo: 'Planificar las vacaciones', texto: 'Buscar destinos y hoteles', realizada: true }
];

// Referencia al contenedor donde se mostrarán las notas
const Notas = document.getElementById('notas');

const realizado = document.getElementById('id-input');

// Función para crear las tarjetas de notas
function crearTarjetas(array) {
    // Limpiar el contenido previo del contenedor de notas
    Notas.innerHTML = '';

    // Recorrer el array de notas y crear los elementos HTML correspondientes
    array.forEach(element => {
        let listo = element.realizada ? 'div-p realizada' : 'div-p';
        let div = document.createElement('div');
        div.classList.add('d-flex', 'flex-column', 'col-2', 'p-3', 'bg-light');
        div.innerHTML = `
            <div class="d-flex claseInput p-1">
                <input onClick="marcarRealizada(${element.id})" type="checkbox" ${element.realizada ? "checked" : ""}>
                <h4>${element.titulo}</h4>
            </div>
            <p class="${listo}">${element.texto}</p>
            <button onclick="borrarNota(${element.id})" id="${element.id}" type="submit" class="btn btn-danger">Borrar Nota</button>
        `;
        // Añadir la nueva tarjeta al contenedor de notas
        Notas.appendChild(div);
    });
}

let idGlobal = 22

// Función para agregar una nueva nota
function agregarNota(titulo, texto) {
    const nuevaNota = {
        id: idGlobal,
        titulo: titulo,
        texto: texto,
        realizada: false
    };
    // Añadir la nueva nota al array de notas creadas
    notasCreadas.push(nuevaNota);
    // Actualizar la visualización de las notas
    crearTarjetas(notasCreadas);
    idGlobal = idGlobal + 1
}

// Función manejadora del evento submit del formulario
function handleFormSubmit(event) {
    event.preventDefault();  // Prevenir el comportamiento por defecto del formulario
    const titulo = document.querySelector('#titulo').value.trim();
    const nota = document.querySelector('#textNota').value.trim();
    if (titulo && nota) {  // Verificar que los campos no estén vacíos
        agregarNota(titulo, nota);  // Agregar la nueva nota
        document.querySelector('#titulo').value = '';  // Limpiar el campo de título
        document.querySelector('#textNota').value = '';  // Limpiar el campo de texto
    }
}

// Función para borrar una nota por su id
function borrarNota(id) {
    // Filtrar el array de notas para eliminar la nota con el id especificado
    notasCreadas = notasCreadas.filter(nota => nota.id !== id);
    // Actualizar la visualización de las notas
    crearTarjetas(notasCreadas);
    // Mostrar mensaje si no hay notas creadas
    if (notasCreadas.length === 0) {
        Notas.innerHTML = `<h2>No hay Notas Creadas</h2>`;
    }
}

// Función para marcar una nota como realizada o no realizada
function marcarRealizada(id) {
    // Mapear el array de notas para cambiar el estado de la nota con el id especificado
    notasCreadas = notasCreadas.map(nota => {
        if (nota.id === id) {
            nota.realizada = !nota.realizada;
        }
        return nota;
    });
    // Actualizar la visualización de las notas
    crearTarjetas(notasCreadas);
}

// Función para obtener las tareas realizadas
function tareasRealizadas(array) {
    return array.filter(nota => nota.realizada);  // Filtrar las notas realizadas
}

// Función manejadora del evento change del checkbox 'realizado'
function handleRealizadoChange(event) {
    if (event.target.checked) {
        // Mostrar solo las tareas realizadas
        crearTarjetas(tareasRealizadas(notasCreadas));
    } else {
        // Mostrar todas las tareas
        crearTarjetas(notasCreadas);
    }
}

// Función para buscar notas que coincidan con un texto
function buscarNotas(letras) {
    return notasCreadas.filter(nota =>
        nota.titulo.toLowerCase().includes(letras.toLowerCase()) ||
        nota.texto.toLowerCase().includes(letras.toLowerCase())
    );
}

// Función manejadora del evento keyup del input de búsqueda
function handleSearchKeyup(event) {
    const imprimir = buscarNotas(event.target.value);
    if (realizado.checked) {
        // Mostrar solo las notas realizadas que coincidan con la búsqueda
        crearTarjetas(tareasRealizadas(imprimir));
    } else {
        // Mostrar todas las notas que coincidan con la búsqueda
        crearTarjetas(imprimir);
    }
}

// Asignar las funciones manejadoras a los eventos
document.getElementById('crearNota').addEventListener('submit', handleFormSubmit);
document.getElementById('id-input').addEventListener('change', handleRealizadoChange);
document.getElementById('search').addEventListener('keyup', handleSearchKeyup);

// Inicializar la pantalla con las notas creadas
crearTarjetas(notasCreadas);