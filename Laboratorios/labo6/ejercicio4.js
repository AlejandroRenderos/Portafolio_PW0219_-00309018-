function cuatro(numero) {
  valores = [];
  validacion = false;
  var numeroaleatorio;

  typeof variable;

  for (let i = 0; i < 20; i++) {
    numeroaleatorio = Math.floor(Math.random() * 100) + 1;
    valores.push(numeroaleatorio);
  }
  for (let j = 0; j < 20; j++) {
    if (numero == valores[j]) {
      console.log("ganaste");
      validacion = true;
      break;
    }
  }
  if (validacion == false) {
    console.log("perdiste");
  }

  return valores;
}
