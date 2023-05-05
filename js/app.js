

var input = document.getElementById('pass');

input.oninvalid = function(event) { event.target.setCustomValidity('Mínimo 8 caracteres y al menos 1 mayúscula, minúscula, dígito y carácter especial'); }