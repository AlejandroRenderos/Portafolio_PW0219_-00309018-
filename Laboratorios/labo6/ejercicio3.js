function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function buscarOcur(n, array) {
  let total = 0;
  repeat(array.legth, i => {
    if (n == array[i]) {
      total++;
    }
  });
  console.log("Las ocurrencias son: " + total);
}
let arreglo2 = [1, 2, 1, 1, 3];
let n = 1;
buscarOcur(n, arreglo2);
