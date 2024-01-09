//Diseña una jerarquia de clases donde musica y tecnologia
//sean clases derivadas de aula, para modelar las instalaciones
//de un institituto de enseñanza secundaria. Elige un metodo con el 
//que evidenciar el concepto del polimorfirmo

class Aula  {
    constructor(musica, tecnologia){
        this.musica = musica;
        this.tecnologia = tecnologia;
    }

    obtenerMusica(){
        return this.musica;
    }

    obtenerTecno(){
        return this.tecnologia;
    }

    establecerMusica(nuevaClase1){
        this.musica = nuevaClase1;
    }

    establecerTecno(nuevaClase2){
        this.tecnologia = nuevaClase2;
    }
}

let aula = new Aula("Musica", "Tecnologia");

console.log(aula.obtenerMusica());
console.log(aula.obtenerTecno());

aula.establecerMusica("La clase de musica ha cambiado a ser de Ingles");
console.log(aula.obtenerMusica());

aula.establecerTecno("La clase de Tecnologia ha cambiado a ser de Fisica");
console.log(aula.obtenerTecno());