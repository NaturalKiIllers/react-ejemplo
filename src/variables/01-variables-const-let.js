// Variables y constantes
// var como tal ya no se ocupa, es por eso que nace const y let, a su vez estas funcionan globalmente o de forma local. 
//const  son variables que no se van a cambiar o no se van a renombrar, se almacena informacion
const nombre = 'Matias';
// let se utiliza para variables que si se van a modificar o renombrar en un futuro, si se mantendran sin modificaciones es mejor pasarlo a const
// no es necesario volver a escribir let si se modifica la variable, solo basta con poner el nombre y el valor que tendra nuevo. 
const apellido = 'Melo';

let edad = 20;
edad = 22;

console.log(nombre, apellido, edad);