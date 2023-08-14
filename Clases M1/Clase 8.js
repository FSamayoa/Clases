//* Ejemplo Factorial

// function factorial (num){
//     let fact = 0
//     if(num <= 1) {
//         return 1
//     }else{
//         fact = num * factorial(num - 1)
//     }
//     console.log (fact)
//     return fact
// }
// console.log(factorial)
// factorial (5)

//* conteo

function contar (num){
    let suma = 0
    if (num === 1){
        return 1
    }else{
        suma = num + contar(num - 1)
    }
    console.log (suma)
    return suma
};
contar(3)

// console.log (suma)


//* Quick Short

//! pendiente---------------------------

// let array = [8,35,13,2,18,20,9,6,12,2,8,13]
// console.log(array)
// console.log(array.length)


// function quickShort (array){

// let izq = []
// let det = []
// let pivote = Math.floor( array[array.length / 2])
// console.log (pivote)

// for (let i = 0; i < array.length; i++) {
    
//         if(array[i]<=pivote){
//         izq.push (array[i])
//         }else{
//             det.push(array[i])
//         }
//     }

//     console.log (izq)
//     console.log (det)
    
// };

// quickShort(array)



//! Quick Short
// [8,35,13,2,18,20,9,6,12,2,8,13]
// let array = [5, 1, 4, 2, 8]
// console.log(array)
// console.log(array.length)


// function quickSort(array){

//     if(array.length <= 1){
//         return array;
//     }
    
//     let pivotIndex = Math.floor(array.length / 2);
//     let pivote = array[pivotIndex];
//     console.log (pivote)
    


//     let izq = []
//     let der = []
//     let ordenaIzq = quickSort(izq);
//     let ordenaDer = quickSort(der);
//     let ordenadoArray = [];

//     for (i = 0; i < array.length; i++) {
//         if (i === pivotIndex) {
//             continue;
//         } else if (array[i] < pivote) {
//             izq.push(array[i]);
//         } else {
//             der.push(array[i]);
//         }
//     }
//     console.log(izq)
//     console.log(der)

//     for (let i = 0; i < ordenaIzq.length; i++) {
//         ordenadoArray.push(ordenaIzq[i]);
//     }
//     console.log (ordenaIzq)
//     console.log (ordenadoArray)
    
//     ordenadoArray.push(pivote);
    
//     console.log (pivote)

//     for (let i = 0; i < ordenaDer.length; i++) {
//         ordenadoArray.push(ordenaDer[i]);
//     }
//     console.log (ordenaDer)
//     console.log (ordenadoArray)

//     return ordenadoArray;
// }

// let ordenadoArray = quickSort(array);
// console.log(ordenadoArray);

//*Homework quick sort
// let array = [5, 1, 4, 2, 8]
// console.log(array)
// console.log(array.length)


// function quickSort(array){

// if(array.length <= 1){
//     return array;
//   }
  
//   let pivotIndex = Math.floor(array.length / 2);
//   let pivote = array[pivotIndex];
//   console.log (pivote)
  
//     let izq = []
//     let der = []
//     let igual = []
//     console.log(izq)
//     console.log(der)
//     console.log(igual)
  
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] < pivote) {
//         izq.push(array[i]);
//       } else if (array[i] > pivote){
//         der.push(array[i]);
//       } else {
//       } igual.push([i]);
//     }
//     console.log(izq)
//     console.log(der)
//     console.log(igual)
  
//     console.log ( quickSort(izq).concat(igual).concat(quickSort(der)))
//     return quickSort(izq).concat(igual).concat(quickSort(der))
   
     
//   }


//   quickSort(array)
  
// quickSort(array)
// console.log(quickSort(array))


//*Homework merge sort  Opcion A


// let array = [8,35,13,2,18,20,9,6,12,2,8,13]

// function mergeSort(array) {
//     if (array.length <= 1) return array;
  
//     let div = dividir(array)
//     let izq = div[0]
//     let der = div[1]

// console.log(izq)
// console.log(der)

//     merge(izq,der)
    

//   };
  
//   function dividir(array){
    
//     let medio = Math.floor(array.length / 2)
//     let izq = array.slice(0,medio)
//     let der = array.slice(medio)
    
//     return[izq,der]
//   }
  
//   function merge (izq, der){
//     let arrayOrdenado = []
//     let indiceIzq = 0
//     let indiceDer = 0

// console.log (arrayOrdenado)

// while(indiceIzq<izq.length && indiceDer<der.length){
//     if(izq[indiceIzq]<der[indiceDer]){
//         arrayOrdenado.push(izq[indiceIzq])
//         indiceIzq++
//     }else {
//         arrayOrdenado.push(der.indiceDer)
//         indiceDer++
//     }
// }

// console.log(arrayOrdenado)
// return arrayOrdenado
// .concat(izq.slice(indiceIzq))
// .concat(der.slice(indiceDer))

// };

// mergeSort(array)



//*Homework merge sort  Opcion B

let array = [8,35,13,2,18,20,9,6,12,2,8,13]

let izq = []
let der = []

function mergeSort(array) {
  let unidos = []
  while(izq.length && der.length){
    if(izq[0] < der[0]){
    unidos.push(izq.shift())
  }else {
    unidos.push(der.shift())
  }
}
while (izq.length){
    unidos.push(izq.shift())
}

while (der.length){
    unidos.push(der.shift())
}
console.log(unidos)
return unidos

};

mergeSort(array)

