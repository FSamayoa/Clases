var num = "10";
var sum = 0;
var largo =num.length-1

for (let i=0; i<num.length; i++){
    
    
    // console.log((num.split("")[i]));
    let digito = parseInt(num[i]);
    // console.log((2**largo)*(digito));
    sum += ((2**largo)*(digito));
    largo--
 }
//  console.log("potencias")
//  console.log(2**0);
//  console.log(2**1);
//  console.log(2**2);
//  console.log(2**3);
//  console.log(2**4);
//  console.log(2**5);
//  console.log (sum);


 var decimal = 91;
 var binario = "";
 var residuo = "";



while (decimal != 0){
    decimal = Math.floor(decimal / 2);
    residuo = (decimal % 2) + residuo;
}
console.log (residuo);



