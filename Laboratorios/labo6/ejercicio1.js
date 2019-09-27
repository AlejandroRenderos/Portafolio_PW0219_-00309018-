var arr=[1,"hola",3,true,[1,2,3], "hola2", 6,7, false];

var funcion= x => {
    let tipoArreglo = [];
    let counts = {};

    x.forEach(element => {
        tipoArreglo.push(typeof element);
    });

    tipoArreglo.forEach(element =>{
        counts[element] = ( counts[element] || 0)+1;


    });

    Console.log(tipoArreglo);
    console.log(counts);
}
funcion(arr);