//Crea una clase pelicula con la info de nombre de la pelicula
//año de estreno, duracion, genero, los seis actores o actrices 
//más importantes, la url de su cartel promocional y su director,
//crear una accion que permita mostrar por consola toda la info. 
//El constructor recibira los datos en una cadena JSON de la que 
//se sacaran los valores de cada propiedad.

let pelicula = {
    nombrePelicula: 'Oppenhaimer',
    anioEstreno: '2023',
    duracion: 180,
    genero: 'Historia',
    url: 'https://cartelera-cine-cadiz.com',
    director: 'Nolan',
    actores: {
        actor1: 'No especificado',
        actor2: 'No especificado',
        actor3: 'No especificado',
        actor4: 'No especificado',
        actor5: 'No especificado',
        actor6: 'No especificado'
    }
};



//stringify convierte un objeto JS a una cadena en formato JSON
console.log(JSON.stringify(pelicula));
console.log(typeof(JSON.stringify(pelicula)));
console.log('-------------------------');
