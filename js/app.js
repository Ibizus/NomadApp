

var input = document.getElementById('pass').value;

input.oninvalid = function(event) { event.target.setCustomValidity('Mínimo 8 caracteres y al menos 1 mayúscula, minúscula, dígito y carácter especial'); }




var nombre = document.getElementById("nombre").value;
var usuario = document.getElementById("usuario").value;
var email = document.getElementById("email").value;
var contrasena = document.getElementById("contrasena").value;
var contrasena2 = document.getElementById("contrasena2").value;
var acepto = document.getElementById("acepto").value;

var infoUsuario = [nombre, usuario, email, contrasena,contrasena2];
infoUsuario.forEach(dato => {
    if(dato.value == "")
    {
        /* lanza mensaje campo vacío */
    }
});


if(contrasena != contrasena2)
{
    /* lanza mensaje contraseñas diferentes */
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
}


if(!acepto)
{
    /* lanza mensaje acepta condiciones */
}

