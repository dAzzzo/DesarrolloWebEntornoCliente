//Construye un obj partiendo de Object y medificalo al vuelo
//para modelar una matriz. Sus propiedades seran nFilas, nColumnas
//y contenido, y sus metodos inicializarMatriz(valor), que rellena
//toda la matriz con el mismo valor, aleatoriaMatriz(), que 
//rellena la matriz con enteros aleatorios entre 1 al 100, 
//y verMatriz() que muestra por consola

let matriz = {
    nFilas: 0,
    nColumnas: 0,
    contenido: [],

    inicializarMatriz: function(valor) {
        this.contenido = [];
        for (let i = 0; i < this.nFilas; i++) {
            let fila = [];
            for (let j = 0; j < this.nColumnas; j++) {
                fila.push(valor);
            }
            this.contenido.push(fila);
        }
    },

    aleatorioMatriz: function() {
        this.contenido = [];
        for (let i = 0; i < this.nFilas; i++) {
            let fila = [];
            for (let j = 0; j < this.nColumnas; j++) {
                let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
                fila.push(numeroAleatorio);
            }
            this.contenido.push(fila);
        }
    },

    verMatriz: function() {
        console.log("Matriz:");
        for (let fila of this.contenido) {
            console.log(fila.join("\t"));
        }
    },
};

matriz.nFilas = 4;
matriz.nColumnas = 4;

matriz.inicializarMatriz("X");
matriz.verMatriz();

matriz.aleatorioMatriz();
matriz.verMatriz();
