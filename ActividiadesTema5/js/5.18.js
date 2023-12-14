// Crea una clase con dos propiedades y dos metodos deonde se evidencien los conceptos
// de abstranccion y encpsulamiento de la programacion orientadaa a objetos

class Persona {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  obtenerNombre() {
    return this._nombre;
  }

  obtenerEdad() {
    return this._edad;
  }

  establecerEdad(nuevaEdad) {
    this._edad = nuevaEdad;
  }
}

let persona = new Persona("Juan", 30);

// Accediendo a los métodos de abstracción y encapsulamiento
console.log(persona.obtenerNombre());
console.log(persona.obtenerEdad());

persona.establecerEdad(35);
console.log(persona.obtenerEdad());
