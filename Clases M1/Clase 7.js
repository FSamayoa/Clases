//determinar el numero mas grande entre tres valores

//crear una funcion que reciba 3 valores
//comparar variables por pares
// a>b --> a>c || b>c
//*ordenado de Burbuja hasta 1 vez

// var array = [8,35,13,2,18,20,9,6,12]
// console.log(array)
// console.log(array.length)


// function ordenado (array){
  
// let temp1 = 0
  

// for (i=0; i<array.length; i++){    
//     if(array[i]>array[i+1]){
//         temp1=array[i]
//         array[i] = array[i+1]
//         array[i+1] = temp1
//            console.log(array)
        
//     }
// }                     //8,35,13,2,18,20,9,6,12
// console.log(array)
// };

// ordenado(array)

//*Ordenado de burbuja While

// let array = [8,35,13,2,18,20,9,6,12]

// function Ordenar (array){
//     let valida = 0      //*false
    
//     while(!valida){ //*no es false
//     valida = 1      //*Condicion de corte
//         for (i=0; i<array.length; i++){
//             if(array[i] > array[i+1]){
//                 let temporal1 = array[i]
//                 array[i] = array[i+1]
//                 array[i+1] = temporal1
             
//                 valida = 0
//             }
//         }
//     };
    
    
// }
// Ordenar(array)
// console.log(array)
// return array


//*Inserion sort

//? function insertionSort(array) {
//?     // Implementar el método conocido como insertionSort para ordenar de menor a mayor
//?     // el array recibido como parámetro utilizando arreglos
//?     // Devolver el array ordenado resultante
//?     // Tu código:
  
//   }
//[8,35,13,2,18,20,9,6,12,2,8,13]
// let array = [50,-13,2,18,20,-9,6,12,2,8,1]

// function insert (array){
//     let valor = false
    
//     while(!valor){
//         valor =true
    
//     for (let i = 0; i < array.length; i++) {//*cuando i en posicion 1 sea menor a i-1, se coloca i en posion i-1
//         if(array[i]<array[i-1]){
//             let temp2 = array[i]
//             array[i] = array[i-1]
//             array[i-1] = temp2
        
//             valor = false;
//         }
//     } 
// }
// console.log(array)
// return array

// };

// insert(array)
// console.log(insert(array))



//* Selecction Sort

//? function selectionSort(array) {
//?     // Implementar el método conocido como selectionSort para ordenar de menor a mayor
//?     // el array recibido como parámetro utilizando dos arreglos
//?     // Devolver el array ordenado resultante
//?     // Tu código:
  
//?   }



let array = [8,35,13,2,18,20,9,6,12,2,8,13]
console.log(array)
console.log(array.length)


function selection (array){
let puntero = 0
let min = 0
let arr2 = []
contador = 0


    for (let i = 0; i < array.length; i++) {
        if(array[i]<array[i+1]){
            min = array[min]
            arr2.push (min)
             

        }else if(array[i]>array[i+1]){
            min = array[i+1]
            arr2.push (min)
        }
        
    }
    console.log(array)
    console.log(arr2)
};

selection(array)



//*Factores

function factorear (num){
console.log(num)
let lista = []

for (let i = 0; i < num + 1; i++) {
    if((num % i) === 0 ){
        lista.push(i)
        num = num / i
        i = 1
    }
    
}
console.log(lista)

return lista
};

factorear(180)


//*  Doble FOR

