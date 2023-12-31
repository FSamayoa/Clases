//*Programa que hace todas las operaciones artitmeticas segun se ingresen

let num1 = 0;
let num2 = 0;

//*crear una funcion que suma, resta, multiplica y divide

let suma = function(num1,num2) {
    console.log(num1 + num2);
};
function resta(num1,num2) {
    console.log(num1 - num2);
};
let division = (num1,num2) =>{
    console.log(num1 / num2);
};
let multiplicacion = function(num1,num2){
    
    console.log(num1 * num2);
};

num1 = 4
num2 = 6

suma(5,9);
resta(2,2);
division(10,5);
multiplicacion(5,5);
console.log("Este es el numero 1: " + num1 + " y este es el numero 2: " + num2)

//* Aqui se vera si es mayor o menor

let mayorOMenor = function(num1,num2){
    if (num1>num2){
        console.log("numero 1 es mayor al numero 2")
    } else if (num2>num1){
        console.log("numero 2 es mayor al numero 1")
    } else {
        console.log ("numero 1 y numero 2 son iguales")
    }
}

mayorOMenor (6,6)
console.log (mayorOMenor)


//*Operadores logicos

//evalua si los 3 examenes son mayores a 6 
function evaluacion (examen1,examen2,examen3){
    
    let promedio = ((examen1+examen2+examen3)/3)
   
    if(promedio >=6 ){
        console.log("felicidades has aprovado el curso tu promedio es de: " + promedio.toFixed(2));
    } else if (promedio <= 6){
        console.log("te quedaste cerca tu promedio es de: " + promedio.toFixed(2))
    } else {
        console.log("hay un error en tus notas")
    }
}

evaluacion (6,6,5);



//*Ciclo for

for(i = 1; i<11; i++ ){
    // console.log(i);
}

for (a = 10; a >0; a--){
    // console.log (a);
}


//* Ciclo While

let semana = 10;

while (semana < 11){
    // console.log(semana);
    semana = semana + 1
}

while (semana > -1){
    // console.log(semana)
    semana = semana-1
}


//* Ciclo Switch
let grado = 1

switch (grado){
    case 1:

        console.log ("Elegiste primero de Primaria");
        break;
    case 2:
        console.log ("Elegiste segundo de Primaria");
        break;
    case 3:
        console.log ("Elegiste tercero de Primaria");
        break;
    case 4:
        console.log ("Elegiste cuarto de Primaria");
        break;
    case 5:
        console.log ("Elegiste quinto de Primaria");
        break;
    case 6:
        console.log ("Elegiste sexto de Primaria");
        break;
    default:
        console.log ("No elegiste un grado correcto");
        break;
}



//* Ciclo Do While

let calificacion = 8;

do {
    // console.log ("este es un conteo y vamos en el: " + calificacion)
    calificacion --;
}
while (calificacion>0)



//* Arreglos

let nucleoFamiliar = ["Fernando","elena","david","samuel","kira","mayron","mononino","kia"]
// console.log (nucleoFamiliar)
// console.log (nucleoFamiliar[5])
// console.log (nucleoFamiliar[7]="-")
// console.log (nucleoFamiliar)
// console.log (nucleoFamiliar[7]="kya")

for (e = 0; e<nucleoFamiliar.length; e++){
    // console.log (nucleoFamiliar[e]);
}

let o = nucleoFamiliar.length
while (o > 0 ){
    // console.log (nucleoFamiliar[o-1])
    o--
}

// nucleoFamiliar.push("perrito")
console.log (nucleoFamiliar)
// nucleoFamiliar.indexOf ("david")
// console.log (nucleoFamiliar.indexOf ("david"))
// console.log (nucleoFamiliar.slice(2,6))
// console.log (nucleoFamiliar.sort())
// console.log (nucleoFamiliar.reverse())


//* Metodos de recorrido de arreglos

//? FOR
let comidas = ["pozole", "enchiladas","espagueti","lasana","mole"]
// console.log (comidas)

for (i = 0; i<comidas.length; i++){
    // console.log("La comida numero: " + (i + 1) + " es " + comidas [i])
}


//? FOREACH
let edades = [5,7,10,12,13,14,18];
let edades2 = [];

edades.forEach(function(agregar) {
    return(edades2.push(agregar))

});
// console.log(edades2)


