//Creamos una funcion que calcule la potencia de un numero

//Introudcimos los datos
let base = parseInt(prompt("Introduzca un número como base: "));
let exponente = parseInt(prompt("Introduzca un número como exponente: "));

//Creamos la funcion para comprobar que si el exponente es 0 salga 1
//si el exponente es -1 no vale
function comprobarExponente(exponente) {
  if (exponente === 0) {
    return 1;
  } else {
    for (let i = 1; i < exponente; i++) {
      exponente *= -1;
    }
    return false;
  }
}

//comprobamos las potencias
function potencia(base, exponente) {
  for (let i = 0; i < exponente; i++) {
    exponente = base * (exponente - 1);
  }

  let potenciaF = base * exponente;
  return potenciaF;
}

let potenciaF = potencia(base, exponente);
console.log(potenciaF);
