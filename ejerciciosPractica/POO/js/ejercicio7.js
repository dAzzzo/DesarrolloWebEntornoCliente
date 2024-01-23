/*
Validación de Contraseñas

Diseña una expresión regular en JavaScript para validar contraseñas con los siguientes requisitos:

La longitud de la contraseña debe ser de al menos 8 caracteres.
Debe contener al menos una letra minúscula.
Debe contener al menos una letra mayúscula.
Debe contener al menos un número.
Debe contener al menos un carácter especial, que puede ser cualquiera de los siguientes: !, @, #, $, %, ^, &, *.
Después de crear la expresión regular, utilízala para validar las siguientes contraseñas:

"Passw0rd!" (debería ser válida)
"1234abcd" (no debería ser válida)
"SecurePW123" (no debería ser válida)

Recuerda comentar el código para explicar cada parte de la expresión regular y asegúrate 
de entender cómo funciona cada requisito. ¡Buena suerte!
*/

/*
(?=.*[a-z]): Un lookahead positivo para garantizar que haya al menos una letra minúscula.
(?=.*[A-Z]): Un lookahead positivo para garantizar que haya al menos una letra mayúscula.
(?=.*\d): Un lookahead positivo para garantizar que haya al menos un número.
(?=.*[@$!%*?&]): Un lookahead positivo para garantizar que haya al menos un carácter especial entre @, $, !, %, *, ? y &.
[A-Za-z\d@$!%*?&]{8,}: Coincide con una cadena que contiene al menos 8 caracteres de entre letras mayúsculas, minúsculas, dígitos y los caracteres especiales mencionados.
*/

let expresionRegularContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

let contraseña1 = 'Passw0rd!';
let contraseña2 = '1234abcd';
let contraseña3 = 'SecurePW123';

console.log(contraseña1 + ': ' + expresionRegularContraseña.test(contraseña1));
console.log(contraseña2 + ': ' + expresionRegularContraseña.test(contraseña2));
console.log(contraseña3 + ': ' + expresionRegularContraseña.test(contraseña3));