//? MAP

const edades3 = edades.map(function(elementos){
    return elementos / 2;
})

// console.log (edades3)

//? FILTER

const pares = edades.filter(function(edadesPares){
    return edadesPares % 2 === 0

})

console.log (pares)


//? REDUCE

let fibonachi = [1,2,3,4,5]

let totalFibonachi = fibonachi.reduce(function(a,b){
    return a*b
})

console.log (totalFibonachi)



//* Objetos 

const personal = {
    nombre:"Fernando", 
    edad: 30, 
    puesto: "director",
    resumen: function (){
        console.log ("El nombre del empleado es: " + this.nombre + ", y su puesto es de: " + this.puesto + ". El vive en: " + this.direccion.pais)
    }, 
    direccion: {
        calle:"tulipan",
        numero:"#5",
        delegacion:"iztapalapa", 
        telefono:5587746110,}}

        // ver un elemento del objeto
console.log (personal.direccion.telefono);
console.log (personal["direccion"]["delegacion"])


//añadir una propiedad al objeto

personal.direccion.pais ="Mexico";
personal ["direccion"]["municipio"] = "cdmx"
console.log (personal["direccion"]["pais"]);
console.log (personal.direccion.municipio);

//asignar un nuevo valor a un objeto
personal.nombre = "Fer"
console.log (personal.nombre);

//borrar una propiedad de un objeto
delete personal.direccion.municipio;
console.log (personal)

// objet.keys y hasOwnProperty
console.log (Object.keys(personal));  // El valo lo da como un array
console.log (personal.direccion.hasOwnProperty("telefono"));


//for in  el valor lo da como un elemento independiente

for (let propiedades in personal){
    console.log (propiedades)
}


// for each Da error no se por que

// personal.forEach(function(value,key){
//     console.log (key,value)
// });


//Contexto y this

personal.resumen();


//* Clases

class escuela {
    constructor (alumnos, profesores, padres, datos){
        this.alumnos = alumnos;
        this.profesores = profesores;
        this.padres = padres;
        this.datos = datos;
        
    }
}

console.log(escuela)

const primero = new escuela()
    primero.alumnos = 50;
    primero.profesores = "Elena";
    primero.padres = 50
 
    console.log (primero)

const segundo = new escuela()
    segundo.alumnos = 43;
    segundo.profesores = "Vivian";
    segundo.padres = 40
 
    console.log (segundo)

    console.log ("El profesor de primero es: " + primero.profesores + " y el profesor de segundo es:" + segundo.profesores)


escuela.prototype.saludar = function(){
    console.log ("Hola yo soy el profesor: " + this.profesores + " y tengo " +this.alumnos + " Alumnos")
}

primero.saludar()
segundo.saludar()


function nombre (){
    return ("Mi nombre es: ");
}
function telefono (){
    return ("Mi telefono es: ");
}

function nombreTelefono (a,b){
    return (a + b)
}
let res = nombreTelefono(nombre + telefono);


// function hacerSaludo (lenguaje){
//     if(lenguaje==="es"){
//         return ()=>{console.log("Hola")}
//     } else if (lenguaje === "in"){
//         return ()=>{console.log("Hi")}
//     }
// }

// var saludoingles = hacerSaludo("Hi")
// var saludoespanol = hacerSaludo("Hola")


//*Recursion

function cuentaRegresiva(number) {
      console.log(number);
      let nuevoNumero = number - 1;
      if (nuevoNumero === 0) {
        return;
      }
      cuentaRegresiva(nuevoNumero);
    }

    cuentaRegresiva(10);

// function printNumbers(callback) {
//     for (var i = 0; i < 3; i++) {
//       console.log(i);
//     }
  
//     callback();
//   }
  
//   function myCallback() {
//     console.log("¡Todos los números se han impreso!");
//   }
  
//   printNumbers(myCallback);



  function cacheFunction(cb) {

    let cache = {}
    
    return function(arg){
      if(cache.hasOwnProperty(arg)){
        return cache[arg];
      }else{
        let resultado =cb(arg);
        cache[arg] = resultado;
        return resultado
      }
    }
    
    //! Ternario  return cache.hasOwnProperty(arg) ? cache[arg]:(cache[arg]=cb(arg));
    
    }