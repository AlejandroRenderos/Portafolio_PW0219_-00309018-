function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function ordenarAscendente(array) {
  let a, b;
  for (j = 0; j < array.length; j++) {
    for (i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        a = array[i];
        b = array[i];
        array[i] = b;
        array[i + 1] = a;
      }
    }
  }

  return console.log(array);
}
