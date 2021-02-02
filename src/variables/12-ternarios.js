const activo = true;

//const mensaje = ( activo ) ? 'activo' : 'inactivo';
//esto lo que hace es una forma resumida de poder realizar if, en donde primero se pone la condicion, luego el ? da paso a ver si se cumple se realiza activo si es falso 
//saldra inactivo.
//Pero se puede hacer aun mas corto y rapido, para el caso de que solo sea activo

const mensaje = activo && 'Activo';
console.log(mensaje);