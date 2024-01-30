//Creamos la clase shape
class Shape {
  constructor(nombre, lados, longitudLado) {
    this.nombre = nombre;
    this.lados = lados;
    this.longitudLado = longitudLado;
  }

  calcPerimeter() {
    //Perimetro = númemro de lados por longitud
    this.perimetro = this.lados * this.longitudLado;
    console.log(`El perímetro del cuadrado es ${this.perimetro} cm.`);
  }

  mostrarShape() {
    console.log(`\n\n---------------`);
    console.log(`Nombre 1: ${this.nombre}`);
    console.log(`Número de lados 1: ${this.lados}`);
    console.log(`Longitud de lados 1: ${this.longitudLado}`);
  }
}

//Creamos la clase que hereda
class Square extends Shape {
  constructor(nombre, lados = 4, longitudLado = 5) {
    super(nombre, lados, longitudLado);
  }

  calcPerimeter() {
    this.perimetro2 = this.lados * this.longitudLado;
    console.log(`El perímetro del 2º cuadrado es ${this.perimetro2} cm`);
  }

  calcArea() {
    //El area es lado por lado
    this.area = this.longitudLado ** 2;
    console.log(`El area del 2º cuadrado es ${this.area} cm^2`);
  }

  mostrarShape() {
    console.log(`\n\n---------------`);
    console.log(`Nombre 2: ${this.nombre}`);
    console.log(`Número de lados 2: ${this.lados}`);
    console.log(`Longitud de lados 2: ${this.longitudLado}`);
  }
}

//Damos valores
let shape = new Shape("Cuadrado1", 4, 2);
let square = new Square("Cuadrado2", 4, 5);

//Mostramos los datos de la clase shape
shape.mostrarShape();
shape.calcPerimeter();

//Mostramos los datos de la clase square
square.mostrarShape();
square.calcArea();
square.calcPerimeter();
