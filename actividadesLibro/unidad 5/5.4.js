function validarEmail(email) {
  let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regExp.test(email)) {
    console.log("Formato de email correcto");
  } else {
    console.log("Formato de email incorrecto");
  }
}

validarEmail("nombre@gmail.com");
validarEmail("email@gmail.com");

// ^: Indica el inicio de la cadena.
// \w+: Representa uno o más caracteres alfanuméricos o guiones bajos (este patrón debe aparecer al menos una vez).
// ([\.-]?\w+)*: Aquí se establece la estructura para permitir puntos (.), guiones (-) o guiones bajos (_) seguidos de más caracteres alfanuméricos. El asterisco (*) al final indica que esta secuencia puede aparecer cero o más veces.
// @: Busca el símbolo "@".
// \w+: Representa uno o más caracteres alfanuméricos después del símbolo "@".
// ([\.-]?\w+)*: Similar al primer grupo, permite puntos, guiones o guiones bajos seguidos de caracteres alfanuméricos antes del símbolo de punto en el dominio.
// (\.\w{2,3})+: Captura el dominio, permitiendo un punto seguido de entre 2 y 3 caracteres alfanuméricos (como ".com", ".org", etc.). El + al final permite que esta estructura de dominio aparezca una o más veces.
// $: Indica el final de la cadena.

// Esta expresión regular valida direcciones de correo electrónico que siguen un patrón específico de texto antes y después
// del símbolo "@", seguido por un dominio de nivel superior de entre 2 y 3 caracteres después del punto. Sin embargo, esta
// expresión no cubre todos los casos posibles de direcciones de correo electrónico, ya que hay muchos formatos válidos que
// podrían no encajar completamente con este patrón.
