//9- LocalStorage

//Traigo los elementos del DOM
let guardarCorreo= document.getElementById("guardar-correo")
let eliminarCorreo = document.getElementById("eliminar-correo")
let email = document.getElementById("email")
let mensaje = document.getElementById("mensaje")
//Para validar los corrreos ingresados
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Boton de guardar
guardarCorreo.addEventListener("click", (e) => {
  e.preventDefault(); //para que no recargue la pagina al presionar
  if (email.value != "" && regex.test(email.value)) {
      mensaje.classList.add("mensaje", "exito")  //se agrega un estilo de mensaje exitoso
      mensaje.innerHTML = `<p>Correo guardado: ${email.value}</p>` //se muestra en el DOM
      localStorage.setItem("mail", email.value)  //guardamos el mail en el storage
  } else {
      mensaje.classList.remove("error", "exito", "mensaje") //limpia los estilos previamente puestos
      mensaje.classList.add("mensaje", "error") //se agrega un estilo de mensaje erroneo
      mensaje.innerHTML = `<p>Ingrese un mail valido, por favor.</p>`  //se muestra en el DOM
  }
})

//Boton de eliminar
eliminarCorreo.addEventListener("click", (e) => {
  e.preventDefault();
  let correo = localStorage.getItem("mail") //recupero el mail del storage
  if (correo != null) {
      localStorage.removeItem("mail") //lo elimino del storage
      mensaje.classList.add("mensaje", "exito")
      mensaje.innerHTML = `<p>Correo eliminado con exito</p>`
  }
})