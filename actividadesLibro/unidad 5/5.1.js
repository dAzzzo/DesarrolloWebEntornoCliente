class Dispositovo {
  marca = "XIAOMI";
  constructor(marca) {
    this.marca = marca;
  }
  toString() {
    let mensaje = "[Marca=" + this.marca + "]";
  }
}

class TelefonoMobil extends Dispositovo {
  CPU = "nombreCpu";
  RAM = "nombreRam";
  Almacenamiento = 20;
  Ancho = 40;
  Alto = 50;
  numCamaras = 2;
  constructor(cpu, ram, alma, anc, alt, num, marca) {
    super(marca);
    this.CPU = cpu;
    this.RAM = ram;
    this.Almacenamiento = alma;
    this.Ancho = anc;
    this.Alto = alt;
    this.numCamaras = num;
  }
  toString() {
    let mensaje =
      "[CPU=" +
      this.CPU +
      "\n, RAM=" +
      this.RAM +
      "\n, Almacenamiento=" +
      this.Almacenamiento +
      "\n, Ancho=" +
      this.Ancho +
      "\n, Alto=" +
      this.Alto +
      "\n, NumCamaras=" +
      this.numCamaras +
      "\n, Marca=" +
      this.marca +
      "]";
    return mensaje;
  }
}
let miMobil = new TelefonoMobil("123CpU", "324Ram", 20, 12, 4, 76);

console.log(miMobil.toString());

for (elemento of Object.getOwnPropertyNames(miMobil)) {
  console.log(elemento);
}
