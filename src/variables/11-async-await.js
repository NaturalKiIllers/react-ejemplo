//async es poder resolver una promesa pero mas abreviada o mas corta
//await es esperar que una secuencia o linea termine para aplicarse la siguiente 
//para los errores se utiliza try catch

try{
    const getImagen = async() =>{
        const apiKey = 'dAfPyqGR981AC5qSV92YZcQUUZeHBOLi';
    
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }
    getImagen();
}
catch(error){
    console.warn(error);
}



