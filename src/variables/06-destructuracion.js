//Destructuracion

const persona = {
    nombre : 'Matias'
    ,edad  : 22
    ,clave : 'clave'
    
};

//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);
// esto no se hace debido a que es muy latero estar llamando uno de a uno.

const { nombre} = persona;
console.log(nombre);

//Esta es una forma de llamar en donde dentro de {} se indica que es lo que se sacara del objeto.
//llamar desde una funcion
const nuevo = ({ nombre, edad, rango = 'practicante', clave }) => {
    //console.log(nombre, edad, rango);
    return { 
        nombreClave : clave
        ,anios      : edad
        ,direccion  :{
            calle :'Coltauco'
            ,region:'Metropolitana'
        }
    }
}
//llamar desde una variable
const {nombreClave, anios, direccion:{calle, region}} = nuevo(persona);
// Se puede volver a descontruir al momento de llamarlo y seleccionar que cosas llamar con el :{}
console.log(nombreClave, anios);
console.log(calle, region);
// Otra forma de hacer seria la siguiente
const {nombreClave, anios, direccion} = nuevo(persona);
const {calle, region}= direccion;
//esta seria la segunda forma, se toma direccion y luego se descontruye. 