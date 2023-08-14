function arbolbinario (value){//binario normal solo mayores a la derecha menores a la izquierda
    this.value = value
    this.right = null
    this.left = null
}

arbolbinario.prototype.insert = function (value){
    let subArbol = new arbolbinario(value)

    //es menor y se va a la izquierda
    if(value<this.value){
        if(this.left===null){
            this.left = subArbol;
        } else {
            this.left.insert(value)
        }
        
    }
}

    //es mayor y se va a la derecha
    if (value>this.value){
        if(this.right===null){
            this.right=subArbol
        }else{
            this.right.insert(value)
        }
    }

let arbolito = arbolbinario (5);
console.log (arbolito)