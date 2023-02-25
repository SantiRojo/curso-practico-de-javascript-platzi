// ¿Qué es una función?

// Las funciones son la forma en la que encapsulamos bloques de código para que sean reutilizables y ejecutables en el futuro.

// Bloque de código => línea o grupo de líneas de código

let nombre = 'Cosme';
let apellido = 'Fulanito';

function nombreCompleto(nomb, ap) {
    return nomb + ' ' + ap;
};

nombreCompleto(nombre, apellido); // 'Cosme Fulanito'


// --------------------------------------------------------------


// ¿Cuándo me sirve usar una función en mi código?

// Nos sirve cuando tenemos variables o bloques de código muy parecidos (con cambios que podrían ser parámetros o argumentos) que podemos encapsular para reutilizar en el futuro. 
// También nos sirve para ordenar y mejorar la legibilidad de nuestro código.


// --------------------------------------------------------------


// ¿Cuál es la diferencia entre parámetros y argumentos de una función?

// Parámetros => es lo que recibe una función cuando la creamos.

// Argumentos => es lo que recibe una función cuando la ejecutamos. 


// --------------------------------------------------------------


// Test de JavaScript - Ejercicio 2

const name = 'Cosme';
const lastName = 'Fulanito';
const completeName = name + lastName;
const nickname = 'fulanitodetal';

console.log('Mi nombre es ' + completeName + ', pero prefiero que me digas ' + nickname + '.');


function saludar(nomb, ap, usr) {
    const completeName = nombreCompleto(nomb, ap);

    console.log('Mi nombre es ' + completeName + ', pero prefiero que me digas ' + usr + '.');
}

saludar(name, lastName, nickname);

