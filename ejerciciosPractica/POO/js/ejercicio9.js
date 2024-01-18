//Trabaja con fechas
//difFechas: calcula los dias que hay de diferencia entre dos fechas
//maxFecha: devuelve la fecha mas reciente de dos fechas dadas
//testFecha: comprueba si el formato de una fecha es correcto
//ayerFecha: devuelve el dia anterior a una fecha dada
//mañanaFecha: devuelve el dia posterior a una fecha dada

let ManejoFechas = {
    difFechas: function (fecha1, fecha2) {
        let diferenciaTiempo = Math.abs(fecha2.getTime() - fecha1.getTime());

        let unDia = 1000 * 60 * 60 * 24;
        return Math.floor(diferenciaTiempo / unDia);
    },

    maxFecha: function (fecha1, fecha2) {
        return fecha1 > fecha2 ? fecha1 : fecha2;
    },

    testFecha: function(fecha){
        return !isNaN(Date.parse(fecha));
    },

    ayerFecha: function(fecha){
        let unDia = 1000*60*60*24;
        let fechaAnterior = new Date(fecha.getTime() - unDia);
        return fechaAnterior.toDateString();
    },

    mañanaFecha: function(fecha){
        let unDia = 1000*60*60*24;
        let fechaPosterior = new Date(fecha.getTime() + unDia);
        return fechaPosterior.toDateString();
    }
};

let fecha1 = new Date('2023-12-25');
let fecha2 = new Date('2023-12-30');

console.log('Diferencia en días:');
console.log(ManejoFechas.difFechas(fecha1, fecha2));

console.log("Fecha más reciente:");
console.log(ManejoFechas.maxFecha(fecha1, fecha2));

console.log("¿Formato correcto?");
console.log(ManejoFechas.testFecha('2023-12-25'));

console.log("Ayer:");
console.log(ManejoFechas.ayerFecha(fecha1));

console.log("Mañana:");
console.log(ManejoFechas.mañanaFecha(fecha2));
