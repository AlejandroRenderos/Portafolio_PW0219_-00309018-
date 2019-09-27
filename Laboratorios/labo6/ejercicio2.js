var numeros = [1, 2, 3, 4, 5, 67];

function operacion(numeros) {
  for (var i = 0; i < numeros.length; i++) {
    var suma = numeros[i] + numeros[i];
  }
  var promedio = suma / numeros.length;
  console.log(suma);
  console.log(promedio);
}
