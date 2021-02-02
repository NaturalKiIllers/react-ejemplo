import heroes,{owners} from '../media/heroes';

//mi forma de hacerlo, pero eso esta limitado exclusivamente al dato que el dato pedido no es modificable mas que cambiar la id que se busca.
const resultado = heroes.find( heroes => heroes.id === 2);
console.log(resultado);

//mejor metodo 
const getHeroeById = (id) => {
    return heroes.find( (heroes) => heroes.id === id);
}
//const getHeroeById = (id) => heroes.find( (heroes) => heroes.id === id);

console.log(getHeroeById(3));

const getHeroeByOwner = (owner) => heroes.filter( (heroes) => heroes.owner === owner);
//filtrar por un caracter en especifico.s
console.log(getHeroeByOwner('DC'));

//export de owners
console.log(owners);

export default getHeroeById;