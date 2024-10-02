//4- Funciones de JavaScript

//EJERCICIO 1
let num;
do{
    num = prompt("Ingrese un número positivo");
} while(num<0);

function esPar(num){
    return ((num%2)==0);  //Analiza mediante una división aquellos que tengan resto 0 para devolver true o false
}
console.log("El número ",num," es par: ", esPar(num));

//EJERCICIO 2

let grados;
do{
    grados = prompt("Ingrese los grados celcius para transformarlos en farenheit");
} while(grados<0);

function convertirCelsiusAFahrenheit(grados){
    return grados*1.8+32;
}
console.log(grados,"°C son equivalentes a ",convertirCelsiusAFahrenheit(grados),"°F");
