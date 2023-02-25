// ¿Qué es un condicional?

// Son la forma en la que ejecutamos un bloque de código u otro dependiendo de alguna condición o validación.


// --------------------------------------------------------------


// ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

// IF (else, else if), Switch

// El consicional if (con el else y else if) nos permite hacer validaciones completamente distintas (si así queremos) en cada validación o condicional. En cambio, en el switch todos los cases se comparan con la misma variable o condicion que definimos en el switch.


// --------------------------------------------------------------


// ¿Puedo combinar funciones y condicionales?

// Sí. Las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales.


// --------------------------------------------------------------


// Test de JavaScript - Ejercicio 2

const tipoDeSuscripcion = 'Basic';

if(tipoDeSuscripcion == 'Free'){

    console.log("Solo puedes tomar los cursos gratis");

} else if(tipoDeSuscripcion == 'Basic') {

    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

} else if(tipoDeSuscripcion == 'Expert') {

    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

} else if(tipoDeSuscripcion == 'ExpertDuo') {

    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

};
