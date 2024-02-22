// Definir el mazo de cartas
//Se define el mazo de cartas
let mazo = [
  { carta: "1 de Copas", valor: 1 },
  { carta: "2 de Copas", valor: 2 },
  { carta: "3 de Copas", valor: 3 },
  { carta: "4 de Copas", valor: 4 },
  { carta: "5 de Copas", valor: 5 },
  { carta: "6 de Copas", valor: 6 },
  { carta: "7 de Copas", valor: 7 },
  { carta: "8 de Copas", valor: 0.5 },
  { carta: "9 de Copas", valor: 0.5 },
  { carta: "10 de Copas", valor: 0.5 },
  { carta: "1 de Bastos", valor: 1 },
  { carta: "2 de Bastos", valor: 2 },
  { carta: "3 de Bastos", valor: 3 },
  { carta: "4 de Bastos", valor: 4 },
  { carta: "5 de Bastos", valor: 5 },
  { carta: "6 de Bastos", valor: 6 },
  { carta: "7 de Bastos", valor: 7 },
  { carta: "8 de Bastos", valor: 0.5 },
  { carta: "9 de Bastos", valor: 0.5 },
  { carta: "10 de Bastos", valor: 0.5 },
  { carta: "1 de Oros", valor: 1 },
  { carta: "2 de Oros", valor: 2 },
  { carta: "3 de Oros", valor: 3 },
  { carta: "4 de Oros", valor: 4 },
  { carta: "5 de Oros", valor: 5 },
  { carta: "6 de Oros", valor: 6 },
  { carta: "7 de Oros", valor: 7 },
  { carta: "8 de Oros", valor: 0.5 },
  { carta: "9 de Oros", valor: 0.5 },
  { carta: "10 de Oros", valor: 0.5 },
  { carta: "1 de Espadas", valor: 1 },
  { carta: "2 de Espadas", valor: 2 },
  { carta: "3 de Espadas", valor: 3 },
  { carta: "4 de Espadas", valor: 4 },
  { carta: "5 de Espadas", valor: 5 },
  { carta: "6 de Espadas", valor: 6 },
  { carta: "7 de Espadas", valor: 7 },
  { carta: "8 de Espadas", valor: 0.5 },
  { carta: "9 de Espadas", valor: 0.5 },
  { carta: "10 de Espadas", valor: 0.5 },
];

// Función para barajar el mazo
function barajar(mazo) {
  for (let i = mazo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
  }
  return mazo;
}

// Función para obtener el valor de una carta
function obtenerValorCarta(carta) {
  return carta.valor;
}

// Función para jugar una ronda
function jugarRonda() {
  const carta = mazo.pop();
  return carta;
}

// Función para sumar el valor de las cartas en la mano
function sumarMano(mano) {
  let suma = 0;
  for (let i = 0; i < mano.length; i++) {
    suma += mano[i].valor;
  }
  return suma;
} // Función para determinar si se ha sobrepasado 7 y medio
function sobrepasoSieteYMedio(puntaje) {
  return puntaje > 7.5;
}

// Juego
barajar(mazo);
const manoJugador = [jugarRonda(), jugarRonda()]; // El jugador toma dos cartas
console.log("Tus cartas son:");
console.log(manoJugador);

let continuar = true;

while (continuar) {
  const respuesta = prompt("¿Quieres otra carta? (s/n)");
  if (respuesta.toLowerCase() === "s") {
    const nuevaCarta = jugarRonda();
    manoJugador.push(nuevaCarta);
    console.log("Tu nueva carta es:");
    console.log(nuevaCarta);
    const puntaje = sumarMano(manoJugador);
    console.log("Tu puntaje actual es:", puntaje);
    if (sobrepasoSieteYMedio(puntaje)) {
      console.log("¡Has perdido! Te pasaste de 7 y medio.");
      continuar = false;
    }
  } else {
    continuar = false;
  }
}
