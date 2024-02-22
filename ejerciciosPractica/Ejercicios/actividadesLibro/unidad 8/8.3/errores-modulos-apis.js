function dibujarCarita() {
  let lienzo = document.getElementById("lienzo");
  if (lienzo.getContext) {
    let mano = lienzo.getContext("2d");
    mano.beginPath();
    mano.arc(75, 75, 50, 0, Math.PI * 2, true);
    mano.moveTo(110, 75);
    mano.arc(75, 75, 35, 0, Math.PI * 2, false);
    mano.moveTo(65, 65);
    mano.arc(60, 65, 5, 0, Math.PI * 2, true);
    mano.moveTo(95, 65);
    mano.arc(90, 65, 5, 0, Math.PI * 2, true);
    mano.stroke();
  }
}
dibujarCarita();
