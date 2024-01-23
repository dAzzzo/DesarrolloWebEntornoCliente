// Crear un programa que permita ingresar 9 
// números separados por espacios, y los 
// distribuya en una grilla de 3x3. El programa 
// debe decir si hay algún número que se repite 
// en una fila, columna, o diagonal.

// [
//     [2, 7, 12],
//     [8, 23, 1],
//     [9, 45, 7]
//   ] // ✅

//   [
//     [2, 7, 12],
//     [8, 23, 1],
//     [23, 45, 7]
//   ] // 🚫

function comprobarRepetidos(grilla) {
    // Función para comprobar si hay elementos repetidos en un array
    const tieneRepetidos = arr => new Set(arr).size !== arr.length;

    // Comprobación de filas y columnas
    for (let i = 0; i < grilla.length; i++) {
        if (tieneRepetidos(grilla[i])) {
            return false;
        }
        const columna = grilla.map(fila => fila[i]);
        if (tieneRepetidos(columna)) {
            return false;
        }
    }

    // Comprobación de diagonal principal
    const diagonalPrincipal = grilla.map((fila, i) => fila[i]);
    if (tieneRepetidos(diagonalPrincipal)) {
        return false;
    }

    // Comprobación de diagonal secundaria
    const diagonalSecundaria = grilla.map((fila, i) => fila[grilla.length - 1 - i]);
    if (tieneRepetidos(diagonalSecundaria)) {
        return false;
    }

    return true;
}

function distribuirEnGrilla(str) {
    const numeros = str.split(" ").map(Number);
    if (numeros.length !== 9) {
        return "Debe ingresar 9 números separados por espacios.";
    }

    const grilla = [];
    for (let i = 0; i < 9; i += 3) {
        grilla.push(numeros.slice(i, i + 3));
    }

    return grilla;
}

// Entrada de usuario
const inputNumeros = prompt("Ingrese 9 números separados por espacios:");
const grilla = distribuirEnGrilla(inputNumeros);

if (grilla === "Debe ingresar 9 números separados por espacios.") {
    console.log(grilla);
} else {
    const resultado = comprobarRepetidos(grilla) ? "✅ No hay números repetidos." : "🚫 Hay números repetidos.";
    console.log(resultado);
}
