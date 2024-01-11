/*
Ejercicio 1: Gestión de Empleados
Crea una clase Empleado con propiedades como nombre, cargo, y 
métodos para obtener y establecer el salario. Implementa el 
cálculo de bonificaciones y un método para mostrar los detalles del empleado. 
*/

class Empleado {
    constructor(nombre, cargo) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = 0;
    }

    obtenerSalario() {
        return this.salario;
    }

    establecerSalario(nuevoSalario) {
        this.salario = nuevoSalario;
        console.log(`Nuevo salario establecido: ${this.salario}`);
    }

    calcularBonificacion() {
        // Simulando una bonificación del 10% del salario base
        return this.salario * 0.1;
    }

    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Salario base: ${this.salario}`);
        console.log(`Bonificación: ${this.calcularBonificacion()}`);
        console.log('-------------------------');
    }
}

let empleado = new Empleado('Juan', 'Gerente');
empleado.establecerSalario(3000);
console.log(empleado.obtenerSalario());
empleado.mostrarDetalles();
