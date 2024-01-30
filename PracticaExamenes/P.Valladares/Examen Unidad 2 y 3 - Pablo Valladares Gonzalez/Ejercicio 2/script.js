//Creamos el mapa con todas sus entradas
let mapAsignaturas = new Map();
mapAsignaturas.set("DEWC", "Desarrollo Web en Entorno Cliente");
mapAsignaturas.set("DIW", "Diseño de Interfaces Web");
mapAsignaturas.set("DAW", "Despliegue de Aplicaciones Web");
mapAsignaturas.set("DEWS", "Desarrollo Web en Entorno Servidor");

//Creamos la funcion para mostrar la cantidad
function cantidadModulos() {
    //Creamos una variable que guarde la cantidad
    let contador = 0;
    //Hacemos un for que recorra todos los nombres del mapa
    for (let nombre of mapAsignaturas.keys()) {
        //Sumamos por cada nombre que hay
        contador++;
    }
    //Mostramos por consola la cantidad de modulos
    console.log("Hay " + contador + " modulos almacenados");
    //Damos feedback al boton
    alert("Mire la consola!");
}

//Hacemos la funcion de mostrar la estructura
function mostrarEstructura() {
    //Hacemos un for que recorra todos los valores del mapa
    for (let nombre of mapAsignaturas.entries()) {
        //Mostramos todos los valores del mapa por consola
        console.log(nombre);
    }
    //Damos feedback al boton
    alert("Mire la consola!");
}

//Hacemos la funcion para mostrar las abreviaturas
function abreviatura() {
    //Hacemos un for que recorra todos los primeros valores
    for (let nombre of mapAsignaturas.keys()) {
        //Mostramos todos los primeros valores del mapa por consola
        console.log(nombre);
    }
    //Damos feedback al boton
    alert("Mire la consola!");
}

//Hacemos la funcion para mostrar el nombre completo
function nombreCompleto() {
    //Hacemos un for que recorra todos los segundos valores
    for (let nombre of mapAsignaturas.values()) {
        //Mostramos todos los segundos valores del mapa por consola
        console.log(nombre);
    }
    //Damos feedback al boton
    alert("Mire la consola!");
}

//Hacemos la funcion para consultar una abreviatura
function consulta() {
    //Le pedimos la abreviatura que quiere comprobar
    let buscar = prompt("Introduce la abreviatura del modulo que quieres buscar:");
    //Creamos una variable para el caso de que no se encuentre
    let encontrado = 0;
    //Hacemos un for para todos los primeros valores del mapa
    for (let nombre of mapAsignaturas.keys()) {
        //Si el valor del mapa es igual al introducido por el usuario
        if (buscar == nombre) {
            //Decimos que se ha encontrado
            alert("Se ha encontrado");
            //Sumamos uno a la varibale de encontrado
            encontrado++;
        }
    }
    //Si encontrado es 0 mostrara el siguiente mensaje
    if (encontrado == 0) {
        alert("No se ha encontrado el valor");
    }
}

//Hacemos una funcion para modificar los datos
function modificar() {
    //Le pedimos cual es el que quiere modificar
    let buscar = prompt("Introduce la abreviatura del modulo que quieres buscar:");

    //Hacemos un for por todos los primeros valores del mapa
    for (let nombre of mapAsignaturas.keys()) {
        //Si el valor que ha introducido esta en el mapa
        if (buscar == nombre) {
            //Creamos una variable que guarde el segundo valor del mapa
            let nombre2 = mapAsignaturas.get(nombre);
            //Le añadimos 2 a esa variable
            nombre2 = nombre2 + "2";
            //Cambiamos el segundo valor al primer valor del mapa
            mapAsignaturas.set(nombre, nombre2);
        }
    }
    //Mostramos la esrtuctura gracias a la funcion antes creada
    mostrarEstructura();
    //Damos feedback al boton
    alert("Mire la consola!");
}

//Hacemos una funcion para borrar elementos
function borrarElemento() {
    //Le pedimos cual es el elemento que quiere borrar
    let borrar = prompt("Introduce el elemento que quieres borrar:");
    //Hacemos un for que reccore todos los primeros valores
    for (let nombre of mapAsignaturas.keys()) {
        //Si el primer valor es igual al introducido
        if (borrar == nombre) {
            //Borramos esa entrada del mapa
            mapAsignaturas.delete(borrar);
        }
    }
    //Mostramos la estructura gracias a la funcion antes creada
    mostrarEstructura();
    //Damos feedback al boton
    alert("Mire la consola!");
}
