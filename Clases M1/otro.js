//*Callback

function primero(){
    console.log ("estas"); 
    
};

function segundo(){
    console.log ("como");
};

function tercero(primero,segundo){
    console.log ("hola");
    segundo();
    primero();
};



tercero(segundo,primero);


//*Clousure

function makeAdder(a) {
    return function(b) {
      return a + b;
    };
  }
  
  let adder = makeAdder(5);
  
  console.log(adder(10)); // 15


  function contador() {
    let count = 0;
    return function() {
        count++;
        console.log (count);
        return count;
    };
}

let contando = contador();
contando();




function saludo (a){
    return function (b){
        console.log (a, " ", b)
        return (a, " ", b)
    }
}

let saludar = saludo ("hola")

saludar ("Fernando");



//*funciones recursivas


//factorial

// function factorial (num){
//     let suma = 0
//     let factor = num;
//     let arr = []
//    if (num>1){
//             factor = (num*factor)
//             suma += (num*factor)
//             arr.push(num)
//             console.log(suma)
//             console.log(arr)
//             console.log(num)
//            console.log (factor)
//            factorial(num-1)
        
//         }
        
// }
// factorial(5)


function factorial (num){
let resultado = 0
if (num===1){
    return 1;
    factorial(num-1)
}else {
    resultado = (num*factorial(num-1))
    console.log(resultado)
}   return resultado
}
factorial(4)


//* Fibonachi
function nFibonacci(n) {
    let secuencia = [0,1];
    let largo = secuencia.length

    console.log (secuencia.length)
    console.log (secuencia)

   if (largo < n){
    secuencia.push(secuencia[largo-1] + secuencia[largo-2]);

    nFibonacci(n-1)
   }
   console.log(secuencia)
    console.log(secuencia[n])
    
    }

nFibonacci(8)


function nFibonaccini(n) {

    if(n<2)return n;
    
    console.log(nFibonaccini(n-1) + nFibonaccini(n-2))
      return nFibonaccini(n-1) + nFibonaccini(n-2)
    }
    nFibonaccini(7)


    //*Arbol binario

    class Node {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
    
    class BinarySearchTree {
        constructor() {
            this.root = null;
        }
    
        insert(value, node = this.root) {
            if (!this.root) {
                this.root = new Node(value);
                return this;
            }
            if (value === node.value) return undefined;
            if (value < node.value) {
                if (!node.left) {
                    node.left = new Node(value);
                    return this;
                }
                return this.insert(value, node.left);
            } else {
                if (!node.right) {
                    node.right = new Node(value);
                    return this;
                }
                return this.insert(value, node.right);
            }
        }
    
        contains(value, node = this.root) {
            if (!node) return false;
            if (value === node.value) return true;
            if (value < node.value) return this.contains(value, node.left);
            if (value > node.value) return this.contains(value, node.right);
        }
    
        size(node = this.root) {
            if (!node) return 0;
            return 1 + this.size(node.left) + this.size(node.right);
        }
    
        depthFirstForEach(order = "in-order", callback, node = this.root) {
            if (!node) return;
            if (order === "pre-order") callback(node.value);
            this.depthFirstForEach(order, callback, node.left);
            if (order === "in-order") callback(node.value);
            this.depthFirstForEach(order, callback, node.right);
            if (order === "post-order") callback(node.value);
        }
    
        breadthFirstForEach(callback) {
            const queue = [];
            if (this.root) queue.push(this.root);
    
            while (queue.length) {
                const current = queue.shift();
                callback(current.value);
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }
        }
    }
    
    // Prueba de la clase BinarySearchTree
    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(2);
    tree.insert(7);
    tree.insert(12);
    tree.insert(20);
    
    console.log(tree.size()); // Output: 7
    console.log(tree.contains(15)); // Output: true
    console.log(tree.contains(8)); // Output: false
    
    console.log("In-order:");
    tree.depthFirstForEach("in-order", value => console.log(value));
    console.log("Pre-order:");
    tree.depthFirstForEach("pre-order", value => console.log(value));
    console.log("Post-order:");
    tree.depthFirstForEach("post-order", value => console.log(value));
    
    console.log("Breadth-first:");
    tree.breadthFirstForEach(value => console.log(value));