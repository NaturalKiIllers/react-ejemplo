 //funciones
 //normalmente, las funciones se podrian hacer de la siguiente manera:
 // funcion saludar(nombre){
 // return ` Hola, ${nombre}`;
 //}
 // Pero el problema de esto, es que si se llega a sobreescribir, se pierde la funcion original o puede fallar gravemenete nuestro codigo. Es por eso que las funciones 
 // seran guardadas en variables.

 const saludar = function(nombre){
     return `Hola, ${nombre}`
 }

 const saludar2 = (nombre) => { return `Hola ${nombre}`};
 //esta tipo de funcion se le denomina funcion de flecha y si solo se entregara un solo dato o parametro, se puede eliminar el return y las {}, quedando de la siguiente forma.
 const saludar3 = (nombre) => `Hola ${nombre}`;
//ahora bien, esto no funciona con return con mas de una variable, porque se puede desorientar, y no saber que devolver, 
//es por eso que no se ocupa el return pero se pone () al final.

const getUser = () => 
    ({
        uid: 1234,
        contrasenna: 4321
    })

 console.log(saludar('Pedro'));
 console.log(saludar2('Juan'));
 console.log(saludar3('Perico'));

 console.log(getUser());

 //tarea
 
 const getUsuarioActivo = (nombre) => ({ uid:'ABC567', username:nombre});
 const usuarioActivo = getUsuarioActivo('Matias');
console.log(usuarioActivo);