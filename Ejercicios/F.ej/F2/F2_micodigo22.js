//14. Escriba un ejercicio de JavaScript para obtener la extensión de un nombre de archivo

let nomArchivo = "fotos.png";


//Eliminamos la extension del nombre  dle archivo y alamacenamos el resultado em 'archivos'
archivo = nomArchivo.replace('.' + nomArchivo.split('.').pop(), '');

//Obtenemos la extension del nombre del archivo y alamacenamos el resultado en 'extension'
extension = nomArchivo.split('.').pop();

//Mostramos el nombre del archivo sin la extensión en el documento
document.write("El nombre del archivo es: " + archivo + "<br/> El nombre de la extension es: " + extension);