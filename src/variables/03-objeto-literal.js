const persona = 
{
    nombre    : 'Matias'
    ,apellido : 'Melo'
    ,edad     : 45
    ,direccion : {
        comuna : 'San bernardo'
        , region : 'Metropolitana'
    }
}
console.log(persona);

// console.table(persona); se utiliza para poder mostrar en una tabla ordenada los datos ya ingresado 

//lo que no se puede hacer si se desea copiar un objeto es hacer esto: persona2 = persona;
//debido a que si se modifica algo abajo de eso no lo estara arreglando o inlcuyengo en el arrglo, lo que se debe hacer es lo siguiente 

const persona2 = {...persona};
persona2.nombre = 'Jose';

console.log(persona2);
//esta es la correcta forma de modificar un objeto o hacer un duplicado de este mismo. 
