//* Recursion
//funcion que se llama a si misma para repetir hacer algo repetitivo
// pueden ser sustituidos los for en algunos casos

//*Estructura base
// function recursiva (condition){
//     if (condition){ // Caso base
//             return true  // Corte o retorno
//     } else {
//     recursiva (condicion -1)  //Continuacion
//     }
//     }

// function cuentaRegresiva(number){
//     console.log(number);
//     const nuevoNumero = number - 1
// if (nuevoNumero === 0){
//     console.log(nuevoNumero)
//     return
// }
//     cuentaRegresiva(nuevoNumero)
// }
// cuentaRegresiva (10);



const comunidad = [
    "Aragon","frodo","sam","pippin","merry","legolas","gimli"
];

function imprimePersonajes(personajes){
    for (let i = 0; i>personajes.length; i++){
        console.log(personajes[i]);
    }
}


// //*foreach
// personajes.array.forEach(element => {
//     console.log(personajes);
// });

// //*Map
// personajes.map((personajes) => {
//     console.log(personajes);
// })

// //*Forof
// for (let personaje of personajes) {
//     console.log (personaje);
// }


imprimePersonajes(comunidad)


