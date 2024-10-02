//3- Operadores de asignacipon y bucles

//EJERCICIO 1
let contador = 10;
while(contador>0){
    console.log("Número: ",contador);
    contador--;
}

// //EJERCICIO 2
let num;
do{
    num = prompt("Ingrese un número mayor a 100")
}while(num<100);
console.log("Ingresaste un número mayor a 100: ",num);