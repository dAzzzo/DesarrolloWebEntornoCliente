/*
    BIBLIOTECA MATEMÁTICA
    Crea un móduclo que contenga dos constantes matemáticas y tres funciones que consideres útiles.
    Solo debes exportar una constante y dos funciones. Luego escribe un programa que haga uso del módulo,
    importando solo aquellos elementos que vayas a usar.
    */

//matematico

//Constantes matemáticas
export let PI = 3.14159;
export let E = 2.71828;

//Funciones útiles
export function cuadrado(numero) {
  //Calcula el cuadrado de un número
  return numero ** 2;
}

export function areaCirculo(radio) {
  //Calcula el área de un círculo dado su radio
  return PI * radio ** 2;
}
