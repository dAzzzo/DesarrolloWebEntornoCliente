/*Crea un objeto denominado usuario que permita autentificar a la persona 
que quiere iniciar sesion en el sistema */

let usuario = {
  nombre: "Daniel",
  nombreUsuario: "D23",
  contraseña: "234",
  entrar: function (nombreUsuario, contraseña) {
    if (nombreUsuario === this.nombreUsuario && contraseña === this.contraseña) {
      console.log("Sesion iniciada con exito");
    } else {
      console.log("Sesion no inicada");
    }
  },
};

usuario.entrar("D23", "234");
