//Protipos

function Viaje(origen, destino, dias, precio) {
  this.origen = origen;
  this.destino = destino;
  this.dias = dias;
  this.precio = precio;
  this.mostrar = function () {
    console.log("${this.origen}/${this.destino}");
    console.log("durante ${this.origen} días:EUR${this.destino}");
  };
}
let viaje1 = new Viaje("Barcelona", "Ibiza", 2, 112);
console.log(viaje1.__proto__);
console.log(viaje1.__proto__.__proto__);
