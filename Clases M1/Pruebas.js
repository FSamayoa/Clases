// function saludar (saludo){
//     return function (nombre){
//         console.log(saludo + " " + nombre);
//     }
// }

// console.log (saludar("hola"));

// var saludarHola =saludar("hola");

// saludarHola("Fer");
// saludarHola("Ele");
// saludarHola("Mino");

// var saludarHi = saludar("hi");

// saludarHi ("fran");

//*BIND

// let persona ={nombre: "elena", apellido: "Chavez"}

// let logNombre =function(){
//     console.log(this.nombre);
// }

// let logNombrePersona = logNombre.bind(persona);

// logNombrePersona();

//*CALL

// let persona ={nombre: "elena", apellido: "Chavez"}

// let logNombre =function(){
//     console.log(this.nombre);
// }

// logNombre.call(persona);


// //* APPLY
// let persona ={nombre: "elena", apellido: "Chavez"}

// let logNombre =function(arg1,arg2){
//     console.log(arg1 + this.nombre + arg2);
// }

// logNombre.apply(persona,["hola "," como estas?"]);


//* Recursividad