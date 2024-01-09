/*
Diseña una expresion regular que valide el precio en euros
con dos decimales. Debe permitir utilizar como caracter
separador tanto el punto como la coma, y debe haber un 
espacio en blanco entre el precio y el caracter euro €
*/

let expresionRegular = /^(\d{1,3}(?:[.,]\d{3})*|[0-9]+)(?:[.,]\d{1,2})? €$/;
let precio = "100,50 €";

if (expresionRegular.test(precio)) {
  console.log("Precio válido");
} else {
  console.log("Precio inválido");
}


/*
^: Representa el inicio de la cadena. Esto asegura que la cadena comience con el patrón que sigue a continuación.

(...): Define un grupo de captura.

\d{1,3}: Coincide con uno a tres dígitos del 0 al 9.

(?:[.,]\d{3})*: El ?: indica un grupo de no captura. 
Este segmento busca un punto o una coma seguido de tres dígitos. 
El * al final permite que esta secuencia de separador y tres dígitos se repita cero o más veces.
|[0-9]+: El operador | actúa como una alternativa. Aquí, 
permite también un número de uno o más dígitos sin separadores.
(?:[.,]\d{1,2})?: Otro grupo de no captura que busca un punto o 
coma seguido de uno o dos dígitos decimales. El ? al final hace 
que este grupo sea opcional.

€: Coincide con el carácter euro literal.

$: Representa el final de la cadena. Esto asegura que la cadena termine justo después del símbolo euro.
*/