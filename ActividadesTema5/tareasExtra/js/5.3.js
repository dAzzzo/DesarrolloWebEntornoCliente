/*
Diseña una clase “Hospital”. Tendrá como atributos “nombre”, 
“ciudad” y “numPacientes” (número de pacientes ingresados) 
y una lista de pacientes. Cada paciente se representará 
como un objeto de la clase “Paciente”. En ella se guardaran 
los atributos “DNI”, “nombre”, “enfermedad”.

Implementa un método en “Hospital” que reciba el código 
de paciente y se le de alta a dicho paciente (equivale a 
    eliminar al paciente).
*/

class Hospital {
    constructor(nombre, ciudad, numPacientes, listaPacientes) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.numPacientes = numPacientes;
        this.listaPaciente = listaPacientes;
    }

    detallesHospital() {
        console.log(`Nombre del hospital: ${this.nombre}`);
        console.log(`Ciudad del hospital: ${this.ciudad}`);
        console.log(`Número de pacientes ingresados: ${this.numPacientes}`);
        console.log(`\nPacientes:`);
        this.listaPaciente.forEach((titulo) => {
            console.log(`DNI: ${titulo.DNI} / Paciente: ${titulo.nombreP} / Enfermedad: ${titulo.enfermendad}`);
        });
        console.log(`------------`);
    }

}

let hospital = new Hospital('Nuestra Señora de Santa María del Puerto', 'El Puerto de Santa María', 2343, [{ DNI: '23443398X', nombreP: 'Juan', enfermendad: 'Linux User' }, { DNI: '09876345C', nombreP: 'Daniel', enfermendad: 'Exceso de facha' }]);
hospital.detallesHospital();


console.log('\nVamos a darle el alta al paciente 2 -->');
delete hospital.listaPaciente[1];
hospital.detallesHospital();
