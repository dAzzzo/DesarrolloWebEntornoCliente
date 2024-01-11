/*
Diseña una clase “Aeropuerto”. Tendrá como atributos “nombre”, 
“ciudad” y “numeroVuelosDiarios”. Cada vuelo diario se 
representará como una objeto de la clase “Vuelo”. En ella 
se guardaran los atributos “codigo”, “hora_llegada” y “hora_salida”.

Implementa métodos en aeropuerto y vuelo para modificar la hora de 
llegada, para modificar la hora de salida y para comprobar si la 
hora de salida es posterior a la hora de llegada.
*/

class Aeropuerto {
    constructor(nombre, ciudad, numeroVuelosDiarios, vuelos) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.numeroVuelosDiarios = numeroVuelosDiarios;
        this.vuelo = vuelos;
    }

    modificarHoraLlegada(){
        return this.hora_llegada;
    }

    modificarHoraSalida(){
        return this.hora_salida;
    }

    diffHoras() {
        if(this.hora_salida > this.hora_llegada){
            console.log("La hora de salida es mayor que la hora de llegada :)");
        }else{
            console.log("La hora de salida no es mayor que la hora de llegada :(");
        }
    }

    detallesAeropuerto() {
        console.log(`Nombre del aeropuerto: ${this.nombre}`);
        console.log(`Ciudad del aeropuerto: ${this.ciudad}`);
        console.log(`Número de vuelos diarios: ${this.numeroVuelosDiarios}`);
        console.log(`\nVuelo:`);
        this.vuelo.forEach((titulo) => {
            console.log(`Código del vuelo: ${titulo.codigo}`);
            console.log(`Hora de llegada: ${titulo.hora_llegada}`);
            console.log(`Hora de salida: ${titulo.hora_salida}`);
        });
        console.log(`------------`);
    }
}

let aeropuerto = new Aeropuerto('Aeropuerto de Sevilla (SVQ)', 'Sevilla', 140, [{ codigo: '754B', hora_llegada: 13, hora_salida: 14 }]);

aeropuerto.detallesAeropuerto();

aeropuerto.vuelo[0].hora_llegada = 12;
aeropuerto.vuelo[0].hora_salida = 13;
aeropuerto.detallesAeropuerto();

aeropuerto.diffHoras();

