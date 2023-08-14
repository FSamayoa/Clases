//*ejercicio 2

/*
 * Completa la función 'consultarPreparacion' a continuación.
 *
 * La función 'consultarPreparacion' debe retornar una FUNCIÓN. Ésta, a su vez, recibe un ARREGLO DE OBJETOS por parámetro, y retorna un ARREGLO DE STRINGS.
 * La función 'consultarPreparacion' recibe un ARREGLO DE STRINGS 'tragos' por parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function consultarPreparacion(tragos) {
    // Tu código aquí
   return function(carta) {
    const preparaciones = [];

   let allTragosInCarta = true;

    tragos.forEach(trago => {
      const tragoEnCarta = carta.find(item => item.nombre.toLowerCase() === trago.toLowerCase());
      if (tragoEnCarta) {
        const preparacion = "El " + tragoEnCarta.nombre + " se prepara con " + tragoEnCarta.preparacion;
        preparaciones.push(preparacion);
      } else {
        allTragosInCarta = false;
      }
    });

    if (!allTragosInCarta) {
      return ["Por favor, verifique los nombres de los tragos que quiere consultar"];
    }

    return preparaciones;
  };
}



//*ejercicio 4

// * Completa la función 'encontrarTaquilleras' a continuación.
// *
// * La función deberá retornar un ARREGLO DE OBJETOS ó un STRING.
// * La función recibe un ARREGLO DE OBJETOS 'cartelera' por parámetro.
// *
// * No modifiques nada por fuera del cuerpo de la función.
// *
// * TIP: Puedes agregar default parameters a la función.
// */

function encontrarTaquilleras(cartelera, index = 0, result = []) {
   //Tu código aquí:
   if (index >= cartelera.length) {
       if (result.length === 0) {
           return "No se encontraron peliculas taquilleras";
       } else {
           return result;
       }
   }

   if (cartelera[index].taquillera) {
       result.push(cartelera[index]);
   }

   return encontrarTaquilleras(cartelera, index + 1, result);

}




//*ejercicio 6
    // *
    // * Completa la función 'ordenarPeliculas' a continuación.
    // *
    // * La función debe retornar un ARREGLO DE OBJETOS.
    // * La función recibe por parámetro(s):
    // *  1. ARREGLO DE OBJETOS 'catalogo'
    // *  2. ARREGLO DE OBJETOS 'nuevasPeliculas'
    // *
    // * No modifiques nada por fuera del cuerpo de la función.
    // *
    // * TIP: Puede ser de ayuda el método assign de los objetos.
    // // 
   
   function ordenarPeliculas(catalogo, nuevasPeliculas) {
       // Tu código aquí:
       const todasLasPeliculas = [...catalogo, ...nuevasPeliculas];
   
       // Ordenar las películas por año utilizando el algoritmo de ordenamiento burbuja
       for (let i = 0; i < todasLasPeliculas.length - 1; i++) {
           for (let j = 0; j < todasLasPeliculas.length - i - 1; j++) {
               if (todasLasPeliculas[j].año > todasLasPeliculas[j + 1].año) {
                   // Intercambiar las posiciones de las películas
                   const temp = todasLasPeliculas[j];
                   todasLasPeliculas[j] = todasLasPeliculas[j + 1];
                   todasLasPeliculas[j + 1] = temp;
               }
           }
       }
   
       return todasLasPeliculas;
   
   }
   
   


//* ejercicio 7
    // *
    // * Completa el método 'entregarPedido' a continuación.
    // *
    // * La función debe retornar una LISTA ENLAZADA.
    // * La función recibe un ARRAY DE STRINGS 'clientes' por parámetro.
    // *
    // * No modifiques nada por fuera del cuerpo de la función.
    // */
   
   LinkedList.prototype.entregarPedido = function (clientes) {
       // Tu código aquí:
          
       const newLinkedList = new LinkedList();
       let currentNode = this.head;
   
       while (currentNode) {
           const pedido = currentNode.value.trago;
           const recibo = currentNode.value.precio;
   
           if (clientes.includes(currentNode.value.nombre) && pedido) {
               newLinkedList.add({ pedido, recibo }); 
           }
   
           currentNode = currentNode.next;
       }
   
       return newLinkedList;
   };
   



//* ejercicio 8
    /*
 * Completa el método 'encontrarPedidoRepetido' a continuación.
 *
 * La función debe retornar una LISTA ENLAZADA.
 * La función recibe un STRING por parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

LinkedList.prototype.encontrarPedidoRepetido = function (nombre) {
    // Tu código aquí:
 const newLinkedList = new LinkedList();
    let currentNode = this.head;

    while (currentNode) {
        if (currentNode.value.nombre === nombre) {
            newLinkedList.add(currentNode.value);
        }

        currentNode = currentNode.next;
    }

    return newLinkedList.head ? newLinkedList : false;

};



//* ejercicio 1
/*
 * Completa la función 'guardarPeliculas' a continuación.
 *
 * La función debe retornar un OBJETO.
 * La función recibe por parámetro una QUEUE.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function guardarPeliculas(pelisQueue) {
    // Tu código aquí
   
   const peliculasGuardadas = {};
    let numero = 1;

    while (pelisQueue.size() > 0) {
        const pelicula = pelisQueue.dequeue();
        if (numero === 1) {
            peliculasGuardadas.estrenar = pelicula;
        } else {
            peliculasGuardadas[numero-1] = pelicula;
        }
        numero++;
    }

    return peliculasGuardadas;
}
function main() {