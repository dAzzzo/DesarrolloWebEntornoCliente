/*
Prompt se utiliza para sacar un cuadro por pantalla que pregunte o 
haga algo
*/

let nombre = "Nombre";
let Nombre = prompt(nombre);

let edad = "Edad";
let Edad = prompt(edad);

let grupo;


//Hacemos los if
if (Edad < 13) {
    grupo = "Niño";

}
else if (Edad < 18) {
    grupo = "Adolescente";
}
else if (Edad < 65) {
    grupo = "Trabajdador";
}
else {
    console.log("Jubilado");
    grupo = "Jubilado";
}

console.log(Nombre + " tiene " + Edad + " años y por tanto es " + grupo);