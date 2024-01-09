//Crea una clase donde demuestres la utilidad del objeto this

class Hamburguesa{
    constructor(pan, carne){
        this.pan = pan;
        this.carne = carne;
    }

    mostrarBurger(){
        console.log(`Tipo pan: ${this.pan}/ Tipo carne: ${this.carne}`);
    }
}

let hamburguesa1 = new Hamburguesa("Brioche", "Buey");
let hamburguesa2 = new Hamburguesa("Chapata", "Ternera");

//1º forma de presentarlo
console.log(hamburguesa1.mostrarBurger());
console.log(hamburguesa2.mostrarBurger());

//2º forma de presentarlo
hamburguesa1.mostrarBurger();
hamburguesa2.mostrarBurger();