/*
Ejercicio: Validación de Números Telefónicos

Crea un objeto llamado ValidadorTelefono que tenga un 
método llamado validar que acepte un número de teléfono 
como argumento y determine si es un número de teléfono 
válido o no. Un número de teléfono válido debe cumplir 
con las siguientes condiciones:

Debe tener exactamente 10 dígitos.
El primer dígito no puede ser un cero.

Usa expresiones regulares para realizar la validación 
dentro del método validar. El método debería devolver 
true si el número es válido y false si no lo es.
*/

let ValidadorTelefono = {
    validar: function (numero) {

        /*
        (?=.*[a-z]): Un lookahead positivo para garantizar que haya al menos una letra minúscula.
        (?=.*[A-Z]): Un lookahead positivo para garantizar que haya al menos una letra mayúscula.
        (?=.*\d): Un lookahead positivo para garantizar que haya al menos un número.
        (?=.*[@$!%*?&]): Un lookahead positivo para garantizar que haya al menos un carácter especial entre @, $, !, %, *, ? y &.
        [A-Za-z\d@$!%*?&]{8,}: Coincide con una cadena que contiene al menos 8 caracteres de entre letras mayúsculas, minúsculas, dígitos y los caracteres especiales mencionados.
        */

          // Expresión regular corregida
          let regex = /^(?![0])[0-9]{10}$/;

          // Test de la expresión regular
          let esValido = regex.test(numero);
  
          return esValido;
    }
};

// Ejemplos de uso
console.log(ValidadorTelefono.validar("1234567890")); // Debería devolver true
console.log(ValidadorTelefono.validar("0123456789")); // Debería devolver false
console.log(ValidadorTelefono.validar("555-123-4567")); // Debería devolver false
