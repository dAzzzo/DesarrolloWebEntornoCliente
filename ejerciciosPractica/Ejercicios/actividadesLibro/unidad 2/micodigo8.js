//Escribimos el prompt para pedir la letra
let  letra = "Eligue una letra";
let Letra = prompt(letra);

//tenemos que elegir la s
while (Letra != `s`){
    console.log('Pase letra ${Letra+1}');
    Letra++;
}