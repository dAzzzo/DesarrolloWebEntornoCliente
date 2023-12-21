/*Programa una funcion que reciba un array de cadenas de caracteres y que por medio del 
metodo filter devuelva aquellos caracteres que no forman parte del 
alfabeto español. Prueba la funcion incluyendo palabras con caracteres 
como ^, $ o &

Esto es el codigo ASCII para las mayusculas
codigo >= 65 && codigo <= 90

Y este para las minusculas
codigo >= 97 && codigo <= 122

/g es usado para buscar globalmente y que 
coincida con todas las ocurrencias del patrón de la cadena

/[^A-Za-z0-9_]/g es la expresión regular utilizada con .replace().

[^A-Za-z0-9_] es el patrón que coincide con cualquier carácter 
que no sea una letra (mayúscula o minúscula), un dígito o un 
guion bajo.

La función test() en JavaScript se utiliza en expresiones 
regulares para verificar si hay una coincidencia entre un 
patrón y una cadena. Devuelve true si encuentra una 
coincidencia y false si no la encuentra.
*/



function comprobarArr() {

    let palabras = ['hola', 'adios', '$', 'perro', '&', 'gato', '^', 'agua'];

    let resultado = palabras.filter(palabra => {
       return /[^A-Za-z0-9_]/.test(palabra);});

    return resultado;
}

let resultado = comprobarArr();
document.write(resultado);