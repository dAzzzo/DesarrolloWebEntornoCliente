// Crear un programa que permita ingresar 
// perros y gatos y devuelva un mensaje 
// con los perros agrupados por un lado 
// y los gatos por otro. 

// Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
// Resultado: 🐶🐶🐶🐶🐱🐱🐱

function ordenar(texto) {
    let perros = '';
    let gatos = '';

    for (let i = 0; i < texto.length; i++) {
       if(texto.charAt(i) === '🐶' || texto.charAt(i) === 'P'){
        perros += 'P';
       }else if(texto.charAt(i) === '🐱' || texto.charAt(i) === 'G'){
        gatos += 'G';
       }
    }

    let resultado = perros +  gatos;
    return resultado;
}

let texto = prompt("Ingrese tantos 🐶(P) o 🐱(G) como quiera:");
let resultado = ordenar(texto);
console.log("El resultado ordenado es: " + resultado);
document.write("El resultado ordenado es: " + resultado);
