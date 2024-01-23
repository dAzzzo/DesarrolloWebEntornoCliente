/*
Ejercicio 4: Gestión de Películas

Diseña una clase Pelicula con propiedades como 
titulo, director, año, y métodos para mostrar 
detalles de la película, actualizar el nombre 
del director y añadir géneros a la película.
*/

class Pelicula{
    constructor(titulo, director, anio){
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.generos = [];
    }

    obtenerNombre(){
        return this.director;
    }

    actualizarNombre(nombre2){
        this.director = nombre2;
    }

    anadirGenero(genero){
        this.generos.push(genero);
    }

    mostrarDetalles() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Director: ${this.director}`);
        console.log(`Año: ${this.anio}`);
        console.log(`Géneros: ${this.generos.join(" / ")}`);
        console.log('-------------------------');
    }
}

let pelicula = new Pelicula('Batman Begins', 'Christofer Nolan', 2008);

console.log(pelicula.mostrarDetalles());


pelicula.actualizarNombre('Cristian Nolan');

pelicula.anadirGenero('Romance');
pelicula.anadirGenero('Terror');
pelicula.mostrarDetalles();

