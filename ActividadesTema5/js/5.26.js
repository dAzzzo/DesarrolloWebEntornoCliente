//Escribe una expresion regular que valide solo las letras
//del castellano: debe incluir mayusculas, minusculas y caracteres
//con tilde, pero no espacios en blanco

//RegExp es un objeto en JavaScript que representa una expresión
//regular. Se utiliza para realizar operaciones de búsqueda y 
//manipulación en cadenas  de texto basadas en patrones definidos.
let letrasAptas = new RegExp('^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$');
//Ambas son validas
// let letrasAptas = new RegExp('\D');

let texto = " Días ";

texto = texto.trim();

//Verifica si la cadena coincide con la expresión regular usando test
let comprobacion = letrasAptas.test(texto);


console.log(comprobacion);