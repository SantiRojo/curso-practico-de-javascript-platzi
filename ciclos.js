// ¿Qué es un ciclo?

// Un ciclo es la forma de ejecutar un mismo bloque de código hasta que se cumpla cierta condición.


// --------------------------------------------------------------


//¿Qué tipos de ciclos existen en JavaScript?

// While, do while y for.


// --------------------------------------------------------------


// ¿Qué es un ciclo infinito y por qué es un problema?

// Es cuando la validación de nuestros condicionales nunca se cumple y termina "toteando" (dañando) la aplicación, por ejemplo cuando el navegador ya no puede más de tanta ejecución de ese bloque de código.


// --------------------------------------------------------------


// ¿Puedo mezclar ciclos y condicionales?

// Sí, aunque los ciclos son una especie de condicionales, nadie nos impide agregar más condicionales dentro del ciclo.


// --------------------------------------------------------------


// Test de JavaScript - Ejercicio 2

let i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
};

i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
};


// --------------------------------------------------------------


// Test de JavaScript - Ejercicio 3


let respuesta;

while(respuesta != 4){
    let pregunta = parseInt(prompt('¿Cuánto es 2 + 2?'));
    respuesta = pregunta;
};

