// 2- Operadores lógicos y condicionales

// EJERCICIO 1
let a = 22;
let b = 15;
let c = 23;

if(a>=b && a>=c){
    console.log("El mayor de los 3 números es: ",a);
}else if(b>=a && b>=c){
    console.log("El mayor de los 3 números es: ",b);
}else{
    console.log("El mayor de los 3 números es: ",c);
}

//EJERCICIO 2
let numIngresado = prompt("Ingrese un número y te diré si es par o impar");
if((numIngresado%2)==0 ){
    console.log("El número ingresado ",numIngresado, " es par")
}else{
    console.log("El número ingresado ",numIngresado, " es impar")
}