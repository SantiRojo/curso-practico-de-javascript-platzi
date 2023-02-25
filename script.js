// Leyendo html desde JavaScript

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

// MANIPULANDO EL DOM

// Acceder y modificar el código html dentro de un elemento
h1.innerHTML = 'Patito <br> Feo';

// Acceder y modificar el texto de un elemento html
h1.innerText  = 'Patito';

// Obtener el valor de un atributo específico
console.log(h1.getAttribute('class'));

// Añadir un atributo
h1.setAttribute('class', 'azul')

console.log(h1.getAttribute('class'));

// Añadir una clase a una ya existente
h1.classList.add('rojo')

// Remover una clase específica
h1.classList.remove('azul')

// Añadir o remover una clase dependiendo si existe o no (como si fuera un switch on/off)
h1.classList.toggle('verde')
console.log(h1.getAttribute('class'));

h1.classList.toggle('verde')
console.log(h1.getAttribute('class'));

// Retornar un booleano dependiendo de si existe o no la clase
console.log(h1.classList.contains('rojo'))

// Modificar el atributo value de un elemento
input.value = '1234 ';

input.value = ''

// Crear un elemento html
const img = document.createElement('img');

img.setAttribute('src', 'https://static.vecteezy.com/system/resources/previews/000/899/926/large_2x/closeup-gray-kitty-looking-in-camera-on-black-photo.jpg')

img.setAttribute('width','500px');

// Añadir elemento luego de otro elemento del html

pid.append(img);

// Borrar un elemento e insertar otro
pid.innerHTML = '';
pid.append(img);

// EVENTOS

// Primer método: Atributo 'on-xxx' en el elemento html escribiendo el código js a ejecutar dentro valor del atributo 'on-xxx', por lo general se llama a una función que tengamos en nuestro archivo .js => ver elemento input con id = "inputParrafo"

function informarCambio() {
    console.log('Cambió el valor del input')
}


const inputCalc1 = document.querySelector('#calc1');
const inputCalc2 = document.querySelector('#calc2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick() {

    const sumaInputs = parseInt(inputCalc1.value) + parseInt(inputCalc2.value);

    pResult.innerText = 'El resultado es: ' + sumaInputs;
};

// Segundo método: .addEventListener('evento', callback) => el callback no va entre comillas y no lleva parentesis

const btnLimpiar = document.querySelector('#btnLimpiar');

function limpiar() {
    inputCalc1.value = '';
    inputCalc2.value = '';
    pResult.innerText = '';    
}

btnLimpiar.addEventListener('click', limpiar);

