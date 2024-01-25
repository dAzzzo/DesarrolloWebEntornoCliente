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
