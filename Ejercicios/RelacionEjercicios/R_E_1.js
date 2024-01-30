/*Realizar la serie de Fibonacci.
n = n-1 + n-2
*/


function Fibonacci(serie) {

    if (serie === 0) {
        return 0;
    } else if (serie === 1) {
        return 1;
    } else {
        let a = 0;
        let b = 1;
        let resultado = 0;

        //Iniciamos desde el dos ya que el 0 y 1 ya estan creados
        //Por lo tanto tiene que contar el 2 (<=)
        for (let i = 2; i <= serie; i++) {
            resultado = a + b;
            a = b;
            b = resultado;
        }
        return resultado;
    }
}
let serie = 100;
let serieFibonacci = Fibonacci(serie);
document.write("El número de Fibonacci es: " + serieFibonacci);