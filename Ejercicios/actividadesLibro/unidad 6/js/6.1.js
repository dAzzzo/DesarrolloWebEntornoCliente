//Métodos del objeto window
let prmpt = window.prompt("Indica una cantidad de pixeles:");
if (prmpt !== null) {
  console.log("El usuario pulso aceptar en la introducción de datos");
  let confirmar = window.confirm(`¿Estás seguro de aplicar ${prmpt}px`);
  if (confirmar === false) {
    console.log("El usuario no estaba seguro");
  } else {
    console.log("El usuario estaba seguro");
    window.resizeBy(prmpt, prmpt);
    console.log(`Ventana redimensionada ${prmpt}x${prmpt}px`);
  }
} else {
  console.log("El usuario canceló la introducción de datos");
}
