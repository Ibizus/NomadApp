
function validar() {

var nombre = document.getElementById("nombre").value;
var usuario = document.getElementById("usuario").value;
var email = document.getElementById("email").value;
var contrasena = document.getElementById("contrasena").value;
var contrasena2 = document.getElementById("contrasena2").value;
var acepto = document.getElementById("acepto").checked;


// Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'error',
//     confirmButtonText: 'Cool'
//   })

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
}

}
