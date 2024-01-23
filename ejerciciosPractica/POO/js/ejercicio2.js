/*
Ejercicio 2: Gestión de Productos

Diseña una clase Producto que contenga propiedades 
como nombre, precio, stock, y métodos para añadir y 
quitar unidades del stock, así como para calcular el 
valor total en stock.
*/

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    anadir(cantidad) {
        this.stock += cantidad;
        console.log(`${cantidad} unidades de ${this.nombre}  agregadas al stock`);
    }

    quitar(cantidad) {
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
            console.log(`${cantidad} unidades de ${this.nombre} retiradas del stock.`);
        } else {
            console.log(`No hay suficientes unidades de ${this.nombre} en stock.`);
        }
    }

    valorTotal() {
        return this.precio * this.stock;
    }

    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio unitario: ${this.precio}`);
        console.log(`Stock disponible: ${this.stock}`);
        console.log(`Valor total en stock: ${this.valorTotal()}`);
        console.log('-------------------------');
    }

}

let producto = new Producto('Cereales', 5, 13);
producto.mostrarDetalles();

producto.anadir(10);
producto.quitar(5);



