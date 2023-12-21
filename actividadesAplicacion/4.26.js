// Escribe una funcion que reciba como parametro un array de 3x3 y lo devuelva modificado con todos sus elemntos a 0 excepto la diagonal principal

let arr = [
    ["*", "*", "*"],
    ["*", "*", "*"],
    ["*", "*", "*"],
  ];
  
  function cambioArray(arr) {
    let final = arr;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (i != j) {
          final[i][j] = "0";
        }
      }
    }
    return final;
  }
  
  function separar(separacion) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        document.write(separacion[i][j] + " ");
      }
      document.write("<br>");
    }
  }
  
  let final = cambioArray(arr);
  
  separar(final);