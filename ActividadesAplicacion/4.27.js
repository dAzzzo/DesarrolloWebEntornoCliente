// Crea una funcion autoejecutable  que muestre el mensaje <Comenzando...> y tres segundos despues escriba <Finalizado...>

function auto() {
  return new Promise((resolve) => {
    (async () => {
      document.write("Comenzando...");

      // Espera tres segundos
      await new Promise((innerResolve) => setTimeout(innerResolve, 3000));

      document.write("Finalizado...");
      resolve("Finalizado...");
    })();
  });
}
