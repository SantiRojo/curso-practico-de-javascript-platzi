// ¿Qué es un array?

// Es una lista de elementos.

// Ex:

const array = [1, 'hola', true, 34];


// --------------------------------------------------------------


// ¿Qué es un objeto?

// Es una lista de elementos, pero cada elemento tiene un nombre clave.

// Ex:

const objt = {
    nombre: 'Fulanito',
    edad: 15
};


// --------------------------------------------------------------


// ¿Cuándo es mejor usar objetos o arrays?

// Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demás (la regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.


// --------------------------------------------------------------


// ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

// Sí, los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

// Ex:

const alumnos = [{nombre: 'Juan', edad: 10, comidasFavoritas: ['fideos', 'arroz con pollo']}, {nombre: 'Pedro', edad: 11, comidasFavoritas: ['milanesas', 'asado']}, {nombre: 'Clara', edad: 10, comidasFavoritas: ['hamburguesas', 'canelones']}];


// --------------------------------------------------------------


// Test de JavaScript - Ejercicio 2

function imprimirPrimerElemento(arr){
    console.log(arr[0]);
};


// --------------------------------------------------------------


// Test de JavaScript - Ejercicio 3

const colores = ['rojo', 'verde', 'azul', 'amarillo'];

function imprimirTodosLosElementos(arr){
    for(let el of arr){
        console.log(el);
    };
};

// imprimirTodosLosElementos(colores);

// --------------------------------------------------------------


// Test de JavaScript - Ejercicio 4

const persona = {nombre: 'Carlos', apellido: 'Jiménez', apodo: 'La Mona'}

function imprimirElementosDeObjeto(obj){
    let objToArr = Object.values(obj); // Object.values(nombre del objeto) => retorna un array con todos los valores de un objeto
    imprimirTodosLosElementos(objToArr);
}

imprimirElementosDeObjeto(persona);