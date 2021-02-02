import getHeroeById from './variables/08-import-export'

//const promesa = new Promise( (resolve, reject) => {
//    setTimeout( () => {
//        const heroe = getHeroeById(2);
//       resolve(heroe);

//    },2000)
//});

//promesa.then( (heroe) => {
//    console.log('heroe', heroe);
//});

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if(heroe){
               resolve(heroe); 
            }
            else{
              reject('Heroe no encontrado');  
            }
            
        },2000)
    });
    
}
//then y catch van en la misma getheroesbyidasync
getHeroeByIdAsync(4)
//cuando esta correcto no es necesario poner todo el then que esta mas arriba, basta con simplificar solamente con console.log y ya traera lo solicitado de acuerdo al parametro.
.then(console.log)
.catch( err => console.warn(err));
