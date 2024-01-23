/*
Ejercicio 3: Gestión de Automóviles

Crea una clase Automovil con propiedades como marca, 
modelo, año, y métodos para calcular el tiempo de uso, 
mostrar detalles del automóvil y actualizar su año de fabricación.
*/

class Automovil{
    constructor(marca, modelo, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    tiempoUso(){
        let fechaActual = new Date();
        let difFechas = fechaActual - this.anio;

        let dias = difFechas / (1000 * 60 * 60 * 24);

        return Math.floor(dias);
    }

    mostrarDetalles() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Año fabricación: ${this.anio}`);
        console.log(`Tiempo de uso en días: ${this.tiempoUso()}`);
        console.log('-------------------------');
    }
}

let automovil = new Automovil('Opel', 'Corsa', 2016);
automovil.mostrarDetalles();