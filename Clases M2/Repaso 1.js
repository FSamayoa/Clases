let valor = function(a,b){
return a + b;
}


console.log(valor(5,3))

const saludo = function () {
    return "Hola";
  };
  
  saludo; // ƒ () { return 'Hola'; }
  console.log(saludo()) // 'Ho

  // fB = Función B (callback)
const fB = function () {
    console.log("Función B ejecutada.");
  };
  
  // fError = Función Error (callback)
  const fError = function () {
    console.error("Error");
  };
  
  // fA = Función A
  const fA = function (a, b) {
    const n = ~~(Math.random() * 5);
    if (n > 2) a();
    else b();
  };
  
  fA(fB, fError); // Si e

  // Clausura: Función incr()
const incr = (function () {
    let num = 0;
    return function () {
      num++;
      return num;
    };
  })();
  
  typeof incr; // 'function'
  incr(); // 1
  incr(); // 2
  incr(); // 3

  let a = 0;

while (a < 5) {
  console.log(a, a++, a);
}