/*
Ejercicio de POO: Creación de una Clase "Libro"

Crea una clase llamada Libro que represente un libro 
con las siguientes propiedades:

titulo: el título del libro.
autor: el autor del libro.
anioPublicacion: el año de publicación del libro.

La clase debe tener un método llamado mostrarInformacion 
que imprima por consola la información del libro en un 
formato legible.
*/

class Libro {
    constructor(titulo, autor, anioPublicacion){
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }

    mostrarInformacion(){
        console.log(`Títutlo del libro: ${this.titulo}`);
        console.log(`Autor del libro: ${this.autor}`);
        console.log(`Año de publicación del libro: ${this.anioPublicacion}`);
    }
}

// Crear instancias de la clase Libro
let libro1 = new Libro("El Señor de los Anillos", "J.R.R. Tolkien", 1954);
let libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);

// Utilizar el método mostrarInformacion
libro1.mostrarInformacion();
console.log("--------------------------");
libro2.mostrarInformacion();