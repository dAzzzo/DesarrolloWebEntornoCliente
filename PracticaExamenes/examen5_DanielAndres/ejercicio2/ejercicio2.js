class Cliente {
  constructor(nombre, apellidos, dni, edad) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    this.edad = edad;
  }

  validarDNI() {
    //REGEXP para validar el dni
    let formatoDNI = /^[0-9]{8}[A-Za-z]$/;

    if (formatoDNI.test(this.dni)) {
      console.log(`El DNI del cliente ${this.nombre} es válido.`);
    } else {
      console.log(`El DNI del cliente ${this.nombre} NO es válido.`);
    }

    return formatoDNI.test(this.dni);
  }
}

class Hotel {
  constructor(nombre, ubicacion, estrellas, precio, numHabitaciones) {
    this.nombre = nombre;
    this.ubicacion = ubicacion;
    this.estrellas = estrellas;
    this.precio = precio;
    this.numHabitaciones = numHabitaciones;
    this.reservas = new Map();
  }

  getHabitacionesDisponibles(fecha) {
    let reservasFecha = this.reservas.get(fecha) || [];
    return this.numHabitaciones - reservasFecha.length;
  }

  reservarHabitacion(cliente, fecha) {
    if (!this.cumpleEdadRequisito(cliente.edad)) {
      console.log(
        `\nEl cliente ${cliente.nombre} no cumple con la edad requerida para este hotel.`
      );
      return;
    }

    let habitacionesDisponibles = this.getHabitacionesDisponibles(fecha);
    if (habitacionesDisponibles > 0) {
      this.reservas.set(fecha, [
        //Comprobamos dentro de los arrays y la reserva haciendo un get de la fechha para recibirla 
        ...(this.reservas.get(fecha) || []),
        { cliente, habitacion: habitacionesDisponibles },
      ]);
      console.log(
        `\nLa reserva ha sido exitosa para ${cliente.nombre} en ${this.nombre} para la fecha ${fecha}. ¡Nos vemos pronto amig@!`
      );
    } else {
      console.log(
        `\nLo siento, pero lamentablemente no hay habitaciones disponibles para la fecha ${fecha}.`
      );
    }
  }

  anularReserva(cliente, fecha) {
    let reservasFecha = this.reservas.get(fecha);
    //Buscamos la reserva usando findIndex vienndo que cliente la tenga
    let index = reservasFecha.findIndex((reserva) => reserva.cliente === cliente);
    if (index !== -1) {
      this.reservas.set(fecha, reservasFecha);
      console.log(
        `\nQue pena, pero la reserva ha sido anulada para ${cliente.nombre} en ${this.nombre} para la fecha ${fecha}.`
      );
    } else {
      console.log(
        `\nNo se encontró ninguna reserva para ${cliente.nombre} en ${this.nombre} para la fecha ${fecha}.`
      );
    }
  }

  cumpleEdadRequisito() {
    return true;
  }

  calcularPrecioFinal() {
    let porcentajeAumento = this.estrellas * 2;
    return this.precio * (1 + porcentajeAumento / 100);
  }
}

class Empresario {
  constructor(nombre, codigo) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.hoteles = [];
  }

  validarCodigo() {
    //REGEXP para validar el código
    let codigoCorrecto = /^[a-zA-Z]{3,}\-\d{5}\.\/$/;

    if (codigoCorrecto.test(this.codigo)) {
      console.log(`El código del empresario ${this.nombre} es válido.`);
    } else {
      console.log(`El código del empresario ${this.nombre} NO es válido.`);

      return codigoCorrecto.test(this.codigo);
    }
  }

  agregarHotel(hotel) {
    this.hoteles.push(hotel);
  }

  consultarHoteles() {
    return this.hoteles.map((hotel) => hotel.nombre);
  }

  tieneHotel(nombreHotel) {
    return this.hoteles.some((hotel) => hotel.nombre === nombreHotel);
  }
}

let hotel1 = new Hotel("Hotel1", "Centro Ciudad", 3, 100, 10);
let hotel2 = new Hotel("Hotel2", "La Puntilla", 4, 150, 10);
let hotel3 = new Hotel("Hotel3", "Fuentebravia", 5, 200, 20);

let empresarioMario = new Empresario("Mario", "Cad-75643./");
empresarioMario.agregarHotel(hotel1);
empresarioMario.agregarHotel(hotel2);
empresarioMario.agregarHotel(hotel3);

console.log(empresarioMario.consultarHoteles());
console.log(empresarioMario.tieneHotel("Hotel el puerto"));

let clienteJuan = new Cliente("Juan José", "Catalá", "45339876Z", 25);

hotel1.reservarHabitacion(clienteJuan, "2024-01-20");
hotel1.reservarHabitacion(clienteJuan, "2024-01-20");
console.log(hotel1.reservas.get("2024-01-20"));

console.log(
  `\nHabitaciones libres en ${hotel1.nombre}: ${hotel1.getHabitacionesDisponibles("2024-01-20")}`
);

console.log(
  `\nPrecio final de la reserva para el hotel ${
    hotel1.nombre
  }: ${hotel1.calcularPrecioFinal()} euros.`
);

hotel1.anularReserva(clienteJuan, "2024-01-20");

//con delete lo borro
delete clienteJuan;
console.log(clienteJuan);

//Comrpobación final de que las expresiones regulares sean correctas
console.log(`\n\nComprobación del DNI del cliente y del código del Empresario:`);
clienteJuan.validarDNI();
empresarioMario.validarCodigo();
