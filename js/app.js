
function validar() {

var nombre = document.getElementById("nombre").value;
var usuario = document.getElementById("usuario").value;
var email = document.getElementById("email").value;
var contrasena = document.getElementById("contrasena").value;
var contrasena2 = document.getElementById("contrasena2").value;
var acepto = document.getElementById("acepto").checked;

/* variables creadas para la validación */
var todoOk = true;
var infoUsuario = [nombre, usuario, email, contrasena, contrasena2];

infoUsuario.forEach(dato => {

    if(dato == "")
    {
        /* lanza mensaje campo vacío */
        Swal.fire({
            title: 'Error!',
            text: 'Quedan campos vacíos',
            icon: 'error',
            confirmButtonText: 'Ups!'
          })
        todoOk = false;  
    }
})

if(contrasena != contrasena2)
{
    /* lanza mensaje contraseñas diferentes */
    Swal.fire({
        title: 'Error!',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
        confirmButtonText: 'Ouch!'
      })
      todoOk = false;  
}

if(!acepto)
{
    /* lanza mensaje acepta condiciones */
    Swal.fire({
        title: 'Error!',
        text: 'Acepta las condiciones!',
        icon: 'error',
        confirmButtonText: '¡Voy!'
      })
      todoOk = false;  
}

/* Creo el objeto JS con las variables que voy a enviar: */
var registroJS =
{
    nombre,
    usuario,
    email,
    contrasena,
};
/* Lo convierto a Json: */
var salidaJSON = JSON.stringify(registroJS);

/* Si todas las validaciones han funcionado lo muestro en pantalla */
if(todoOk)
{
    Swal.fire({
        title: 'Registrado!',
        text: salidaJSON,
        icon: 'success',
        showConfirmButton: false,
        timer: 3000
      })
}

}
