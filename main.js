let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let mensajesContainer = document.getElementById('mensajes-container');
const limpiarBtn = document.getElementById('limpiarBtn');

const passwordRegex  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*?&";

function generar(){
   
    let numeroDigitado = parseInt (cantidad.value);

    if(numeroDigitado < 8){
    alert("la cantidad de caracteres tiene que ser mayor que 8")
    }

    let password= '';
    
   for(let i=0; i < numeroDigitado; i++){
        let caracterAleatorio= passwordRegex[Math.floor(Math.random() * passwordRegex.length)];
        console.log(caracterAleatorio);

        password+= caracterAleatorio;
    }
    
    contrasena.value = password;

    function validarContrasena(password) {
      const minLength = /^.{8,}$/; // Al menos 8 caracteres
      const mayuscula = /[A-Z]/; // Al menos una letra mayúscula
      const minuscula = /[a-z]/; // Al menos una letra minúscula
      const numero = /\d/; // Al menos un número
      const especial = /[@$!%*?&]/; // Al menos un carácter especial
      
      let mensajes = [];
    
      if (!minLength.test(password)) {
        mensajes.push("La contraseña debe tener al menos 8 caracteres.");
      }
      if (!mayuscula.test(password)) {
        mensajes.push("La contraseña debe contener al menos una letra mayúscula.");
      }
      if (!minuscula.test(password)) {
        mensajes.push("La contraseña debe contener al menos una letra minúscula.");
      }
      if (!numero.test(password)) {
        mensajes.push("La contraseña debe contener al menos un número.");
      }
      if (!especial.test(password)) {
        mensajes.push("La contraseña debe contener al menos un carácter especial (@, $, !, %, *, ?, &).");
      }
    
      if (mensajes.length > 0) {
        mensajesContainer.innerText = "La contraseña no es del todo segura";
        mensajesContainer.style.color = "red"; // Cambia el texto a rojo
      } else {
        mensajesContainer.innerText = "La contraseña es segura.";
        mensajesContainer.style.color = "green"; // Cambia el texto a verde
      }
    }
    const resultado = validarContrasena(password);
    mensajesContainer.value = resultado;
    //console.log(mensajes.join("\n"));
    
}
  // Función para limpiar todos los campos del formulario
  limpiarBtn.addEventListener('click', function() {
    cantidad.value = ''; 
    mensajesContainer.value = ''; 
    contrasena.value = '';  // Limpia todos los campos del formulario
  });
    
   // mensajesContainer.innerHTML = resultado; Solo nos serviría el inner si utilizamos un div, pero en este caso usamos un input por lo tanto no lo reconoce








