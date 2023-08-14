function sumArray(array) {

    let max = array[0]
    let min = array[array.length - 1]
    let sum = 0
if (array.length < 2 ){
    return 0
}
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        if(array[i] >= max){
            max = array[i]
        } if(array[i] < min){
            min = array[i]
        }


        console.log (sum - (max+min));


        console.log (sum)
        console.log (max)
        console.log (min)   
    }

console.log (array)

}


let array = [3 ]

sumArray(array)