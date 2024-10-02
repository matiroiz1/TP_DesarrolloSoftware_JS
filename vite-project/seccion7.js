// 7- Introducción al DOM

//EJERCICIO 1

document.getElementById("cambiarColor").addEventListener("click", () => {
    let parrafos = document.querySelectorAll(".cambiar-color");
    parrafos.forEach(parrafo => {
        parrafo.style.color = "blue";
    });
});

//EJERCICIO 2

document.getElementById("alerta").
addEventListener("click", () => {
    let mostrarValor = document.getElementById("textoIngresado").value;
    alert("Has ingresado: "+ mostrarValor)
})