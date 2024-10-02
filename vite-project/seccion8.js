//8- Eventos en DOM

//EJERCICIO 1

let elementosLista = document.querySelectorAll("ul li");
elementosLista.forEach(elemento =>{
    elemento.addEventListener("click", ()=>{
        console.log(elemento.textContent);
    });
});

//EJERCICIO 2
document.getElementById("botonDeshabilitar").addEventListener("click", ()=>{
    let des = document.getElementById("ingresoDatos");
    des.disabled = true;
})

document.getElementById("botonHabilitar").addEventListener("click", ()=>{
    let des = document.getElementById("ingresoDatos");
    des.disabled = false;
})