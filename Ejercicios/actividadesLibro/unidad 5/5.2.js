//Creamos un json
let receta = {
  nombre: "Perrito Caliente",
  tElaboracion: 2,
  formato: {
    normal: "simple",
    mixto: "queso",
    completo: "lechuga-tomate",
  },
  ingredientes: ["salchicha", "pan", "salsa"],
};

console.log(JSON.stringify(receta));
console.log(typeof JSON.stringify(receta));

let mapa = new Map();
mapa.set("1", "coche");
mapa.set("2", "moto");
mapa.set("3", "bici");
mapa.set("4", "patin");
function checkMap(unMapa) {
  for (let [clave, valor] of unMapa) if (clave.length != 5) unMapa.delete(clave);
}
checkMap(mapa);
console.info(mapa);
