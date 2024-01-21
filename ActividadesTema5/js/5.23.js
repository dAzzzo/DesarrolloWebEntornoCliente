//Cre auna clase Club que contenga añoFundacion, numSocios, nombreEstadio
//ciudad y palmarés (de cada titulo debe guardar nombre y año de consecucion)
//El metodo a usar es verClub()


class Club{
    letructor(anioFundacion = 'No especificado', numSocios = 0, nombreEstadio = 'No especificado', ciudad = 'No especificado', palmares = []){
        this.anioFundacion = anioFundacion;
        this.numSocios = numSocios;
        this.nombreEstadio = nombreEstadio;
        this.ciudad = ciudad;
        this.palmares = palmares;
    }

    verClub(){
        console.log(`Año de fundacion: ${this.anioFundacion}`);
        console.log(`Num de socios: ${this.numSocios}`);
        console.log(`Nombre de estadio: ${this.nombreEstadio}`);
        console.log(`Ciudad: ${this.ciudad}`);
        console.log(`Palmares:`);
        this.palmares.forEach(titulo => {
            console.log(`- ${titulo.nombre} (${titulo.año})`);
        });
        console.log('-------------------------');
    }

class Club {
  constructor(
    anioFundacion = "No especificado",
    numSocios = 0,
    nombreEstadio = "No especificado",
    ciudad = "No especificado",
    palmares = []
  ) {
    this.anioFundacion = anioFundacion;
    this.numSocios = numSocios;
    this.nombreEstadio = nombreEstadio;
    this.ciudad = ciudad;
    this.palmares = palmares;
  }

  verClub() {
    console.log(`Año de fundacion: ${this.anioFundacion}`);
    console.log(`Num de socios: ${this.numSocios}`);
    console.log(`Nombre de estadio: ${this.nombreEstadio}`);
    console.log(`Ciudad: ${this.ciudad}`);
    console.log(`Palmares:`);
    this.palmares.forEach((titulo) => {
      console.log(`- ${titulo.nombre} (${titulo.año})`);
    });
    console.log("-------------------------");
  }

}

//Creamos los 6 clubs con los diferentes parametros
let club1 = new Club();
let club2 = new Club(1962);
let club3 = new Club(1974, 124);
let club4 = new Club(1981, 462, "Bernabeu");
let club5 = new Club(1692, 803, "Saint Martheo", "Ciudad Real");

let club6 = new Club(1952, 7264, "Cruspian", "Cadiz", [{nombre: 'Torneo A', anio: 1956}, {nombre: 'Torneo B', anio: 1968}]);

club6 = new Club(1952, 7264, "Cruspian", "Cadiz", [
  { nombre: "Torneo A", anio: 1956 },
  { nombre: "Torneo B", anio: 1968 },
]);


// Ahora tengo que modificar los datos
club1.anioFundacion = 1920;
club2.numSocios = 3000;

club3.nombreEstadio = 'Caligula';
club4.ciudad = 'Mostoles';
club5.palmares.push({ nombre: 'Torneo C', año: 1985 });

club3.nombreEstadio = "Caligula";
club4.ciudad = "Mostoles";
club5.palmares.push({ nombre: "Torneo C", año: 1985 });

club6.palmares[0].año = 1996;
club6.palmares[1].año = 1998;

club1.verClub();
club2.verClub();
club3.verClub();
club4.verClub();
club5.verClub();

club6.verClub();

club6.verClub();
