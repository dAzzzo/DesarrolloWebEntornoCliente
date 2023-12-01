//Ejercicio 1

let longitud = prompt("Introduce un número :");

longitud = parseInt(longitud);

//FORMA 1
// Verificamos que la longitud sea un número impar

// if (longitud % 2 === 0) {
//   document.write("El número ingresado no vale.");
// } else {
//   for (let i = 0; i < longitud; i++) {
//     for (let j = i; j < longitud; j++) {
//       document.write(" ");
//     }
//     for (let z = 0; z < i * 2 - 1; z++) {
//       document.write("*");
//     }
//     document.write("</br>");
//   }
// }

//FORMA 2
if (longitud % 2 === 0) {
  document.write("El número ingresado no vale.");
} else {
  for (let i = 1; i <= longitud; i++) {
    let asteriscos = " ";
    for (let j = 1; j <= i * 2 - 1; j++) {
      asteriscos += "*";
    }
    //Esto si funciona
    console.log(asteriscos);
    //Esto no
    document.write(asteriscos);
  }
}

//FORMA 3
// let asteriscos = "";
// for (let i = 1; i <= longitud; i++) {
//   asteriscos += "*";

//   //Esto si funciona
//   console.log(asteriscos);
//   //Esto no
//   document.write(asteriscos);
// }

//FORMA 4
// function imprimirAsteriscos(n) {
//   if (n > 0) {
//     imprimirAsteriscos(n - 1);
//     console.log("*".repeat(n));
//   }
// }

// imprimirAsteriscos(longitud);
