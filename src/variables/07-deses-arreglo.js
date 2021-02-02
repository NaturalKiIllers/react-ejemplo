//Desestructuracion de arreglos 
const personajes = ['Goku', 'Vegeta', 'Freezer'];
const [, ,p2] = personajes;
console.log(p2);

const retornaArreglo = () => {
    return['ABC',123];
}
const [letras, numero]= retornaArreglo()
console.log(letras, numero);

//tarea
const state = (valor) => {
    return [ valor, () => {console.log('Hola Mundo')}];
}

const[nombre, setNombre] = state('Goku');
console.log(nombre);
setNombre();