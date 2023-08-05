//*Clousure  Ejemplo 1

// function saludar (saludo){

//      return function(nombre){

//         console.log(saludo +" "+ nombre) //* '${saludo} ${nombre}'
//      }
// }


// let saludarHola = saludar("hola")
// let despedirse = saludar ("chau")

// console.log(saludarHola);

//* Ejemplo 2

// const condeContar = function(){
    
//     let cunetaGalletas = 0 // inicia en 0

//     return function(){
//         cunetaGalletas ++  //agregamos 1 al contador
//         console.log(cunetaGalletas + " galletas")
//     }
// }

// const contar = condeContar()  // 0 al aacenar la funcion da 0

// contar();
// contar();

//* Ejemplo 3

// var crearFuncion = function (){
//     var arr = [];

//     for (var i = 0; i<3; i++){  //? cuando se cambia VAR por LET funciona correctamente
//         arr.push(() => console.log(i));
//     }
//     return arr;
// }




//*  CALL

// const griffindor = {casa: "griffindor", 
//                     Ubica: "torre del castillo", 
//                     alumnos:[], sombrero(nombre, apellido){
//     console.log(nombre + " " + apellido + " has sido asignado a " + this.casa + " y tu casa se ubica en " + this.Ubica)
//     this.alumnos.push({alumno: nombre + apellido})
// }}

// griffindor.sombrero("Harry","Potter");
// griffindor.sombrero("Hermione","Granger")
// console.log(griffindor.alumnos);

// const slytherin = {casa: "Stilythering",
// Ubica: "La masmorra del castillo",
// alumnos: [], }

// const seleccionador = griffindor.sombrero

// // seleccionador ("draco","mallfoy")  //*no funciona

// console.log(seleccionador);

// seleccionador.call(slytherin,"draco","mallfoy")

// const ravenclaw = {casa: "Raveclaw",
// Ubica: "Torre de astronomia",
// alumnos: [], }

// seleccionador.call (ravenclaw,"Cho","Chang")

// const hufflepuff = {casa: "hufflepuff",
// Ubica: "Cocina del colegio",
// alumnos: [], }

// seleccionador.call (hufflepuff,"newt","scamander")


// //*APPLY  igual qie call pero con arreglos arrays

// const dataAlumnos = ["cedric","diegory"]
// seleccionador.apply(hufflepuff,dataAlumnos)
// seleccionador.call(hufflepuff,dataAlumnos) // asi lo pasa como una sola linea
// seleccionador.call(hufflepuff,...dataAlumnos) //* con call y spread operator (...) hace lo mismo que appli
// //* separa los arreglos y los coloca como se requiere en los argumentos


// //*BIND

const seleccionSlythering = seleccionador.bind(slytherin);

seleccionSlythering ("tom","riddle")


const Weasleys = ["ginny", "percy", "george", "fred", "Charly"]
const seleccionweaslys = seleccionador.bind(griffindor,"Weaslys")

Weasleys.forEach(persona=>{
    seleccionweaslys(nombre)
})