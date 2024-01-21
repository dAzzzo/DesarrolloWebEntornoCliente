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

<<<<<<< HEAD

/*
=======
/*
function Perro(nombre, criadero, color, sexo) {
this.nombre = nombre;
this.criadero = criadero;
this.color = color;
this.sexo = sexo;
}

elPerro = new Perro("Gabby", "Laboratorio", "chocolate", "femenino");

elPerro.toString(); //devuelve [object Object]




>>>>>>> b13c3ad7f6a5ec558c1dd5c0b7e8cbff9aa902f5
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

<<<<<<< HEAD
$: Representa el final de la cadena. Esto asegura que la cadena termine justo después del símbolo euro.
*/
=======
x(?=y): Coincide con "x" solo si "x" va seguida de "y". Por ejemplo, /Jack(?=Sprat)/ reconocerá a 
"Jack" solo si va seguida de "Sprat". /Jack(?=Sprat|Frost)/ encontrará a "Jack" solo si va seguida 
de "Sprat" o "Frost". Sin embargo, ni "Sprat" ni "Frost" forman parte del resultado.

x(?!y): reconoce la "x" solo si la "x" no va seguida de "y". Por ejemplo, /\d+(?!\.)/ reconoce un número
solo si no va seguido de un punto decimal. /\d+(?!\.)/.exec('3.141') halla el "141" pero no el "3".

(?<=y)x: encontrará "x" solo si "x" está precedida por "y". Por ejemplo, /(?<=Jack)Sprat/ reconoce a 
"Sprat" solo si está precedido por "Jack". /(?<=Jack|Tom)Sprat/ empareja "Sprat" solo si está precedido 
por "Jack" o "Tom". Sin embargo, ni "Jack" ni "Tom" forman parte del resultado.

(?<!y)x: Reconoce la "x" solo si "x" no está precedida por "y". Por ejemplo, /(?<!-)\d+/ encuentra un 
número solo si no está precedido por un signo menos. /(?<!-)\d+/.exec('3') encuentra el "3". 
/(?<!-)\d+/.exec('-3') no lo reconoce porque el número está precedido por el signo menos.

(?!.*ñ): no debe haber  ningún caracter 'ñ'  en ninguna parte de la cadena que sigue después de este punto.

$: Representa el final de la cadena. Esto asegura que la cadena termine justo después del símbolo euro.



x|y: Coincide con "x" o "y". Por ejemplo, /verde|roja/ reconoce el "verde" en "manzana verde" y 
"roja" en "manzana roja".

[xyz] [a-c]: Un juego de caracteres. Coincide con cualquiera de los caracteres incluidos. Puedes 
especificar un rango de caracteres mediante el uso de un guión, pero si el guión aparece como el 
primero o último caracter entre corchetes, se toma como un guión literal para incluirse en el juego 
de caracteres como un caracter normal. También es posible incluir una clase de caracteres en un juego 
de caracteres.Por ejemplo, [abcd] es lo mismo que [a-d]. Coincide con la "b" en "brisket" y la "c" en 
"chop".Por ejemplo, [abcd-] y [-abcd] reconoce la "b" en "brisket", la "c" en "chop" y el "-" (guión) 
en "non-profit".Por ejemplo, [\w-] es lo mismo que [A-Za-z0-9_-]. Ambos reconocen la "b" en "brisket", 
la "c" en "chop" y la "n" en "non-profit".


[^xyz] [^a-c]: Un juego de caracteres negado o complementado. Es decir, hallan cualquier cosa que no 
esté encerrada entre corchetes. Puedes especificar un rango de caracteres mediante el uso de un guión, 
pero si el guión aparece como el primero o último caracter entre corchetes, se toma como un guión 
literal para incluirse en el juego de caracteres como un caracter normal. Por ejemplo, [^abc] es 
lo mismo que [^a-c]. Inicialmente halla la "o" en "bacon" y la "h" en "chuleta".

*/

/*
Diseñar mediante clases el siguiente problema. EN esta ciudad hay Empresarios que almacenan una lista de Hoteles y el codigo de su empresa
(deberas controlar con expresiones regulares que valor del codigo es correcto: se compone de 3 letras empezando unicamente la primera
    por mayuscula, seguido de un guion, seguido de un numero con una longitud de 1 a 5, y algun caracter especial como fin; por ejemplo "Cad-75634./").
    De las empresas podremos consultar la lista de hoteles y comprobar si contiene uno en particular. De los hoteles sabremos su nombre, ubicacion, el numero de estrellas, el precio de la habitacion
    el numero de habitaciones doble que tiene, y las reservas para una determinada fecha por un cliente. Ademas de los metodos get y set de los atrivutos, podras reservar una habitacion para 
    una fecha, anular una reserva de habitacion para fecha, consultar los clientes que tienen reserva paara una fecha y conocer las habitaciones disponiles para una fecha, y obtener  el precio final de una reserva que 
    dependera del precio y numero de estrellas ( una estrella le suma al precio un 2%, dos estrellas 5%, tres estrellas 7%, cuatro estrellas 10% y 5 estrellas 15%).
     De cada cliente se debe saber su nombre, apellidos, DNI y edad. Los clientes se podran dar de alta o de bajaa. 
     En particular el empresario 'Mario' co codigo 'Cad-75643./' tiee 3 hoteles en la ciudad hotel1, hotel2, hotel3.  
     En cada hotel tiene 10 habitaciones, excepto hotel3 que es de 20 habitaciones. Siendo su ibicacion, estrellas y precio valores que tu decides y comienzan todos sin reservas. Los requisitos para que un 
     cliente pueda gestionar una reserva de una habitacion en un hotel1 es una edad de 18-25(inclusive), para hotel2 es una edad de 26-35(inclusive), pra hotel3 es una edad de 36-80(inclusive).
     Funciones que se deben realizar:
     -Crear un empresario co las listas de hoteles
     -consultar la lista de hoteles para un empresario
     -comprobar si el empresario tiene el hotel con nombre "Hotel el puerto"
     -crear los hoteles requeridos
     -dar de alta al cliente+-reservar una habitacion para un cliente (cumpliendo la edad) en una fecha
     -intentaaar reservar una habitacion para un cliente (sin cumplir la edad) en una fecha
     -consultar los clientes que han reservado para una fecha
     -consultar las habitaciones libres para un hotel en una fecha
     -obtener el precio para una reserva
     -anular una reserva de un cliente para una fecha
     -dar una baja de cliente   
*/
>>>>>>> b13c3ad7f6a5ec558c1dd5c0b7e8cbff9aa902f5
