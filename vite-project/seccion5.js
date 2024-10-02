//5- Objetos en JavaScript

// //EJERCICIO 1

let persona = {
    nombre: "Matias",
    edad: 22,
    ciudad: "Godoy Cruz",
    cambiar: function(ciudad2){
        this.ciudad = ciudad2;
    }
}

console.log("Mis datos anteriores son: Persona: ",persona.nombre," Edad: ",persona.edad," Ciudad: ", persona.ciudad);
persona.cambiar("Maipú");
console.log("Mis datos actuales son: Persona: ",persona.nombre," Edad: ",persona.edad," Ciudad: ", persona.ciudad);

// //EJERCICIO 2

let libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    anio: 1605,
    antiguedad: function(anio){
        let antiguo = (2024-anio);
        if(antiguo>10){
            console.log("El libro, ",libro.titulo, "  es antiguo",(antiguo>10));
        }else{
            console.log("El libro, ",libro.titulo, "  es antiguo",(antiguo>10));
        } 
    }
}
libro.antiguedad(libro.anio);