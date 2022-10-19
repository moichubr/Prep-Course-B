// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var acumulador = 0;      //NO CREO NINGUN ARREGLO
    for (let i = 1; i <= 10; i++) {
      acumulador += i;
    } return acumulador

    // var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // CREO EL ARREGLO
    // var suma = numeros.reduce(function (acc, elemento) {
    //   return acc + elemento;
    // }, 0);
    // return suma;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  
  //con WHILE
  // var resultado = [];
  // var indice = 0;
  // while (indice < array.length) {
    // if (array[indice] % 2 === 0) {
      //resultado.push(array[indice]);
    //}
    //indice++;
  //}
  //return resultado;
  var nuevoArreglo = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      nuevoArreglo.push(array[i])
    }
  } return nuevoArreglo;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
// var resultado = array.map(function (num) { RECIBE UN NUMERO
//   return num ** 2 ooooo math.pow(num, 2)
//});
//} return resultado;
//
//   var elevadosAlCuadrado = [];
//   array.forEach(function (elemento) {
//     elevadosAlCuadrado.push(Math.pow(elemento, 2))
//   });
//   return elevadosAlCuadrado;
// }
var resultado = array.map(function (num) {
  return Math.pow(num, 2)
});
return resultado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var total = array.reduce(function (acc, elemento) {
    return acc + elemento;
  }, 0);
  return total;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  // var digitos = num.toString();
  // return digitos.length;
  var digitos = num + "";
  return digitos.length
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
