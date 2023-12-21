// Crea una funcion autoejecutable  que muestre el mensaje <Comenzando...> y tres segundos despues escriba <Finalizado...>

function auto() {
    (async () => {
      document.write("Comenzando...");
  
      // Espera tres segundos
      setTimeout(() => {
        document.write("Finalizado...");
      }, 3000);
    })();
  }
  
  // Llamada a la función auto
  auto();