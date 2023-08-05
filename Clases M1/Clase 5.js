//? Linked List

function nodo(data){
    this.data = data
    this.next = null
}

function linkedList (){
    this._length = 0
    this.head = null
}

let miLista = new linkedList()
console.log("Lista vacia",miLista);



//* Insertar Nodos--------------

linkedList.prototype.insertar = function(data){
    let  node = new nodo(data);

    let current = this.head

    if(!current){   //?this.head === null  !this.head
        this.head = node;
    } else {
        while(current.next){

            current = current.next
        }
        current.next = node
    }
    this._length++
}

miLista.insertar("Fer")

miLista.insertar("Elena")

miLista.insertar("David")

miLista.insertar("Samuel")

console.log(miLista);


//* Extraer nodos ---------------------

linkedList.prototype.delete = function () {}




//* Ver el tamaño de la lista --------------

linkedList.prototype.size = function () {}


//? HashTable-------------------------------------

//Martin: martinito@gmail.com => 6
// geronimo: gero:@gmail.com => 8
// francoi: franco@gmail.com => 7
// sol: minovia@gmail.com => 3


// function hash(){tranformar nombre a un numero}


// hashtable [1{}, 2{}, 3{sol: minovia@gmail.com}...
//6{Martin: martinito@gmail.com},7{francoi: franco@gmail.com},8{geronimo: gero:@gmail.com}]