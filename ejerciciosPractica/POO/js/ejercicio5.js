/*
Ejercicio de Herencia - Clases de Animales
Crea una clase Animal con propiedades como nombre y edad. 
Esta clase debe tener un método emitirSonido() que imprima 
un sonido genérico y un método detalles() que muestre el 
nombre y la edad del animal.

Crea una clase Perro que extienda de Animal. La clase 
Perro debe añadir una propiedad raza y sobrescribir el 
método emitirSonido() para que imprima el sonido 
característico de un perro.

Crea instancias de las clases Animal y Perro. Utiliza 
métodos para mostrar detalles y emitir sonidos tanto de 
instancias de Animal como de Perro. Verifica que los 
métodos se comporten según lo esperado debido a la herencia.

Recuerda utilizar la palabra clave super para llamar a 
métodos del padre cuando sea necesario y sobrescribir 
métodos en la clase hija para modificar su comportamiento 
según sea necesario.
*/

class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido(){
        console.log("Sonido genérico del animal...");
    }

    detalles(){
        console.log(`Nombre del animal: ${this.nombre}`);
        console.log(`Edad del animal: ${this.edad}`);
        console.log(`-----------`);
    }
}

class Perro extends Animal{
    constructor(nombre, edad, raza){
        super(nombre, edad);
        this.raza = raza;
    }

    emitirSonido(){
        console.log("Guau guau guau");
    }

    detalles(){
        super.detalles();
        console.log(`Sonido del perro: ${this.raza}`);
    }
}

let animal = new Animal('Lola', 3);
animal.emitirSonido();
animal.detalles();

let perro = new Perro('Lola', 3, 'Bodegero');
perro.emitirSonido();
perro.detalles();