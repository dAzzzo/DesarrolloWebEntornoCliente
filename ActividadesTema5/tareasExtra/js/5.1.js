/*
Diseña una clase “Colegio”. Dicha clase tendrá como atributos 
“nombre”, numeroAulas” y “numeroAlumnos”. Cada alumno se representará 
como un objeto de la clase “Alumno”. En ella se guardaran los 
atributos “DNI”, “nombre” y “notaMedia”.

Implementa métodos en Colegio y Alumno para modificar la nota media.
*/

class Colegio {
    constructor(nombre, numeroAulas, numeroAlumnos, alumnos) {
      this.nombre = nombre;
      this.numeroAulas = numeroAulas;
      this.numeroAlumnos = numeroAlumnos;
      this.alumno = alumnos;
    }
  
    modificarNota() {
      return this.notaMedia;
    }
  
    detallesColegio() {
      console.log(`Nombre del colegio: ${this.nombre}`);
      console.log(`Número de aulas: ${this.numeroAulas}`);
      console.log(`Número de alumnos: ${this.numeroAlumnos}`);
      console.log(`\nAlumno:`);
      this.alumno.forEach((titulo) => {
        console.log(`DNI del alumno: ${titulo.DNI}`);
        console.log(`Nombre del alumno: ${titulo.nombre}`);
        console.log(`Nota Media del alumno: ${titulo.notaMedia}`);
      });
      console.log(`------------`);
    }
  }
  
  let colegio = new Colegio("La Gaviota", 15, 350, [
    {
      DNI: `23224456C`,
      nombre: `Paco`,
      notaMedia: 7,
    },
  ]);
  
  colegio.detallesColegio();
  colegio.alumno[0].notaMedia = 9;
  colegio.detallesColegio();