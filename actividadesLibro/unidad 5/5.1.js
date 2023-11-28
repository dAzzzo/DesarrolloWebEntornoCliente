class TelefonoMobil {
  CPU = "nombreCpu";
  RAM = "nombreRam";
  Almacenamiento = 20;
  Ancho = 40;
  Alto = 50;
  numCamaras = 2;
  constructor(cpu, ram, alma, anc, alt, num) {
    this.CPU = cpu;
    this.RAM = ram;
    this.Almacenamiento = alma;
    this.Ancho = anc;
    this.Alto = alt;
    this.numCamaras = num;
  }
  mostrar() {
    let contenido = this.toString();
    return contenido;
  }
}
let miMobil = new TelefonoMobil("123CpU", "324Ram", 20, 12, 4, 76);

console.log(miMobil.mostrar());
