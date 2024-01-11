// Escribe un programa con herencia de clases que permita 
// modelar los objetos telefono, fijo y movil, de manera
// que telefono sea la clase madre y fijo y movil, clases derivadas

class Telefono {
    constructor(fijo, movil) {
      this.fijo = fijo;
      this.movil = movil;
    }
  
    obtenerFijo() {
      return this.fijo;
    }
  
    obtenerMovil() {
      return this.movil;
    }
  
    establecerMovil(nuevoMovil) {
      this.movil = nuevoMovil;
    }
    mostar(){
      console.log(`${this.movil}/${this.fijo}`);
    }
  }
  
  
  let telefono = new Telefono("Nokia", "Iphone");
  

  console.log(telefono.obtenerFijo());
  console.log(telefono.obtenerMovil());
  
  telefono.establecerMovil("Xiaomi");
  console.log(telefono.obtenerMovil());