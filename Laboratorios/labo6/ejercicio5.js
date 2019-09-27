function palindromo(palabra) {
  var isPalindromo = true;
  var original = palabra.split("");
  var invercion = palabra.split("").reverse();
  for (var i = 0; i < palabra.length; i++) {
    if (invercion[i] != original[i]) {
      console.log("no es palindroma");
      isPalindromo = false;
      break;
    }
  }

  if (isPalindromo == true) {
    console.log("es palindroma");
  }
}

palindromo("amadaladama");
