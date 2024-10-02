//6- Arrays

// //EJERCICIO 1

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = array1.map(num => num * 2);

console.log("Números originales: ", array1);
console.log("Números multiplicados por 2: ", array2);

// //EJERCICIO 2

let pares=[];
for(let i=1; i<=20; i++){
    if((i%2)==0){
        pares.push(i);
    }
}
console.log("Primeros 10 números pares: ", pares);