function siete(numero) {
  let repuesta;
  let termino1 = 0;
  let termino2 = 1;
  if ((numero = 1)) {
    return termino1;
  } else if ((numero = 2)) {
    return termino2;
  } else {
    for (let i = 3; i <= numero; i++) {
      repuesta = termino1 + termino2;
      termino1 = termino2;
      termino2 = repuesta;
    }
  }

  return repuesta;
}
