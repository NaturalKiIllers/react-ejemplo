//arreglos es una coleccion de una informacion dentro de una misma variable.
// un arreglo no tiene limite, siempre se le puede hacer un push para aumentar su capacidad.

const arreglo = [1,2,3,4];
//arreglo.push('Matias')
//arreglo.push(2)

//No es recomendable hacer un push para incluir datos al arreglo debido a que este modifica los datos internos de estos mismos.
let arreglo2 = [...arreglo, 5];

const arreglo3 =arreglo2.map( function(numero){
    return numero * 5;
})
// si no se deja un return en especifico, el dato que devolvera es indefinido, si es string y con una palabra, se repitira esa palabra tantas datos tenga el arreglo. 
// el unico que se modifica con la funcion anterior es el arreglo3, no afecta en nada al 2. 
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
