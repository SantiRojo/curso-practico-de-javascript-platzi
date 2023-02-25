// Test de JavaScript - Ejercicio Bonus 1

const suscripcion = 'Basic';

function conseguirTipoSuscripcion () {
    if(suscripcion == 'Free'){
        console.log("Solo puedes tomar los cursos gratis");
        return;
    };

    if(suscripcion == 'Basic') {    
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;    
    };
    
    if(suscripcion == 'Expert') {    
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;    
    };
    
    if(suscripcion == 'ExpertDuo') {    
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;    
    };

    console.warn('Ese tipo de suscripción no existe');
}


// --------------------------------------------------------------


// Test de JavaScript - Ejercicio Bonus 2


const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

const ejemploSuscripcion = 'dfgdg';

function chequearTipoDeSuscripcion(susc){
    if(tiposDeSuscripciones[susc]){
        console.log(tiposDeSuscripciones[susc]);
        return;
    };

    console.warn('Ese tipo de suscripción no existe');
}

chequearTipoDeSuscripcion(ejemploSuscripcion);

