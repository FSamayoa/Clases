//*Ejercicio 1

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

// [1, [2, [3,4]], [5,6], 7]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let array =[1, [2, [3,4]], [5,6], 7]
// console.log (Array.isArray(array))

// var countArray = function(array) {
//     // Tu código aca:
    
// let suma = 0

// for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])){
//         suma += countArray(array[i])
//     }else {
//         suma += array[i]
//     }
    
// }
    
// console.log (suma)
// return suma;
// };

// console.log (countArray(array))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//*Ejercicio 2
// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var obj = {
//       a: {
//         a1: 10,
//         a2: 'Franco',
//         a3: {f: 'r', a: 'n', c: {o: true}}
//       },
//       b: 2,
//       c: [1, {a: 1}, 'Franco']
//     }

//     console.log(Object.keys(obj))
//     let arr = []
//     arr.push (Object.keys(obj.a))
//     console.log(arr)
//     console.log (arr.length)

//     for (let key in obj) {
//         console.log (obj)
//     }


// var countProps = function(obj) {
//     // Tu código aca:
// let suma = 0


// for (let key in obj) {
//     if (obj.hasOwnProperty(key)){
//         suma ++ 
//     }if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
//         suma += countProps(obj[key]);
        
//     }   
   
// }
// console.log (suma)
// return suma;
// };

// countProps(obj);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//* Closures

function tipologiasSeparadas(arr) {
    if (arr.length === 0) {
        return "Tipologias inexistentes";
    }
console.log (arr)
    const stack = [];

    for (const num of arr) {
        if (stack.length > 0 && stack[stack.length - 1] === num) {
            stack.pop();
        } else {
            stack.push(num);
        }
    }

    if (stack.length === 0) {
        return "No hay tipologias repetidas";
    }

    return stack.join('\n'); // Devolvemos el stack como una cadena con saltos de línea entre cada número.
}

tipologiasSeparadas(arr)

arr = [1,2,3,3,4,5,6,]