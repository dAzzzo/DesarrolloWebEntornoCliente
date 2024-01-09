/*
Escribe una expresion regular que permita validar una URL de sitios
web, cuyos requisitos son que empiece por https://, termine en .es y 
en medio no haya ninguna ñ
*/

/*
^: Indica que la coincidencia debe comenzar desde el inicio de la cadena.
https:\/\/: Busca la coincidencia literal de https://, donde \ se utiliza para escapar los caracteres especiales /.
.*: Representa cualquier carácter (.) repetido cero o más veces (*). Esto significa que puede haber cualquier cosa después de https://.
\.es: Busca la coincidencia literal de .es, donde \ se utiliza para escapar el carácter .
*/
let expresionRegular = /^https:\/\/(?!.*[ñÑ]).*\.es$/;
let url = "https://coches.es";


//test toma una cadena y verifica si coincide con el patrón de la expresión regular.
if(expresionRegular.test(url)){
    console.log('URL correcta');
}else{
    console.log('URL incorrecta');
}
