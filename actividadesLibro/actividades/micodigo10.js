let colores = [["Naranja","Lima","Turquesa","Rosa","Rojo"],["#F39C12","#COF312","#12F3E5","#F312AF","#F31212"]];


/*let mensajeColor = "Que color quieres? [Naranja, Limam Turquesa, Rosam Rojo]";
let color = prompt(mensajeColor);*/



// Pide al usuario que introduzca un color
let colorBuscado = prompt("Introduce un color (Naranja, Lima, Turquesa, Rosa o Rojo):");

// Convierte la entrada del usuario en minúsculas para que sea insensible a mayúsculas/minúsculas
colorBuscado = colorBuscado.toLowerCase();

// Encuentra el índice del color en el array
let indiceColor = colores[0].indexOf(colorBuscado);

// Comprueba si se encontró el color
if (indiceColor !== -1) {
  let rgbColor = colores[1][indiceColor];
  alert(`El valor RGB de ${colorBuscado} es ${rgbColor}`);
} else {
  alert("Color no encontrado en la lista.");
}


/*for(i=0; i<colores.length; i++){
    for(

    )
if(color == colores[i][j]){
    console.log()
}
}*/