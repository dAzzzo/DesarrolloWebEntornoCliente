/*Crea un programa que simule el funcionamiento de un bingo.
El numero de cartones que participan sera siempre de 5. Cada
carton tendra 8 filas y 4 columnas con 20 numeros del 1 al 90
distribuidos de forma aleatoria (máximo de cinco por fila).
El programa ira sacando bolas y los cartones se iran comprobando 
en tiempo real. El programa termina cuando un cartón alcanza el 
bingo. En ese momento se debe mostrar en pantalla cual de los 
cinco cartones es el ganador y los numeros que han salido para
comprobar que el bingo es correcto. Plantea el problema, analizando
con detenimiento y diseña previamente todas las funciones que 
vas a necesitar para resolverlo. Luego implementa tu solucion
 */

var usedNums = new Array(76);

function newCard() {
	//Starting loop through each square card
	for(var i=0; i < 24; i++) {  //<--always this code for loops. change in red
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newNum;
	
	var colPlace =new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	
	do {
		newNum =(colPlace[thisSquare] * 15) + getNewNum() + 1;
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
	return Math.floor(Math.random() * 75);
	
}

function anotherCard() {
	for(var i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
	}
	
	newCard();
}