let mapa = new Map();
mapa.set("34565", "Cádiz");
mapa.set("24521", "Rota");
mapa.set("56667", "Sanlucar");
mapa.set("3332", "El Puerto");
mapa.set("11124", "Jerez");

function checkearMapa(unMapa) {
  for (let [clave, valor] of unMapa) {
    console.log(clave);
    if (clave.length != 5) {
      unMapa.delete(clave);
    }
  }
}
checkearMapa(mapa);
console.info(mapa);
