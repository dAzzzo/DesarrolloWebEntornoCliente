/*
Ejercicio: Validación de Correo Electrónico

Crea un objeto llamado ValidadorCorreo que tenga un 
método llamado validar que acepte una dirección de correo 
electrónico como argumento y determine si es una dirección 
de correo válida o no. Una dirección de correo válida 
debe cumplir con las siguientes condiciones:

Debe contener un solo símbolo '@'.
Debe tener al menos un carácter antes del '@'.
Después del '@', debe tener al menos un punto ('.') y al menos dos caracteres más.

Usa expresiones regulares para realizar la validación dentro del método validar. 
El método debería devolver true si la dirección de correo es válida y false si no lo es.
*/

let ValidarCorreo = {
    validar: function (correo){
        //[^@\s] -->
        //[^...]:  conjunto de caracteres negados
        //@\s: excluimos el @ y los espacios en blanco 
        let regex = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;

        let esValido = regex.test(correo);

        return esValido;
    }
};

console.log(ValidarCorreo.validar("usuario@dominio.com"));     // Debería devolver true
console.log(ValidarCorreo.validar("correo-invalido@dominio")); // Debería devolver false
console.log(ValidarCorreo.validar("usuario@dominio"));